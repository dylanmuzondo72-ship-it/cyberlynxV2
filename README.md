# Cyber Lynx V2 Website

Deploy-ready React/Vite website upgrade for Cyber Lynx Digital Smart Network.

## Included

- Executive hero section
- Multi-layer animated background
- Service section
- Package cards based on the official Cyber Lynx service packages
- Professional chatbot with quick service replies
- Icon-only WhatsApp floating button
- Responsive mobile layout

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Use default Vite settings.
4. Deploy.

## Before final client presentation

Open `src/main.jsx` and update:

```js
const contactConfig = {
  whatsappNumber: '',
  email: '',
};
```

Use the WhatsApp number in international format without `+`, spaces or dashes.
Example: `263771234567`.
