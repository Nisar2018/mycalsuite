import React, { useState, useEffect, useRef } from "react";

export default function ScientificCalculator() {
  const [expr, setExpr] = useState("");   // internal expression (also shown)
  const [result, setResult] = useState("");
  const [angleMode, setAngleMode] = useState("RAD"); // "DEG" or "RAD"
  const [memory, setMemory] = useState(0);
  const inputRef = useRef(null);

  // ---------- Math helpers ----------
  const factorial = (n) => {
    n = Number(n);
    if (!Number.isFinite(n) || n < 0) return NaN;
    n = Math.floor(n);
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  };

  const trig = {
    sin: (x) => (angleMode === "DEG" ? Math.sin((x * Math.PI) / 180) : Math.sin(x)),
    cos: (x) => (angleMode === "DEG" ? Math.cos((x * Math.PI) / 180) : Math.cos(x)),
    tan: (x) => (angleMode === "DEG" ? Math.tan((x * Math.PI) / 180) : Math.tan(x)),
    asin: (x) => {
      const v = Math.asin(x);
      return angleMode === "DEG" ? (v * 180) / Math.PI : v;
    },
    acos: (x) => {
      const v = Math.acos(x);
      return angleMode === "DEG" ? (v * 180) / Math.PI : v;
    },
    atan: (x) => {
      const v = Math.atan(x);
      return angleMode === "DEG" ? (v * 180) / Math.PI : v;
    },
  };

  const ln = (x) => Math.log(x);
  const log10 = (x) => (Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10);
  const pow10 = (x) => Math.pow(10, x);
  const expFn = (x) => Math.exp(x);
  const rootFn = (y, x) => Math.pow(x, 1 / y); // root(y, x) -> x^(1/y)

  // ---------- evaluator ----------
  const evaluateExpr = (raw) => {
    if (!raw || raw.trim() === "") return null;
    try {
      let s = raw;
      // cosmetic tokens to JS
      s = s.replace(/×/g, "*").replace(/÷/g, "/");
      s = s.replace(/EXP/g, "E"); // keep E as scientific notation token
      // replace factorial tokens like 5! or (3+2)! -> factorial(...)
      s = s.replace(/(\d+(\.\d+)?|\([^()]+\))!/g, "factorial($1)");
      // create function with helper functions injected
      // eslint-disable-next-line no-new-func
      const fn = new Function(
        "sin","cos","tan","asin","acos","atan",
        "ln","log10","sqrt","cbrt","factorial","pow10","expFn","rootFn","Math",
        `return (${s});`
      );
      const val = fn(
        trig.sin, trig.cos, trig.tan,
        trig.asin, trig.acos, trig.atan,
        ln, log10, Math.sqrt, Math.cbrt || ((v) => Math.pow(v, 1 / 3)),
        factorial, pow10, expFn, rootFn, Math
      );
      return val;
    } catch (err) {
      return null;
    }
  };

  // ---------- UI helpers (insert & caret) ----------
  // insert rawText at caret, move caret back 'moveLeft' chars (default 0)
  const insertAtCaret = (rawText, moveLeft = 0) => {
    const el = inputRef.current;
    if (!el) {
      // fallback: append
      setExpr((p) => p + rawText);
      return;
    }
    const start = el.selectionStart ?? expr.length;
    const end = el.selectionEnd ?? expr.length;
    const newExpr = expr.slice(0, start) + rawText + expr.slice(end);
    setExpr(newExpr);
    // set caret after insertion (but moved left if requested)
    setTimeout(() => {
      el.focus();
      const pos = start + rawText.length - moveLeft;
      el.setSelectionRange(pos, pos);
    }, 0);
  };

  // replace last numeric token or parenthesis group
  const replaceLastToken = (prefixRaw, suffixRaw = "", wrap = true) => {
    // find last token: number (with decimals) or parenthesized expr
    const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
    if (m) {
      const token = m[0];
      const start = expr.length - token.length;
      const newRaw = expr.slice(0, start) + prefixRaw + token + suffixRaw;
      setExpr(newRaw);
      setTimeout(() => {
        const el = inputRef.current;
        if (el) {
          const pos = newRaw.length;
          el.focus();
          el.setSelectionRange(pos, pos);
        }
      }, 0);
      return true;
    }
    return false;
  };

  // ---------- Buttons layout (your original 5 rows) ----------
  const buttons = [
    ["sin", "cos", "tan", "(", ")", "7", "8", "9", "+", "Back"],
    ["sin-1", "cos-1", "tan-1", "π", "e", "4", "5", "6", "-", "Ans"],
    ["xy", "x2", "x3", "ex", "10x", "1", "2", "3", "×", "M+"],
    ["y√x", "3√x", "√x", "ln", "logx", "0", ".", "EXP", "÷", "M-"],
    ["1/x", "%", "n!", "±", "RND", "AC", "=", "MR", "MC"],
  ];

  // ---------- Main click handler ----------
  const handleClick = (label) => {
    // clear
    if (label === "AC") {
      setExpr("");
      setResult("");
      return;
    }

    // backspace (delete char before caret)
    if (label === "Back") {
      const el = inputRef.current;
      if (!el) {
        setExpr((p) => p.slice(0, -1));
        return;
      }
      const pos = el.selectionStart ?? expr.length;
      if (pos === 0) return;
      const newExpr = expr.slice(0, pos - 1) + expr.slice(pos);
      setExpr(newExpr);
      setTimeout(() => {
        el.focus();
        const caret = pos - 1;
        el.setSelectionRange(caret, caret);
      }, 0);
      return;
    }

    // Ans (insert last result)
    if (label === "Ans") {
      if (result !== "" && result !== "Error" && result !== null && result !== undefined) {
        insertAtCaret(String(result), 0);
      }
      return;
    }

    // memory ops
    if (label === "M+") {
      if (result !== "" && result !== "Error") setMemory((m) => m + Number(result || 0));
      return;
    }
    if (label === "M-") {
      if (result !== "" && result !== "Error") setMemory((m) => m - Number(result || 0));
      return;
    }
    if (label === "MR") {
      insertAtCaret(String(memory), 0);
      return;
    }
    if (label === "MC") {
      setMemory(0);
      return;
    }

    // Random
    if (label === "RND") {
      insertAtCaret(String(Math.random()), 0);
      return;
    }

    // Parentheses and digits basic tokens
    if (label === "(" || label === ")" || /^[0-9.]$/.test(label) || label === "+" || label === "-" || label === "+" || label === "=") {
      // treat '=' separately below
      if (label === "=") {
        // evaluate strictly
        try {
          const v = evaluateStrict(expr);
          if (v === undefined || v === null || Number.isNaN(v)) {
            setResult("Error");
          } else {
            setResult(v);
            setExpr(String(v));
            setTimeout(() => {
              const el = inputRef.current;
              if (el) el.setSelectionRange(String(v).length, String(v).length);
            }, 0);
          }
        } catch {
          setResult("Error");
        }
        return;
      }
      // normal token
      insertAtCaret(label, 0);
      return;
    }

    // operators × ÷ shown on buttons -> map to JS symbols
    if (label === "×") {
      insertAtCaret("*", 0);
      return;
    }
    if (label === "÷") {
      insertAtCaret("/", 0);
      return;
    }

    // EXP -> 'E' (scientific notation)
    if (label === "EXP") {
      insertAtCaret("E", 0);
      return;
    }

    // ± toggle last number sign
    if (label === "±") {
      // find last number
      const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
      if (m) {
        const token = m[0];
        const start = expr.length - token.length;
        const replaced = expr.slice(0, start) + "(" + "-" + token + ")";
        setExpr(replaced);
        setTimeout(() => {
          const el = inputRef.current;
          if (el) el.setSelectionRange(replaced.length, replaced.length);
        }, 0);
      } else {
        // insert negative sign
        insertAtCaret("-", 0);
      }
      return;
    }

    // constants
    if (label === "π") {
      // insert Math.PI (keeps expression valid). If you want shorter display, we would need separate disp mapping.
      insertAtCaret("Math.PI", 0);
      return;
    }
    if (label === "e") {
      insertAtCaret("Math.E", 0);
      return;
    }

    // Trig & logs: insert autoclose parentheses and put caret inside
    const funcAutoclose = {
      "sin": "sin()",
      "cos": "cos()",
      "tan": "tan()",
      "sin-1": "asin()", // asin
      "cos-1": "acos()",
      "tan-1": "atan()",
      "ln": "ln()",
      "logx": "log()", // we'll map log() to log10() in evaluator
      "√x": "sqrt()",
      "3√x": "cbrt()",
      "ex": "expFn()",
      "10x": "pow10()",
    };
    if (label in funcAutoclose) {
      insertAtCaret(funcAutoclose[label], 1); // put caret inside parentheses
      return;
    }

    // y√x: special: if last token exists, transform last token into second arg: root(,token)
    if (label === "y√x") {
      const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
      if (m) {
        const token = m[0];
        const start = expr.length - token.length;
        const newRaw = expr.slice(0, start) + "root(," + token + ")";
        setExpr(newRaw);
        setTimeout(() => {
          const el = inputRef.current;
          if (el) {
            // place caret after '('
            const pos = start + "root(".length;
            el.focus();
            el.setSelectionRange(pos, pos);
          }
        }, 0);
      } else {
        // nothing to wrap — insert root() with caret inside
        insertAtCaret("root()", 1);
      }
      return;
    }

    // x^y (xy) — if last token exists, wrap as Math.pow(token, ) and put caret to type exponent
    if (label === "xy") {
      const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
      if (m) {
        const token = m[0];
        const start = expr.length - token.length;
        const newRaw = expr.slice(0, start) + "Math.pow(" + token + ",";
        setExpr(newRaw);
        setTimeout(() => {
          const el = inputRef.current;
          if (el) {
            const pos = newRaw.length; // caret after comma
            el.focus();
            el.setSelectionRange(pos, pos);
          }
        }, 0);
      } else {
        // no base — insert Math.pow(, ) placeholder
        insertAtCaret("Math.pow(,", 1); // caret between parentheses
      }
      return;
    }

    // x^2 and x^3: wrap last token into Math.pow(token,2)
    if (label === "x2" || label === "x3") {
      const power = label === "x2" ? 2 : 3;
      const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
      if (m) {
        const token = m[0];
        const start = expr.length - token.length;
        const newRaw = expr.slice(0, start) + "Math.pow(" + token + "," + power + ")";
        setExpr(newRaw);
        setTimeout(() => {
          const el = inputRef.current;
          if (el) {
            const pos = newRaw.length;
            el.focus();
            el.setSelectionRange(pos, pos);
          }
        }, 0);
      } else {
        // fallback: insert Math.pow( ,power)
        insertAtCaret("Math.pow(," + power + ")", 1);
      }
      return;
    }

    // √x, 3√x handled earlier
    // 1/x wrap last token into (1/(token))
    if (label === "1/x") {
      const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
      if (m) {
        const token = m[0];
        const start = expr.length - token.length;
        const newRaw = expr.slice(0, start) + "(1/(" + token + "))";
        setExpr(newRaw);
        setTimeout(() => {
          const el = inputRef.current;
          if (el) {
            el.focus();
            el.setSelectionRange(newRaw.length, newRaw.length);
          }
        }, 0);
      } else {
        insertAtCaret("(1/())", 1);
      }
      return;
    }

    // percentage: convert last token to (token/100)
    if (label === "%") {
      const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
      if (m) {
        const token = m[0];
        const start = expr.length - token.length;
        const newRaw = expr.slice(0, start) + "(" + token + "/100)";
        setExpr(newRaw);
        setTimeout(() => {
          const el = inputRef.current;
          if (el) el.setSelectionRange(newRaw.length, newRaw.length);
        }, 0);
      } else {
        insertAtCaret("/100", 0);
      }
      return;
    }

    // Factorial: append '!' to last token (calculate will transform)
    if (label === "n!x") {
      const m = expr.match(/(\d+(\.\d+)?|\([^()]*\))$/);
      if (m) {
        insertAtCaret("!", 0);
      } else {
        insertAtCaret("!", 0);
      }
      return;
    }

    // logs / misc mapping: logx -> log10(...) was handled as log() above
    // default: insert text as-is
    insertAtCaret(label, 0);
  };

  // ---------- strict evaluate used by '=' ----------
  const evaluateStrict = (raw) => {
    // same as evaluateExpr but throw when invalid
    let s = raw;
    s = s.replace(/×/g, "*").replace(/÷/g, "/");
    s = s.replace(/EXP/g, "E");
    s = s.replace(/(\d+(\.\d+)?|\([^()]+\))!/g, "factorial($1)");
    // eslint-disable-next-line no-new-func
    const fn = new Function(
      "sin","cos","tan","asin","acos","atan",
      "ln","log10","sqrt","cbrt","factorial","pow10","expFn","rootFn","Math",
      `return (${s});`
    );
    const val = fn(
      trig.sin, trig.cos, trig.tan,
      trig.asin, trig.acos, trig.atan,
      ln, log10, Math.sqrt, Math.cbrt || ((v) => Math.pow(v, 1 / 3)),
      factorial, pow10, expFn, rootFn, Math
    );
    return val;
  };

  // ---------- Live preview: attempt evaluate silently (do NOT set "Error" while typing) ----------
  useEffect(() => {
    const v = evaluateExpr(expr);
    if (v === null) setResult(""); // leave blank while typing / invalid partial
    else setResult(v);
  }, [expr, angleMode]);

  // ---------- Keyboard support ----------
  useEffect(() => {
    const onKey = (e) => {
      // allow numbers and dot
      if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
        insertAtCaret(e.key, 0);
        e.preventDefault();
        return;
      }
      if (e.key === "+" || e.key === "-") {
        insertAtCaret(e.key, 0);
        e.preventDefault();
        return;
      }
      if (e.key === "*" || e.key === "x") {
        insertAtCaret("*", 0);
        e.preventDefault();
        return;
      }
      if (e.key === "/") {
        insertAtCaret("/", 0);
        e.preventDefault();
        return;
      }
      if (e.key === "Enter") {
        // run strict evaluate
        try {
          const val = evaluateStrict(expr);
          if (val === undefined || val === null || Number.isNaN(val)) setResult("Error");
          else {
            setResult(val);
            setExpr(String(val));
            setTimeout(() => {
              const el = inputRef.current;
              if (el) el.setSelectionRange(String(val).length, String(val).length);
            }, 0);
          }
        } catch {
          setResult("Error");
        }
        e.preventDefault();
        return;
      }
      if (e.key === "Backspace") {
        handleClick("Back");
        e.preventDefault();
        return;
      }
      if (e.key === "Escape") {
        handleClick("AC");
        e.preventDefault();
        return;
      }
      if (e.key === "(" || e.key === ")") {
        insertAtCaret(e.key, 0);
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expr, result, angleMode, memory]);
  

 // ---------- Render ----------
return (
  <div className="flex flex-col items-center p-4">
    
    <div className="w-full max-w-3xl border border-blue-100 shadow-lg rounded-xl p-2 bg-white">
      {/* Display */}
      <input
        ref={inputRef}
        readOnly
        value={expr || ""}
        onChange={() => {}}
        className=" p-1 rounded text-right text-lg font-mono w-full"
      />

      {/* Result */}
      <div className="bg-blue-900 p-1 text-white rounded text-right text-xl font-bold min-h-[40px] overflow-x-auto">
        {result !== "" ? String(result) : ""}
      </div>

      {/* Angle Mode */}
      <div className="flex justify-center gap-6 my-3">
        <label className="flex items-center gap-2 text-blue-900 font-semibold">
          <input
            type="radio"
            name="angleMode"
            checked={angleMode === "DEG"}
            onChange={() => setAngleMode("DEG")}
          />
          DEG
        </label>
        <label className="flex items-center gap-2 text-blue-900 font-semibold">
          <input
            type="radio"
            name="angleMode"
            checked={angleMode === "RAD"}
            onChange={() => setAngleMode("RAD")}
          />
          RAD
        </label>
      </div>

      {/* Buttons for Mobile (First 5 buttons of each row → rows 1–5) */}
      <div className="md:hidden">
        {buttons.map((row, i) => (
          <div key={`left-${i}`} className="grid grid-cols-5 gap-2 mt-2">
            {row.slice(0, 5).map((btn) => {
              const isDigit = /^[0-9.]$/.test(btn);
              const btnClass = isDigit
                ? "bg-blue-200 hover:bg-blue-300"
                : "bg-blue-50 hover:bg-blue-100";
              return (
                <button
                  key={btn}
                  className={`${btnClass} text-blue-900 font-semibold  p-1 text-sm shadow`}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Buttons for Mobile (Next 5 buttons of each row → rows 6–10) */}
      <div className="md:hidden mt-4">
        {buttons.map((row, i) => (
          <div key={`right-${i}`} className="grid grid-cols-5 gap-2 mt-2">
            {row.slice(5).map((btn) => {
              const isDigit = /^[0-9.]$/.test(btn);
              const btnClass = isDigit
                ? "bg-blue-200 hover:bg-blue-300"
                : "bg-blue-50 hover:bg-blue-100";
              return (
                <button
                  key={btn}
                  className={`${btnClass} text-blue-900 font-semibold  p-1 text-sm shadow`}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Desktop: All 10 buttons in one row */}
      <div className="hidden md:block">
        {buttons.map((row, i) => (
          <div key={`desktop-${i}`} className="grid grid-cols-10 gap-2 mt-2">
            {row.map((btn) => {
              const isDigit = /^[0-9.]$/.test(btn);
              const btnClass = isDigit
                ? "bg-blue-200 hover:bg-blue-300"
                : "bg-blue-50 hover:bg-blue-100";
              return (
                <button
                  key={btn}
                  className={`${btnClass} text-blue-900 font-semibold  p-1 text-base shadow`}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  </div>
);


}
