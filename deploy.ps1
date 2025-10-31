# ================================
# deploy.ps1 - Deployment Script
# ================================

# Server details
$serverUser = "root"
$serverIP = "45.130.165.183"
$serverPath = "/var/www/mycalsuite/dist/"

# Local build path
$localDist = "D:/mycalsuite/dist/*"

Write-Host "🚀 Starting deployment..." -ForegroundColor Green

# 1. Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

# 2. Upload files using scp
Write-Host "📤 Uploading files to server..." -ForegroundColor Yellow
scp -r $localDist "$serverUser@$serverIP:$serverPath"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
}
