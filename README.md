# E-commerce Storefront (React + TypeScript)

A multi-page storefront UI built with React 18, TypeScript, React Router and Tailwind CSS on Vite.

> An early (2024) team project built with [Tejas Vaij](https://github.com/TechManTejas) while learning React and TypeScript. My more recent work is pinned on my [GitHub profile](https://github.com/Eyeroniq).

## Features

- **Product catalogue** loaded from a typed JSON data file
- **Three collection pages** with client-side routing (React Router v6)
- **Product detail pages** at `/<collection>/:id`
- **Add to bag**: quantities increase when the same product is added again
- Styled with Tailwind CSS and a custom display font

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18, TypeScript |
| Routing | React Router v6 |
| Styling | Tailwind CSS, PostCSS |
| Tooling | Vite 5, ESLint |
| Hosting | Vercel |

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and production build into dist/
npm run preview   # serve the production build
```

## Project structure

```text
src/
├── App.tsx            # routes and bag state
├── Pages/             # Home, collections (Option1–3), ImageDetails, Bag, Navbar
├── assets/data.json   # product catalogue
└── css/               # shared button styles
public/products/       # product images served at /products/*
```
