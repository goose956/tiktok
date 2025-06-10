# tiktok

A tiktok-themed web application with interactive features and full-stack React architecture.

## Features
- Interactive user interface
- Full-stack React application with TypeScript
- Modern database integration with Drizzle ORM
- Responsive design with Tailwind CSS
- Real-time functionality

## Technology Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tools**: Vite, TypeScript compiler
- **Styling**: Tailwind CSS, Radix UI components

## Getting Started

### Prerequisites
- Node.js 18 or higher
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/goose956/tiktok.git
cd tiktok
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL=your_postgresql_connection_string
GITHUB_TOKEN=your_github_token
NODE_ENV=development
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
tiktok/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── main.tsx       # Application entry point
│   └── index.html
├── server/                # Backend Express application
│   ├── routes.ts          # API routes
│   ├── db.ts              # Database connection
│   └── index.ts           # Server entry point
├── shared/                # Shared code between client and server
│   └── schema.ts          # Database schema definitions
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Deployment

This application is designed for easy deployment to platforms like:
- Vercel
- Netlify
- Railway
- Heroku
- Self-hosted VPS

### Environment Variables Required:
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - production/development
- Additional service-specific tokens as needed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using modern web technologies.
