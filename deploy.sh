#!/bin/bash

echo "🚀 Deploying Portfolio Site to Vercel..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "📝 Please edit .env file with your actual environment variables before deploying!"
    exit 1
fi

# Check if MONGODB_URI is set
if ! grep -q "MONGODB_URI=" .env || grep -q "your_mongodb_connection_string_here" .env; then
    echo "⚠️  Please set your MONGODB_URI in the .env file before deploying!"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
npx vercel --prod

echo "✅ Deployment complete!"
echo "💡 Don't forget to set your environment variables in the Vercel dashboard!"
echo "   Go to: https://vercel.com/dashboard > Your Project > Settings > Environment Variables"
echo "   Add: MONGODB_URI with your MongoDB connection string"
