# template-1
Template for rapid fire AI apps

# Background
- This template is based on the [Next.js](https://nextjs.org/) framework
- It uses [Tailwind CSS](https://tailwindcss.com/) for styling
- It uses and has all the UI components installed from [Shadcn/UI](https://ui.shadcn.com/)
-

# Getting Started
- `npm i` or `npm install`
- Note: ignore warnings for now
- Optional. Update `layout.tsx` with the browser title and app description
- Optional. Update `page.tsx` with the main content of the app
- Run `npm run dev` to start the development server
- Visit `http://localhost:3000` to see the app

# Database
- Linke to Vercel: `vercel link`
- Pull latest from Vercel: `vercel env pull .env.development.local`

## Example use in code
```ts
import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}
```