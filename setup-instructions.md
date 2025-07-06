# AAIS 2025 Setup Instructions

## Prerequisites
- Node.js 18+ installed
- Docker and Docker Compose installed
- Git installed

## Setup Steps

1. **Clone and Install Dependencies**
   \`\`\`bash
   git clone <repository-url>
   cd aviation-summit-website
   npm install
   \`\`\`

2. **Environment Setup**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your database credentials
   \`\`\`

3. **Start Database with Docker**
   \`\`\`bash
   npm run docker:up
   \`\`\`

4. **Setup Prisma Database**
   \`\`\`bash
   npm run db:generate
   npm run db:push
   \`\`\`

5. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Access Applications**
   - Website: http://localhost:3000
   - Database Admin: http://localhost:8080
   - Prisma Studio: `npm run db:studio`

## Database Management

- **View Database**: Access Adminer at http://localhost:8080
  - Server: postgres
  - Username: aais_user
  - Password: aais_password
  - Database: aais_database

- **Prisma Studio**: Run `npm run db:studio` for a visual database editor

## Docker Commands

- Start services: `npm run docker:up`
- Stop services: `npm run docker:down`
- View logs: `docker-compose logs -f`

## Key Features

✅ **Unified Registration System**
- Single form for delegates, sponsors, and exhibitors
- Dynamic package selection with unique offerings
- Multi-step form with validation

✅ **Database Integration**
- PostgreSQL with Prisma ORM
- Docker containerization
- Proper data modeling

✅ **Venue Integration**
- Updated to Diani Reef Beach Resort & Spa
- Direct link to venue website
- No accommodation form (external booking)

✅ **Unique Packages**
- 15 distinct packages across all categories
- Clear differentiation and value propositions
- Proper pricing and feature sets
