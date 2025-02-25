# Next.js Frontend Template with shadcn/ui

A streamlined, modern React template featuring a comprehensive shadcn/ui component library setup for rapid, beautiful UI development.

## Features

- ✨ [shadcn/ui](https://ui.shadcn.com/) pre-configured with a complete set of customizable, accessible components
- 🎭 Dark and light mode themes ready out of the box
- 🎨 Custom component architecture following shadcn/ui best practices
- 🚀 [Next.js](https://nextjs.org/) for performant page loads and static site generation
- 🍃 [Tailwind CSS](https://tailwindcss.com/) for utility-first styling with shadcn/ui design tokens
- 📦 [pnpm](https://pnpm.io/) for efficient package management
- 🔤 [TypeScript](https://www.typescriptlang.org/) for type safety
- 📐 ESLint and Prettier for code quality

## shadcn/ui Components

This template comes pre-configured with shadcn/ui, offering:

- A consistent design system with minimal effort
- Beautiful, accessible UI components
- Fully customizable components that you own
- Tailwind CSS styling with carefully selected design tokens
- Dark mode support using the `useTheme` hook

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v8 or newer)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-shadcn-template.git my-project
   cd my-project
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public            # Static assets
├── src
│   ├── app           # App router pages and layouts
│   ├── components    # React components
│   │   ├── ui        # shadcn/ui components
│   ├── hooks         # Custom React hooks
│   ├── lib           # Utility functions
│   ├── styles        # Global styles
│   └── types         # TypeScript type definitions
├── .eslintrc.json    # ESLint configuration
├── .gitignore        # Git ignore rules
├── next.config.js    # Next.js configuration
├── package.json      # Project dependencies and scripts
├── pnpm-lock.yaml    # pnpm lock file
├── tsconfig.json     # TypeScript configuration
└── tailwind.config.ts # Tailwind CSS configuration with shadcn/ui presets
```

## Adding More shadcn/ui Components

This template makes it easy to add more shadcn/ui components as needed:

```bash
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add card
pnpm dlx shadcn-ui@latest add dialog
# ... and many more
```

## Customizing shadcn/ui Components

All shadcn/ui components are located in `src/components/ui` and can be customized to match your design needs:

1. Modify component styles in the component files
2. Update design tokens in `tailwind.config.ts`
3. Create component compositions in `src/components`

## Available Scripts

- `pnpm dev` - Run development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Deployment

This template is ready to deploy on [Vercel](https://vercel.com/) with zero configuration. You can also deploy to other platforms that support Next.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
