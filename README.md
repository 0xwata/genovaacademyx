# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs) 


## Technology Stack / Languages & Frameworks 🔥
| Heading | Item |
| --- | --- |
| Language | *typescript* |
| JavaScript Runtime | *bun* |
| Build Tool | *vite* |
| Web Framework | *remix* |
| CSS Framework | *tailwind* |
| UI Component Library | *mantine* |
| ORM Tool | *prisma* |
| UI Library | *react* |
| Authentication Library | *remix-auth* |
| Database | *supabase* |
| Hosting Service | *cloudflare-pages / vercel* |

## Development 🔨

Run the dev server:

```shellscript
bun run dev
```

## Deployment 🚀

First, build your app for production:

```sh
bun run build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `bun run build`

- `build/server`
- `build/client`

## Styling 🎨

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
