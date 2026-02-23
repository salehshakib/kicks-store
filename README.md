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

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# kicks-store

A full‑stack e‑commerce storefront built with **Next.js 16** (App Router) and **Tailwind CSS**. Developed with support from antigravity and GitHub Copilot, the project mimics a modern sneaker shop called _Kicks Store_, drawing inspiration from a Figma design and powered by the public [Platzi Fake Store API](https://api.escuelajs.co). It demonstrates:

- Responsive mobile‑first layout matching a provided Figma spec
- Product, cart and category pages with dynamic content
- Server‑side pagination and filters on `/products`
- Zustand for client state (shopping cart)
- Prettier formatting and TypeScript for quality

Live demo: _insert live URL here_ (replace with deployed Vercel/Netlify URL when available)

## 🛠️ Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js 16 (App Router)                        |
| Language   | TypeScript 5                                   |
| Styling    | Tailwind CSS with custom `kicks-` color tokens |
| State      | Zustand (`cartStore`)                          |
| API        | Platzi Fake Store (`/products`, `/categories`) |
| Fonts      | Rubik & Open Sans (via `next/font`)            |
| Icons      | `lucide-react`                                 |
| Formatting | Prettier with project config                   |

## 🚀 Setup & Run

1. Clone the repo and install dependencies:

   ```bash
   git clone <repo-url>
   cd my-store
   npm install   # or yarn / pnpm
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000 in your browser.

3. Format code with Prettier:
   ```bash
   npm run format
   ```

> No environment variables are required; all API calls hit `https://api.escuelajs.co` directly.

## 🧩 Project Notes

- API client (`src/services/api.ts`) exposes `fetchProducts` with optional `offset`, `limit`, and `categoryId`.
- Homepage shows latest drops and two categories; filtering is available on `/products`.
- Product page includes badge, swatches, size grid, “You may also like” carousel.
- Cart page shows editable size/quantity, order summary, and related products.
- Pagination UI displays previous/next chevrons and page numbers.
- Tailwind config extends fonts and custom color palette matching branding.

## 📦 Deployment

Push to a Git provider connected with Vercel/Netlify for zero‑config deployment. The `main` branch is the production source. Tailwind, Next.js, and API calls require no server side configuration.

## 📄 License

[MIT](LICENSE) – feel free to adapt for learning or prototyping.
