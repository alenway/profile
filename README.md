This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

my-nextjs-app/
├── .github/ # GitHub specific files
│ └── workflows/ # CI/CD workflows
│
├── .next/ # Build output (auto-generated, gitignored)
├── node_modules/ # Dependencies (gitignored)
├── public/ # Static assets served as-is
│ ├── images/ # Images, logos
│ ├── fonts/ # Custom fonts
│ ├── icons/ # Favicons, app icons
│ └── robots.txt # SEO crawling rules
│
├── src/ # Source code (recommended)
│ ├── app/ # App Router (Next.js 13+)
│ │ │
│ │ ├── (marketing)/ # 🟢 ROUTE GROUP: Public pages with Header + Footer
│ │ │ ├── layout.tsx # Marketing layout (Header + Footer)
│ │ │ ├── about/
│ │ │ │ └── page.tsx # /about page
│ │ │ ├── contact/
│ │ │ │ └── page.tsx # /contact page
│ │ │ ├── pricing/
│ │ │ │ └── page.tsx # /pricing page
│ │ │ └── blog/
│ │ │ ├── page.tsx # /blog listing page
│ │ │ └── [slug]/
│ │ │ └── page.tsx # /blog/[slug] dynamic route
│ │ │
│ │ ├── (dashboard)/ # 🟡 ROUTE GROUP: Protected pages with Sidebar
│ │ │ ├── layout.tsx # Dashboard layout (Sidebar + Header, NO footer)
│ │ │ ├── dashboard/
│ │ │ │ └── page.tsx # /dashboard page
│ │ │ ├── analytics/
│ │ │ │ └── page.tsx # /analytics page
│ │ │ ├── settings/
│ │ │ │ └── page.tsx # /settings page
│ │ │ └── users/
│ │ │ ├── page.tsx # /users listing
│ │ │ └── [id]/
│ │ │ └── page.tsx # /users/[id] detail
│ │ │
│ │ ├── (auth)/ # 🔵 ROUTE GROUP: Auth pages (Centered card, no header/footer)
│ │ │ ├── layout.tsx # Auth layout (centered card)
│ │ │ ├── login/
│ │ │ │ └── page.tsx # /login page
│ │ │ ├── register/
│ │ │ │ └── page.tsx # /register page
│ │ │ └── forgot-password/
│ │ │ └── page.tsx # /forgot-password page
│ │ │
│ │ ├── (fullscreen)/ # ⚪ ROUTE GROUP: Fullscreen pages (no chrome)
│ │ │ └── editor/
│ │ │ └── page.tsx # /editor page (no layout.tsx)
│ │ │
│ │ ├── api/ # API routes
│ │ │ ├── auth/
│ │ │ │ ├── login/
│ │ │ │ │ └── route.ts # /api/auth/login
│ │ │ │ ├── register/
│ │ │ │ │ └── route.ts # /api/auth/register
│ │ │ │ └── logout/
│ │ │ │ └── route.ts # /api/auth/logout
│ │ │ └── users/
│ │ │ ├── route.ts # /api/users (GET, POST)
│ │ │ └── [id]/
│ │ │ └── route.ts # /api/users/[id] (GET, PUT, DELETE)
│ │ │
│ │ ├── layout.tsx # Root layout (wraps all pages)
│ │ ├── page.tsx # Home page (/)
│ │ ├── loading.tsx # Loading UI
│ │ ├── error.tsx # Error UI
│ │ ├── not-found.tsx # 404 page
│ │ └── globals.css # Global styles
│ │
│ ├── components/ # React components
│ │ ├── ui/ # Reusable UI components
│ │ │ ├── Button.tsx
│ │ │ ├── Input.tsx
│ │ │ ├── Modal.tsx
│ │ │ ├── Card.tsx
│ │ │ ├── Badge.tsx
│ │ │ ├── Dropdown.tsx
│ │ │ └── index.ts # Barrel export
│ │ │
│ │ ├── forms/ # Form components
│ │ │ ├── LoginForm.tsx
│ │ │ ├── RegisterForm.tsx
│ │ │ └── ContactForm.tsx
│ │ │
│ │ ├── layout/ # Layout components
│ │ │ ├── Header.tsx # Marketing header
│ │ │ ├── Footer.tsx # Marketing footer
│ │ │ ├── Sidebar.tsx # Dashboard sidebar
│ │ │ ├── DashboardHeader.tsx # Dashboard header
│ │ │ └── Navbar.tsx # Generic navbar
│ │ │
│ │ └── features/ # Feature-specific components
│ │ ├── blog/
│ │ │ ├── BlogCard.tsx
│ │ │ ├── BlogList.tsx
│ │ │ └── BlogDetail.tsx
│ │ ├── user/
│ │ │ ├── UserProfile.tsx
│ │ │ ├── UserAvatar.tsx
│ │ │ └── UserList.tsx
│ │ └── dashboard/
│ │ ├── StatsCard.tsx
│ │ ├── Chart.tsx
│ │ └── RecentActivity.tsx
│ │
│ ├── lib/ # Utility functions & configurations
│ │ ├── api.ts # API client/fetch wrappers
│ │ ├── utils.ts # General utilities (cn, formatDate, etc.)
│ │ ├── validations.ts # Validation schemas (Zod, Yup)
│ │ ├── constants.ts # App constants
│ │ └── db.ts # Database connection (if using)
│ │
│ ├── hooks/ # Custom React hooks
│ │ ├── useAuth.ts
│ │ ├── useUser.ts
│ │ ├── useLocalStorage.ts
│ │ ├── useDebounce.ts
│ │ └── useFetch.ts
│ │
│ ├── context/ # React Context providers
│ │ ├── AuthContext.tsx
│ │ ├── ThemeContext.tsx
│ │ └── index.tsx
│ │
│ ├── store/ # State management (Redux/Zustand)
│ │ ├── slices/
│ │ │ ├── authSlice.ts
│ │ │ └── userSlice.ts
│ │ └── store.ts
│ │
│ ├── types/ # TypeScript types & interfaces
│ │ ├── index.ts
│ │ ├── user.ts
│ │ ├── api.ts
│ │ └── common.ts
│ │
│ ├── styles/ # Additional styles
│ │ ├── variables.css # CSS variables
│ │ └── mixins.scss # SCSS mixins (if using SCSS)
│ │
│ ├── config/ # App configuration
│ │ ├── site.ts # Site metadata
│ │ ├── routes.ts # Route constants
│ │ └── env.ts # Environment variables validation
│ │
│ ├── services/ # External services & API calls
│ │ ├── authService.ts
│ │ ├── userService.ts
│ │ └── emailService.ts
│ │
│ ├── actions/ # Server Actions (Next.js 13+)
│ │ ├── userActions.ts
│ │ └── authActions.ts
│ │
│ ├── middleware.ts # Next.js middleware (auth, redirects)
│ │
│ └── instrumentation.ts # Instrumentation hooks (optional)
│
├── tests/ # Test files
│ ├── unit/
│ ├── integration/
│ └── e2e/
│
├── .env.local # Local environment variables (gitignored)
├── .env.example # Example env file (committed)
├── .eslintrc.json # ESLint configuration
├── .gitignore # Git ignore rules
├── .prettierrc # Prettier configuration
├── next.config.js # Next.js configuration
├── package.json # Dependencies & scripts
├── tsconfig.json # TypeScript configuration
├── tailwind.config.ts # Tailwind CSS config (if using)
├── postcss.config.js # PostCSS config
└── README.md # Project documentation

