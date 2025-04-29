# Telegram Mini App Starter Template (Next.js Monorepo)

This repository serves as a starter template for building Telegram Mini Apps (TWA) using a modern tech stack within a pnpm monorepo structure.

## Features

- **Monorepo Setup:** Managed with `pnpm` workspaces.
- **Frontend (`packages/twa-frontend`):**
  - [Next.js](https://nextjs.org/) (App Router)
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [@telegram-apps/sdk-react](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk-react) for TWA integration.
  - [@telegram-apps/telegram-ui](https://github.com/Telegram-Mini-Apps/TelegramUI) for native look & feel.
  - [Tailwind CSS](https://tailwindcss.com/) (Basic setup included).
  - [next-intl](https://next-intl-docs.vercel.app/) for internationalization (i18n).
  - Basic TON Connect integration example (`@tonconnect/ui-react`).
  - Mocking for local development outside Telegram.
- **Backend (`packages/api-server`):**
  - Placeholder for a Node.js backend (e.g., Fastify, Express). Intended for tRPC integration.
  - Basic TypeScript setup.
- **Database (`packages/db`):**
  - Placeholder for database schema definition (e.g., using Drizzle ORM).
  - Basic TypeScript setup.
- **Tooling:**
  - **ESLint:** Configured with modern flat config (`eslint.config.mjs`), including TypeScript support (`@typescript-eslint`), recommended rules, type-aware linting (`recommended-type-checked`), Next.js rules (`next/core-web-vitals`), and Prettier integration.
  - **Prettier:** Configured for consistent code formatting.
  - **TypeScript:** Strict mode enabled with base and per-package configurations.
- **CI/CD:** Basic GitHub Actions workflow (`quality.yml`) for checking formatting, linting, and type safety on push/pull requests.

## Getting Started

1.  **Use this Template:** Click the "Use this template" button on GitHub to create a new repository based on this starter.
2.  **Clone your new repository:**
    ```bash
    git clone <your-new-repo-url>
    cd <your-new-repo-name>
    ```
3.  **Install Dependencies:** Ensure you have Node.js (v18+) and pnpm (v8+) installed.
    ```bash
    pnpm install
    ```
4.  **Configure Environment Variables:**
    - Copy the example environment file: `cp .env.example .env`
    - Fill in the necessary values in your local `.env` file (e.g., `BOT_TOKEN` for frontend mock/backend). **Do not commit your `.env` file.**
5.  **Develop Frontend:**
    - Navigate to the frontend package: `cd packages/twa-frontend`
    - Run the development server: `pnpm run dev` (or `pnpm run dev:https` for testing within Telegram).
    - Access the app at `http://localhost:3000` (or `https://localhost:3000`).
6.  **Develop Backend/DB:**
    - Flesh out the `api-server` and `db` packages according to your project's needs (e.g., add Fastify, Drizzle ORM, etc.).
    - Update the respective `package.json` and `tsconfig.json` files.

## Monorepo Scripts (Run from Root)

- `pnpm format:check`: Check code formatting with Prettier.
- `pnpm format:write`: Apply code formatting with Prettier.
- `pnpm lint`: Run ESLint checks across the monorepo.
- `pnpm lint:fix`: Attempt to automatically fix ESLint issues.
- `pnpm lint:strict`: Run ESLint checks, failing on any warnings.
- `pnpm typecheck:all`: Run TypeScript type checking for all packages.
- `pnpm typecheck:frontend`: Type check the frontend package.
- `pnpm typecheck:api`: Type check the api-server package.
- `pnpm typecheck:db`: Type check the db package.

## Customization

- **Rename Packages:** Feel free to rename the packages (`twa-frontend`, `api-server`, `db`) if desired. Update `pnpm-workspace.yaml` and any cross-package imports accordingly.
- **Choose Backend/DB Tech:** Implement your preferred backend framework (Fastify, Express, etc.) and ORM/database client (Drizzle, Prisma, etc.) in the placeholder packages.
- **Adjust Tooling:** Modify ESLint rules (`eslint.config.mjs`), Prettier settings (`.prettierrc.json`), or TypeScript configurations (`tsconfig.*.json`) as needed.
- **Remove Demo Code:** Delete or modify the example pages/components in `packages/twa-frontend/src/app` (like `init-data`, `ton-connect`, etc.) to fit your application.

## Contributing

If you want to contribute back to _this template_, please refer to `CONTRIBUTING.md`. (Note: You might want to remove or replace CONTRIBUTING.md in projects _generated_ from this template).
