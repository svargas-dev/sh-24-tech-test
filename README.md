# Sam Vargas Tech Test

## Description

This is a tech test for the role of Software Engineer at SH24.

## Brief

[See full brief here](https://sh24.notion.site/SH-24-Software-Engineer-Tech-Test-8923d2183d5d413c95d77cd7eb823c29)

## Tech Stack

- Next.js
- TypeScript
- Zod
- Tailwind CSS
- Playwright

While SH:24 uses Ruby on Rails, in the first round of interviews it was discussed there has been a move towards Next.js and TypeScript for client facing applications. It is accessible and responsive, loosely styled on SH:24's existing website while sticking to Tailwind default theme and adds dark mode support, as well as reduced motion support. It leverages Tailwind CSS for styling and Playwright for end-to-end testing.

This solution leverages the latest features of Next.js 15 and React 19, including the new App Router, Server Components and Server Actions, as well as Zod for form validation on the server.

## Getting Started

Choose your runtime environment:

- [Node.js](https://nodejs.org/en/download/)
- [Bun](https://bun.sh/)
- [Deno](https://deno.com/)

This project was developed using Node v22.15.1 with npm 10.9.2 on Fedora Linux 41 Workstation and tested using Playwright and manually in Chromium browsers, Firefox and a WebKit-based browser.

### Installation

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
# or
deno install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# or
deno task dev
```

### End-to-end testing

Ensure development server is up, then run the end-to-end tests:

```bash
npm run test:e2e
# or
yarn test:e2e
# or
pnpm test:e2e
# or
bun test:e2e
# or
deno task test:e2e
```

### Build and Run

Build the application:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
# or
deno task build
```

Run the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
# or
deno task start
```