═══════════════════════════════════════════════════════════════════
📊 ROUTE GROUPS EXPLAINED
═══════════════════════════════════════════════════════════════════

🟢 (marketing)/ - Public Pages with Header + Footer
────────────────────────────────────────────────────
Purpose: Landing pages, about, contact, blog, pricing
Layout: Header at top + Footer at bottom
Auth: Public (no login required)
Pages: /, /about, /contact, /pricing, /blog, /blog/[slug]

Files:
app/(marketing)/layout.tsx ← Wraps with Header + Footer
app/(marketing)/about/page.tsx → URL: /about
app/(marketing)/contact/page.tsx → URL: /contact
app/(marketing)/blog/page.tsx → URL: /blog

🟡 (dashboard)/ - Protected Pages with Sidebar
────────────────────────────────────────────────────
Purpose: Admin panel, user dashboard, analytics
Layout: Sidebar on left + Header on top (NO footer)
Auth: Protected (requires login)
Pages: /dashboard, /analytics, /settings, /users

Files:
app/(dashboard)/layout.tsx ← Wraps with Sidebar + Header
app/(dashboard)/dashboard/page.tsx → URL: /dashboard
app/(dashboard)/analytics/page.tsx → URL: /analytics
app/(dashboard)/settings/page.tsx → URL: /settings

