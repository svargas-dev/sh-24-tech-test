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

While SH:24 primarily uses Ruby on Rails, in the first round of interviews it was discussed there has been a move towards Next.js and TypeScript for client facing applications. It leverages Tailwind CSS for styling and Playwright for end-to-end testing. This solution is accessible and responsive, loosely styled on SH:24's existing website while sticking to Tailwind default theme and adds dark mode support, as well as reduced motion support. 

This solution leverages the latest features of Next.js 15 and React 19, including the App Router, React Server Components and Server Actions, as well as Zod for form validation on the server. As such, it supports progressive enhancement and remains functional where JavaScript is not available.

### Note

In a real-world application, you may want to use client-side form validation e.g., with React Hook Form, in addition to the server-side validation, for a better user experience and to reduce the number of requests to the server.

Additionally, you would want more developed UI components with variants, states and animations, with consistent APIs and theming as well as a component library managed with a tool like Storybook.


## Getting Started

### Requirements
- Node.js 18.18+
- npm 10.9+

See [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation) for more information.

This project was developed using Node v22.15.1 with npm 10.9.2 on Fedora Linux 41 Workstation and tested using Playwright, as well as manually with Chromium browsers, Firefox and a WebKit browser. This may run on other runtimes such as Bun and Deno, but has not been tested. npm was selected over yarn, pnpm, bun and deno as it is the most widely used and supported. In a modern greenfield project, the technology stack choices would be more carefully considered based on the project requirements and constraints.

### Installation

First, install dependencies:

```bash
npm install
# or
npm i
```

Run the development server:

```bash
npm run dev
```

### Testing

#### Why end-to-end testing only?

Given the scope of this project, i.e. a simple form with little interactivity, it's deemed sufficient to only write end-to-end tests. This is because the application lacks the complexity that would require comprehensive unit tests, integration tests or component tests. The end-to-end tests provided cover the critical user journeys and ensure the application works as expected without duplication.

In a production environment, however, it would be prudent to write tests for the form React server function logic, particularly if the server function were to grow in complexity.


#### End-to-end testing

Ensure development server is up, then run the end-to-end tests:

```bash
npm run test:e2e
```

### Build and Run

Build the application:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```
