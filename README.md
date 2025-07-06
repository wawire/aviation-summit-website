# Africa Aviation Innovation Summit 2025 (AAIS 2025)

A comprehensive web application for Africa's premier aviation innovation summit, featuring unified registration system, venue information, speaker profiles, and sponsorship opportunities.

![AAIS 2025](https://img.shields.io/badge/AAIS-2025-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-5.7-green.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue.svg)

## 🌟 Overview

The Africa Aviation Innovation Summit 2025 is a premium event bringing together aviation leaders, policymakers, investors, and professionals to explore innovative investment opportunities in Africa's aviation sector. This web application provides a complete digital experience for event registration, information, and management.

### Event Details
- **Date**: 16th-17th October 2025
- **Venue**: Diani Reef Beach Resort & Spa, Mombasa, Kenya
- **Theme**: Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and Transformation through Innovation
- **Expected Attendees**: 500+ Industry Leaders from 30+ African Countries

## ✨ Features

### 🎯 Core Features
- **Unified Registration System**: Single form for delegates, sponsors, and exhibitors
- **Dynamic Package Selection**: 15+ unique packages with real-time availability
- **Multi-step Form**: Progressive disclosure with validation
- **Progress Saving**: Auto-save and manual save functionality
- **Package Comparison**: Side-by-side comparison tool
- **QR Code Generation**: Digital tickets for event check-in
- **Venue Information**: Comprehensive venue and accommodation details
- **Speaker Profiles**: Interactive speaker showcase
- **Sponsorship Packages**: Detailed sponsorship opportunities
- **Exhibition Packages**: Complete exhibitor information

### 🚀 Advanced Features
- **Real-time Availability**: Live slot updates with urgency indicators
- **Collapsible Sections**: Organized content to reduce scrolling
- **Progress Tracking**: Visual step indicators
- **Form Validation**: Real-time error checking
- **Mobile Responsive**: Optimized for all devices
- **Dark Mode Support**: Theme switching capability
- **Accessibility**: WCAG compliant design
- **Performance Optimized**: Fast loading and smooth animations

### 💼 Registration Types

#### Delegate Packages
- **Early Bird Delegate**: $300 (Save $50 until Aug 31, 2025)
- **Standard Delegate**: $350
- **Corporate Team Package**: $1,500 (5 attendees included)
- **Student & Academic**: $150

#### Sponsorship Packages
- **Diamond Sponsor**: $60,000 (Premier naming rights)
- **Platinum Sponsor**: $40,000 (High-level visibility)
- **Gold Sponsor**: $30,000 (Enhanced visibility)
- **Silver Sponsor**: $20,000 (Essential visibility)
- **Bronze Sponsor**: $10,000 (Entry-level presence)

#### Exhibition Packages
- **Premium Exhibition**: $3,000 (6m x 3m prime location)
- **Standard Exhibition**: $2,000 (4m x 3m good location)
- **Startup Exhibition**: $1,000 (3m x 2m startup area)

## 🛠 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Shadcn/ui**: Modern UI components
- **Lucide React**: Beautiful icons

### Backend & Database
- **Prisma ORM**: Type-safe database access
- **PostgreSQL**: Robust relational database
- **Docker**: Containerized development
- **Next.js API Routes**: Serverless functions

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Docker Compose**: Multi-container orchestration

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ installed
- **Docker** and **Docker Compose** installed
- **Git** installed
- **npm** or **yarn** package manager

### Installation

1. **Clone the Repository**
   \`\`\`bash
   git clone https://github.com/wwawire/aviation-summit-website.git
   cd aviation-summit-website
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Environment Setup**
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   
   Edit `.env` file with your configuration:
   \`\`\`env
   # Database
   DATABASE_URL="postgresql://aais_user:aais_password@localhost:5432/aais_database?schema=public"
   
   # Next.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Email (Optional)
   SMTP_HOST=""
   SMTP_PORT=""
   SMTP_USER=""
   SMTP_PASSWORD=""
   
   # Admin
   ADMIN_EMAIL="admin@aviationsummit.africa"
   \`\`\`

4. **Start Database with Docker**
   \`\`\`bash
   npm run docker:up
   \`\`\`

5. **Setup Database Schema**
   \`\`\`bash
   npm run db:generate
   npm run db:push
   \`\`\`

6. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

7. **Access the Application**
   - **Website**: http://localhost:3000
   - **Database Admin**: http://localhost:8080
   - **Prisma Studio**: `npm run db:studio`

## 📁 Project Structure

\`\`\`
aviation-summit-website/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── speakers/                # Speakers page
│   ├── venue/                   # Venue page
│   ├── sponsorship/             # Sponsorship page
│   ├── exhibitors/              # Exhibitors page
│   └── registration/            # Registration page
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   ├── hero-section.tsx         # Landing hero
│   ├── navbar.tsx               # Navigation
│   ├── footer.tsx               # Footer
│   ├── speakers.tsx             # Speaker showcase
│   ├── venue-page.tsx           # Venue information
│   └── unified-registration-form.tsx # Main registration form
├── lib/                         # Utility libraries
│   ├── constants/               # Data constants
│   ├── hooks/                   # Custom React hooks
│   ├── types/                   # TypeScript types
│   ├── utils.ts                 # Utility functions
│   └── prisma.ts                # Database client
├── prisma/                      # Database schema
│   └── schema.prisma            # Prisma schema
├── public/                      # Static assets
├── docker-compose.yml           # Docker configuration
├── init.sql                     # Database initialization
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
\`\`\`

## 🗄 Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **Registration**: Unified registration data for all participant types
- **Package**: Available packages (delegate, sponsor, exhibitor)
- **EventSettings**: Event configuration and settings

### Database Management

\`\`\`bash
# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Create and run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio

# Start/stop Docker database
npm run docker:up
npm run docker:down
\`\`\`

## 🎨 Styling & Design

### Design System
- **Primary Color**: #C2A542 (Aviation Gold)
- **Secondary Color**: #FF6B35 (Aviation Orange)
- **Typography**: Lucida (headings), Interstate (body)
- **Components**: Shadcn/ui with custom aviation theme
- **Animations**: Framer Motion for smooth interactions

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Large touch targets and gestures
- **Performance**: Optimized images and lazy loading

## 🔧 Development

### Available Scripts

\`\`\`bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema to database
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio

# Docker
npm run docker:up        # Start Docker services
npm run docker:down      # Stop Docker services
\`\`\`

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with Next.js rules
- **Prettier**: Consistent code formatting
- **Husky**: Git hooks for quality checks

### Testing
\`\`\`bash
# Run tests (when implemented)
npm run test
npm run test:watch
npm run test:coverage
\`\`\`

## 🚀 Deployment

### Production Build
\`\`\`bash
npm run build
npm run start
\`\`\`

### Environment Variables
Ensure all production environment variables are set:
- `DATABASE_URL`: Production database connection
- `NEXTAUTH_SECRET`: Secure random string
- `NEXTAUTH_URL`: Production domain
- Email configuration for notifications

### Deployment Platforms
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative deployment platform
- **Docker**: Containerized deployment
- **Traditional Hosting**: VPS or dedicated servers

## 📊 Features Deep Dive

### Registration System
- **Multi-step Form**: 4-step process with validation
- **Progress Saving**: Auto-save every 30 seconds
- **Package Selection**: Dynamic pricing and availability
- **Payment Integration**: International and local payment methods
- **QR Code Generation**: Digital tickets for attendees

### Venue Information
- **Comprehensive Details**: Resort information and amenities
- **Accommodation Options**: Room types and pricing
- **Transportation Guide**: Airport transfers and local transport
- **Local Attractions**: Activities and sightseeing
- **Weather Information**: Climate and seasonal details

### Speaker Management
- **Interactive Profiles**: Detailed speaker information
- **Category Filtering**: Filter by speaker type
- **Modal Details**: Expandable speaker profiles
- **Social Integration**: LinkedIn, Twitter, website links

### Package Comparison
- **Side-by-side View**: Compare up to 3 packages
- **Feature Matrix**: Visual feature comparison
- **Smart Selection**: Prevent overwhelming choices
- **Real-time Updates**: Live availability status

## 🔒 Security

### Data Protection
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Prevention**: Prisma ORM protection
- **XSS Protection**: React's built-in XSS prevention
- **CSRF Protection**: Next.js CSRF tokens

### Privacy
- **GDPR Compliance**: Privacy policy and consent management
- **Data Minimization**: Collect only necessary information
- **Secure Storage**: Encrypted sensitive data
- **Access Controls**: Role-based access (when implemented)

## 🌍 Internationalization

### Multi-language Support (Future)
- **i18n Ready**: Structure prepared for internationalization
- **Language Files**: JSON-based translation files
- **RTL Support**: Right-to-left language support
- **Currency**: Multi-currency support for global audience

## 📱 Mobile Experience

### Progressive Web App Features
- **Responsive Design**: Works on all screen sizes
- **Touch Optimized**: Large touch targets
- **Fast Loading**: Optimized performance
- **Offline Capability**: Service worker (future enhancement)

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use meaningful component and variable names
- Write comprehensive comments for complex logic
- Ensure responsive design for all components
- Test thoroughly before submitting

### Issue Reporting
- Use GitHub Issues for bug reports
- Provide detailed reproduction steps
- Include screenshots for UI issues
- Tag issues appropriately

## 📞 Support & Contact

### Event Organizers
- **Email**: info@aviationsummit.africa
- **Phone**: +254 716 851 914
- **Website**: https://aviationsummit.africa

### Technical Support
- **GitHub Issues**: For bug reports and feature requests
- **Documentation**: Check this README and code comments
- **Community**: Join our developer community

### Venue Contact
- **Diani Reef Beach Resort & Spa**
- **Phone**: +254 40 320 2723
- **Email**: info@dianibeach.com
- **Website**: https://www.dianibeach.com/

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Vercel**: For hosting and deployment platform
- **Shadcn**: For the beautiful UI components
- **Prisma Team**: For the excellent ORM
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Aviation Industry**: For inspiring this summit

## 📈 Roadmap

### Phase 1 (Current)
- ✅ Basic website structure
- ✅ Registration system
- ✅ Venue information
- ✅ Speaker profiles
- ✅ Package management

### Phase 2 (Upcoming)
- 🔄 Payment gateway integration
- 🔄 Email notifications
- 🔄 Admin dashboard
- 🔄 Attendee management
- 🔄 Check-in system

### Phase 3 (Future)
- 📅 Mobile app
- 📅 Live streaming integration
- 📅 Networking platform
- 📅 Post-event analytics
- 📅 Multi-language support

## 🔗 Links

- **Live Website**: [https://aviationsummit.africa](https://aviationsummit.africa)
- **GitHub Repository**: [https://github.com/wwawire/aviation-summit-website](https://github.com/wwawire/aviation-summit-website)
- **Documentation**: [https://docs.aviationsummit.africa](https://docs.aviationsummit.africa)
- **API Documentation**: [https://api.aviationsummit.africa/docs](https://api.aviationsummit.africa/docs)

---

**Built with ❤️ for Africa's Aviation Future**

*Africa Aviation Innovation Summit 2025 - Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and Transformation through Innovation*