🔵 (auth)/ - Auth Pages (Centered Card)
────────────────────────────────────────────────────
Purpose: Login, register, forgot password
Layout: Centered card (NO header/footer/sidebar)
Auth: Public
Pages: /login, /register, /forgot-password

Files:
app/(auth)/layout.tsx ← Wraps with centered card
app/(auth)/login/page.tsx → URL: /login
app/(auth)/register/page.tsx → URL: /register

⚪ (fullscreen)/ - Fullscreen Pages
────────────────────────────────────────────────────
Purpose: Code editor, playground, presentation mode
Layout: NO layout wrapper (takes full screen)
Auth: Varies
Pages: /editor

Files:
app/(fullscreen)/editor/page.tsx → URL: /editor
NO layout.tsx needed! Uses only root layout

═══════════════════════════════════════════════════════════════════
🗺️ URL TO FILE MAPPING
═══════════════════════════════════════════════════════════════════

URL File Path
─────────────────────────── ─────────────────────────────────────────────
/ app/page.tsx
/about app/(marketing)/about/page.tsx
/contact app/(marketing)/contact/page.tsx
/blog app/(marketing)/blog/page.tsx
/blog/my-post app/(marketing)/blog/[slug]/page.tsx
/dashboard app/(dashboard)/dashboard/page.tsx
/analytics app/(dashboard)/analytics/page.tsx
/settings app/(dashboard)/settings/page.tsx
/users app/(dashboard)/users/page.tsx
/users/123 app/(dashboard)/users/[id]/page.tsx
/login app/(auth)/login/page.tsx
/register app/(auth)/register/page.tsx
/forgot-password app/(auth)/forgot-password/page.tsx
/editor app/(fullscreen)/editor/page.tsx
/api/auth/login app/api/auth/login/route.ts
/api/users app/api/users/route.ts
/api/users/123 app/api/users/[id]/route.ts

NOTE: The (parentheses) in folder names are NOT included in URLs!
They're purely for organization.

═══════════════════════════════════════════════════════════════════
📋 LAYOUT HIERARCHY
═══════════════════════════════════════════════════════════════════

Root Layout (app/layout.tsx)
│
├─ Marketing Layout (app/(marketing)/layout.tsx)
│ ├─ About Page
│ ├─ Contact Page
│ └─ Blog Pages
│
├─ Dashboard Layout (app/(dashboard)/layout.tsx)
│ ├─ Dashboard Page
│ ├─ Analytics Page
│ ├─ Settings Page
│ └─ Users Pages
│
├─ Auth Layout (app/(auth)/layout.tsx)
│ ├─ Login Page
│ ├─ Register Page
│ └─ Forgot Password Page
│
└─ Fullscreen (NO layout, just root)
└─ Editor Page

