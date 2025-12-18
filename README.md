# ScrapDig Website

A beautiful single-page landing page for ScrapDig built with React and Tailwind CSS.

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

Build the production-ready files:
```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed to your server.

## Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment

After building, upload the contents of the `dist` folder to your web server.

For deployment to `scrapdig.lorvensit.online`:
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your server
3. Configure your web server (nginx/apache) to serve the files
4. Set up the subdomain `scrapdig.lorvensit.online` to point to this directory

