#!/bin/bash
# AAIS 2025 - Automated Setup Script
# This script automates the setup process for the Aviation Summit website

echo "🛫 Setting up Africa Aviation Innovation Summit 2025 Website..."
echo "================================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "   Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "   Visit: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Prerequisites check passed!"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully!"
echo ""

# Setup environment file
echo "⚙️  Setting up environment file..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Environment file created (.env)"
    echo "⚠️  Please edit .env file with your configuration before proceeding"
else
    echo "✅ Environment file already exists"
fi
echo ""

# Start Docker services
echo "🐳 Starting Docker services..."
npm run docker:up

if [ $? -ne 0 ]; then
    echo "❌ Failed to start Docker services"
    exit 1
fi

echo "✅ Docker services started successfully!"
echo ""

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npm run db:generate

if [ $? -ne 0 ]; then
    echo "❌ Failed to generate Prisma client"
    exit 1
fi

echo "✅ Prisma client generated successfully!"
echo ""

# Push database schema
echo "🗄️  Setting up database schema..."
npm run db:push

if [ $? -ne 0 ]; then
    echo "❌ Failed to setup database schema"
    exit 1
fi

echo "✅ Database schema setup successfully!"
echo ""

# Setup complete
echo "🎉 Setup completed successfully!"
echo ""
echo "🚀 You can now start the development server:"
echo "   npm run dev"
echo ""
echo "🌐 Access points:"
echo "   • Website: http://localhost:3000"
echo "   • Database Admin: http://localhost:8080"
echo "   • Prisma Studio: npm run db:studio"
echo ""
echo "📚 For more information, check the README.md file"
echo ""
echo "✈️  Happy coding! Building the future of African aviation! ✈️"