Layouts are NESTED: Child layouts wrap inside parent layouts
Example: About page gets wrapped by Marketing Layout, which is
wrapped by Root Layout

═══════════════════════════════════════════════════════════════════
KEY CONCEPTS & NAMING CONVENTIONS
═══════════════════════════════════════════════════════════════════

📁 APP ROUTER SPECIAL FILES (src/app/):
────────────────────────────────────────

-   page.tsx → Creates a route (required for each route)
-   layout.tsx → Shared UI for a segment and its children
-   loading.tsx → Loading UI (Suspense boundary)
-   error.tsx → Error UI (Error boundary)
-   not-found.tsx → 404 UI
-   route.ts → API endpoint
-   template.tsx → Re-rendered layout (doesn't persist state)
-   default.tsx → Fallback for parallel routes

📁 ROUTE TYPES:
────────────────────────────────────────

-   /app/page.tsx → Static route: /
-   /app/about/page.tsx → Static route: /about
-   /app/blog/[slug]/page.tsx → Dynamic route: /blog/:slug
-   /app/shop/[...slug]/page.tsx → Catch-all: /shop/\*
-   /app/docs/[[...slug]]/page.tsx → Optional catch-all
-   /app/(auth)/login/page.tsx → Route group (no URL segment)
-   /app/\_components/Header.tsx → Private folder (not routable)

📁 FILE NAMING:
────────────────────────────────────────

-   Components: PascalCase (Button.tsx, UserProfile.tsx)
-   Utilities: camelCase (formatDate.ts, apiClient.ts)
-   Hooks: camelCase with 'use' prefix (useAuth.ts, useFetch.ts)
-   Types: PascalCase (User.ts, ApiResponse.ts)
-   Constants: UPPER_SNAKE_CASE in constants.ts
-   API routes: route.ts (Next.js convention)

📁 IMPORT ALIASES (tsconfig.json):
────────────────────────────────────────
{
"compilerOptions": {
"paths": {
"@/_": ["./src/_"],
"@/components/_": ["./src/components/_"],
"@/lib/_": ["./src/lib/_"],
"@/hooks/_": ["./src/hooks/_"],
"@/types/_": ["./src/types/_"]
}
}
}

Usage: import { Button } from '@/components/ui/Button'

📁 WHEN TO USE EACH FOLDER:
────────────────────────────────────────
/components → Reusable React components
/lib → Business logic, utilities, helpers
/hooks → Custom React hooks
/context → React Context providers
/store → Global state management
/types → TypeScript definitions
/services → External API calls, third-party integrations
/config → App configuration, constants
/styles → Global styles, themes, variables
/actions → Server Actions (Next.js 13+)

═══════════════════════════════════════════════════════════════════
PRO TIPS FOR ROUTE GROUPS
═══════════════════════════════════════════════════════════════════

✅ DO:

-   Use route groups to organize pages by layout type
-   Name groups semantically: (marketing), (dashboard), (auth)
-   Keep route group layouts in the group folder: (marketing)/layout.tsx
-   Use parentheses () to exclude folder name from URL
-   Colocate related pages in the same group
-   Use multiple route groups for different sections

❌ DON'T:

-   Create route groups just for organization (use regular folders)
-   Nest route groups unnecessarily
-   Put shared components in route groups (use /components)
-   Forget the parentheses (dashboard vs (dashboard))
-   Mix different layout types in the same group

🎯 WHEN TO CREATE A NEW ROUTE GROUP:

-   Pages need a different layout structure
-   Different authentication requirements
-   Different navigation/header/footer
-   Grouping by user role (admin, user, guest)
-   Different styling/themes

🎯 SCALABILITY:
For larger apps, consider feature-based structure within route groups:
app/
(dashboard)/
layout.tsx
\_components/ ← Components used only in dashboard
\_hooks/ ← Hooks used only in dashboard
dashboard/
analytics/
settings/
