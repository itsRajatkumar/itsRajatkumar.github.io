Write-Host "🚀 Deploying Portfolio Site to Vercel..." -ForegroundColor Green

# Check if .env file exists
if (!(Test-Path ".env")) {
    Write-Host "⚠️  .env file not found. Creating from .env.example..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
    Write-Host "📝 Please edit .env file with your actual environment variables before deploying!" -ForegroundColor Yellow
    exit 1
}

# Check if MONGODB_URI is set
$envContent = Get-Content ".env" -Raw
if ($envContent -notmatch "MONGODB_URI=" -or $envContent -match "your_mongodb_connection_string_here") {
    Write-Host "⚠️  Please set your MONGODB_URI in the .env file before deploying!" -ForegroundColor Yellow
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
npm install

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Blue
npm run build

# Deploy to Vercel
Write-Host "🌐 Deploying to Vercel..." -ForegroundColor Blue
npx vercel --prod

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "💡 Don't forget to set your environment variables in the Vercel dashboard!" -ForegroundColor Cyan
Write-Host "   Go to: https://vercel.com/dashboard > Your Project > Settings > Environment Variables" -ForegroundColor Cyan
Write-Host "   Add: MONGODB_URI with your MongoDB connection string" -ForegroundColor Cyan
