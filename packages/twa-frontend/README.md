# Telegram Mini App Frontend Starter (Next.js)

This package contains the Next.js frontend application for the TWA Starter Template.

## Included Features

- **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
- **UI:**
  - [@telegram-apps/telegram-ui](https://github.com/Telegram-Mini-Apps/TelegramUI): Components for a native Telegram look and feel.
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework (basic setup).
  - `normalize.css`: CSS resets.
- **TWA Integration:**
  - [@telegram-apps/sdk-react](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk-react): Hooks and functions for interacting with the Telegram Mini Apps platform (theme params, back button, init data, etc.).
  - Mocking setup (`src/hooks/useTelegramMock.ts`) for easier local development outside the Telegram client.
- **Internationalization (i18n):**
  - [next-intl](https://next-intl-docs.vercel.app/): Configured for multiple languages (English and Russian examples provided in `public/locales`).
- **TON Blockchain Integration:**
  - [@tonconnect/ui-react](https://github.com/ton-connect/ui-react): Example integration for connecting TON wallets.
- **Structure:**
  - Components organized for reusability.
  - Core setup for SDK initialization and providers.
  - Basic routing examples.

## Development Scripts

(Run these from the **root** of the monorepo)

- `pnpm dev:frontend`: Runs the Next.js development server (`http://localhost:3000`).
- `pnpm build:frontend`: Builds the frontend application for production.

(Or run standard Next.js commands from within this directory: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`)

## Running Locally

1.  **Install Dependencies:** Run `pnpm install` from the monorepo root.
2.  **Configure Environment:** Ensure necessary `NEXT_PUBLIC_` variables are set in `.env` at the root (see root `.env.example`).
3.  **Run Dev Server:** Use `pnpm dev:frontend` from the root.
4.  Open `http://localhost:3000` in your browser. The `useTelegramMock` hook will simulate the TWA environment for easier development.

## Running Inside Telegram

1.  **Run HTTPS Server:** Use `pnpm --filter @repo/twa-frontend run dev:https` from the root. This starts the server on `https://localhost:3000`.
2.  **Ignore SSL Warning:** Your browser will likely show an SSL warning. Proceed to the site (it's safe for local development).
3.  **Set BotFather URL:** Use `/setmenubutton` in [@BotFather](https://t.me/botfather) for your bot and set the URL to `https://127.0.0.1:3000` (BotFather often rejects `localhost`).
4.  **Launch:** Open your bot in a Telegram client (like the web version at [web.telegram.org](https://web.telegram.org/k/)) and launch the Mini App via the menu button.

## Deployment

This package is typically deployed using platforms like [Vercel](https://vercel.com/). Connect your repository and configure the Root Directory in Vercel settings to point to `packages/twa-frontend`. Set environment variables in the Vercel project settings.
