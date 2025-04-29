# Contributing to PurrRoyale

Thank you for your interest in contributing to PurrRoyale! This document provides guidelines and instructions for development.

## Development Setup

1. Ensure you have Node.js 18+ and pnpm 8+ installed
2. Clone the repository
3. Run `pnpm install` at the root to install all dependencies
4. Run `pnpm dev:frontend` to start the frontend development server

## Code Quality Tools

### ESLint

We use ESLint to enforce code quality and consistency across the codebase. The configuration uses the new flat config format (eslint.config.mjs).

- Run `pnpm lint` to check for linting issues
- Run `pnpm lint:fix` to automatically fix linting issues where possible
- Run `pnpm lint:strict` to check with stricter rules (fails on warnings)

Our ESLint setup includes:

- JavaScript recommended rules
- Next.js core web vitals rules
- TypeScript specific rules
- Prettier integration for formatting

### Prettier

We use Prettier for code formatting:

- Run `pnpm format:check` to check for formatting issues
- Run `pnpm format:write` to automatically fix formatting issues

VS Code is configured to format on save if you have the Prettier extension installed.

### TypeScript

We use TypeScript for type checking:

- Run `pnpm typecheck:all` to check all packages
- Run `pnpm typecheck:frontend` to check just the frontend
- Run `pnpm typecheck:api` to check just the API server
- Run `pnpm typecheck:db` to check just the database package

## VS Code Configuration

We recommend using VS Code with the following extensions:

- ESLint
- Prettier

These are configured in `.vscode/extensions.json` and should be automatically recommended when you open the project.

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Ensure your code passes linting and type checking
4. Submit a pull request to `main`
5. Address any review comments

## Mobile-First Development

When writing frontend code, always optimize for mobile version as well, as the app is primarily used on mobile devices.
