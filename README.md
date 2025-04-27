# Funroad

Funroad is a multi-tenant e-commerce platform where creators can sign up, create their own stores, and sell products. The platform supports category-based product browsing, user authentication, and a modern, responsive UI.

## Features
- User registration and authentication (with secure cookies)
- Store creation for each user
- Product management and browsing
- Category and subcategory navigation (with recursive filtering)
- Responsive, modern UI with beautiful forms
- Scrollable category sidebar
- Toast notifications for user feedback

## Tech Stack
- **Next.js** (App Router)
- **React** (with hooks)
- **tRPC** (API layer)
- **Payload CMS** (as backend/database)
- **Zod** (schema validation)
- **React Hook Form** (form management)
- **Radix UI** (UI primitives)
- **Tailwind CSS** (styling)
- **Sonner** (toast notifications)
- **Lucide React** (icons)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Yarn or npm
- MongoDB (for Payload CMS)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/MuhammadBinAbdulLatif/funroad.git
   cd funroad
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in the required values (MongoDB URI, etc).

4. **Run the development server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
5. **Access the app:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `/components` - React UI components (forms, sidebar, etc)
- `/Server` - tRPC procedures and backend logic
- `/trpc` - tRPC client/server setup
- `/types` - Shared TypeScript types and Zod schemas
- `/public` - Static assets (images, etc)

## Development Notes
- Uses tRPC for type-safe API calls between frontend and backend.
- Category filtering is recursive: selecting a category shows products in all its subcategories.
- Uses Payload CMS for data storage and admin.
- UI is built with Radix UI and Tailwind CSS for accessibility and rapid styling.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License
MIT

---

**Funroad** — Empowering creators to build and grow their own online stores.
