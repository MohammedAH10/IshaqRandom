# Gemini Chat

A minimal Q&A chat app using Google Gemini, Vercel serverless functions, and Tailwind CSS.

## Project Structure

```
gemini-chat/
  api/
    chat.js        - Vercel serverless function (handles POST /api/chat)
  public/
    index.html     - Frontend (Tailwind via CDN)
  vercel.json      - Vercel routing config
  package.json
  .env             - Local secrets (never commit this)
  .env.example     - Template for required env vars
```

## Local Development

1. Install the Vercel CLI globally if you haven't:

   ```bash
   npm install -g vercel
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the env example and fill in your key (from https://aistudio.google.com):

   ```bash
   cp .env.example .env
   # then edit .env and paste your key
   ```

4. Run locally using the Vercel dev server (simulates serverless functions):

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Deploy to Vercel

### Option A — Vercel CLI

```bash
vercel        # first deploy (follow prompts)
vercel --prod # production deploy
```

When prompted, add the environment variable:
- Key:   GEMINI_API_KEY
- Value: your key from aistudio.google.com

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Under "Environment Variables" add GEMINI_API_KEY.
4. Click Deploy. Every push to main auto-deploys.
