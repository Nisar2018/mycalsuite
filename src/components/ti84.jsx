import React from 'react';

export default function TI84Calculator() {
  // Helper to render buttons with consistent styling
  const Button = ({ label, subLabel, subColor, bgColor = "bg-zinc-800", textColor = "text-white", extraClasses = "" }) => (
    <div className="flex flex-col items-center group">
      {/* Secondary Function Label (the text above the button) */}
      <span className={`text-[10px] font-bold h-3 ${subColor || 'text-zinc-400'}`}>
        {subLabel}
      </span>
      <button className={`w-full py-2 px-1 rounded-md shadow-md active:shadow-inner active:translate-y-0.5 transition-all flex flex-col items-center justify-center font-semibold text-xs sm:text-sm ${bgColor} ${textColor} ${extraClasses}`}>
        {label}
      </button>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      {/* Outer Case */}
      <div className="w-full max-w-[380px] bg-black rounded-[40px] p-6 shadow-2xl border-4 border-blue-500/30 ring-8 ring-zinc-900">
        
        {/* Logo and Screen Area */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-zinc-400 text-xs px-2 mb-2">
            <span className="font-bold">Ti84 </span>
          </div>
          
          {/* LCD Screen */}
          <div className="bg-[#f0f0f0] rounded-sm aspect-[4/3] p-2 flex flex-col font-mono text-zinc-800 border-4 border-zinc-800">
            <div className="flex justify-between text-[10px] border-b border-zinc-300 pb-1 mb-2">
              <span>NORMAL FLOAT AUTO REAL RADIAN MP</span>
              <div className="w-4 h-2 border border-green-600 bg-green-500"></div>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow text-center">
              <p className="text-lg">TI-84 Plus CE</p>
              <p className="text-sm">5.7.2.0016</p>
              <p className="mt-8 text-xl">RAM Cleared</p>
            </div>
          </div>
        </div>

        {/* Keypad */}
        <div className="space-y-4">
          
          {/* Top Row (Function Keys) */}
          <div className="grid grid-cols-5 gap-2">
            {['y=', 'window', 'zoom', 'trace', 'graph'].map((key, i) => (
              <Button key={key} label={key} subLabel={`f${i+1}`} subColor="text-green-500" bgColor="bg-zinc-300" textColor="text-black" />
            ))}
          </div>

          {/* Navigation and Upper Functions */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-3 gap-2">
              <Button label="2nd" subLabel="" bgColor="bg-sky-500" />
              <Button label="mode" subLabel="quit" />
              <Button label="del" subLabel="ins" />
              <Button label="alpha" subLabel="A-lock" bgColor="bg-lime-500" />
              <Button label="X,T,O,n" subLabel="link" />
              <Button label="stat" subLabel="list" />
            </div>
            {/* D-Pad Placeholder */}
            <div className="relative flex items-center justify-center bg-zinc-800 rounded-full aspect-square w-24 mx-auto border-2 border-zinc-600">
                <div className="absolute top-1 text-zinc-400 text-[10px]">▲</div>
                <div className="absolute bottom-1 text-zinc-400 text-[10px]">▼</div>
                <div className="absolute left-1 text-zinc-400 text-[10px]">◀</div>
                <div className="absolute right-1 text-zinc-400 text-[10px]">▶</div>
                <div className="w-8 h-8 bg-black rounded-full shadow-inner"></div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-5 gap-x-2 gap-y-1">
            {/* Row: math -> clear */}
            <Button label="math" subLabel="test" />
            <Button label="apps" subLabel="angle" />
            <Button label="prgm" subLabel="draw" />
            <Button label="vars" subLabel="distr" />
            <Button label="clear" subLabel="" />

            {/* Row: x^-1 -> ^ */}
            <Button label="x⁻¹" subLabel="matrix" />
            <Button label="sin" subLabel="sin⁻¹" />
            <Button label="cos" subLabel="cos⁻¹" />
            <Button label="tan" subLabel="tan⁻¹" />
            <Button label="^" subLabel="π" />

            {/* Row: x^2 -> ÷ */}
            <Button label="x²" subLabel="√" />
            <Button label="," subLabel="EE" />
            <Button label="(" subLabel="{" />
            <Button label=")" subLabel="}" />
            <Button label="÷" subLabel="e" bgColor="bg-zinc-300" textColor="text-black" />

            {/* Row: log -> × */}
            <Button label="log" subLabel="10ˣ" />
            <Button label="7" subLabel="u" bgColor="bg-white" textColor="text-black" />
            <Button label="8" subLabel="v" bgColor="bg-white" textColor="text-black" />
            <Button label="9" subLabel="w" bgColor="bg-white" textColor="text-black" />
            <Button label="×" subLabel="[" bgColor="bg-zinc-300" textColor="text-black" />

            {/* Row: ln -> - */}
            <Button label="ln" subLabel="eˣ" />
            <Button label="4" subLabel="L4" bgColor="bg-white" textColor="text-black" />
            <Button label="5" subLabel="L5" bgColor="bg-white" textColor="text-black" />
            <Button label="6" subLabel="L6" bgColor="bg-white" textColor="text-black" />
            <Button label="—" subLabel="]" bgColor="bg-zinc-300" textColor="text-black" />

            {/* Row: sto -> + */}
            <Button label="sto →" subLabel="rcl" />
            <Button label="1" subLabel="L1" bgColor="bg-white" textColor="text-black" />
            <Button label="2" subLabel="L2" bgColor="bg-white" textColor="text-black" />
            <Button label="3" subLabel="L3" bgColor="bg-white" textColor="text-black" />
            <Button label="+" subLabel="mem" bgColor="bg-zinc-300" textColor="text-black" />

            {/* Bottom Row */}
            <Button label="on" subLabel="off" />
            <Button label="0" subLabel="catalog" bgColor="bg-white" textColor="text-black" />
            <Button label="." subLabel="i" bgColor="bg-white" textColor="text-black" />
            <Button label="(-)" subLabel="ans" bgColor="bg-white" textColor="text-black" />
            <Button label="enter" subLabel="solve" bgColor="bg-zinc-300" textColor="text-black" />
          </div>

        </div>
      </div>
    </div>
  );
}

