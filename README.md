# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

├── README.md
├── app.vue
├── assets
│   └── css
│       └── main.css
├── components
│   ├── Atom.vue
│   └── Layout
│       └── Header
│           └── index.vue
├── composables
│   ├── states.ts
│   └── useSay.ts
├── content
│   └── index.md
├── eslint.config.js
├── layouts
│   ├── custom.vue
│   └── default.vue
├── middleware
│   ├── auth.global.ts
│   └── auth.ts
├── nuxt.config.ts
├── package.json
├── pages
│   ├── Main
│   │   └── index.vue
│   └── index.vue
├── plugins
│   ├── focus.ts
│   └── myPlugins.ts
├── public
│   └── favicon.ico
├── server
│   ├── api
│   │   └── hello.ts
│   ├── routes
│   │   └── hello.ts
│   └── tsconfig.json
├── stores
│   └── myStore.ts
├── tailwind.config.js
├── tree.text
├── tsconfig.json
└── yarn.lock


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
