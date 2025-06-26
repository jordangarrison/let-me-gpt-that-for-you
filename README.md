# Let Me GPT That For You

A modern clone of "Let me Google that for you" but for AI chat interfaces! Create shareable links that demonstrate different AI providers (ChatGPT, Gemini, Claude) with custom questions.

![Let Me GPT That For You](image.png)

## Features

- 🤖 Support for multiple AI providers (ChatGPT, Gemini, Claude)
- 🔗 Generate unique shareable URLs for each query
- 💬 Realistic chat interface simulation
- 📱 Responsive design with modern UI
- ⚡ Built with SvelteKit for fast performance
- 🚀 Ready for Vercel deployment

## How It Works

1. Choose an AI provider (ChatGPT, Gemini, or Claude)
2. Enter a question you want the AI to answer
3. Generate a unique link that simulates the chosen AI interface
4. Share the link with others to demonstrate the AI chat experience

## Development

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd let-me-gpt-that-for-you
yarn install
```

Start the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Building

To create a production version:

```bash
yarn build
```

Preview the production build:

```bash
yarn preview
```

## Deployment

This project is configured for Vercel deployment. Simply connect your repository to Vercel and it will automatically deploy.

Alternatively, you can deploy using the Vercel CLI:

```bash
npx vercel
```

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: TailwindCSS + DaisyUI
- **Deployment**: Vercel
- **TypeScript**: Full type support

## License

MIT
