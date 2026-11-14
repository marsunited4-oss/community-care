# Community Care Circle : Website

React (Vite) redesign of https://www.communitycarecircle.com.au, laid out after the
structure used by phcndis.com.au (photo banners, plain readable text, service sidebar).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Pages

Home · About Us (values + team) · Services (13, each at `/services/<slug>`) · Careers ·
Partner Network · Contact Us

## Editing content

- `src/data/site.js` : contact details, ABN, socials, nav, values, principles, team
- `src/data/services.js` : all 13 services. `**text**` renders bold.
- `src/pages/PartnerNetwork.jsx` : placeholder partner network copy (old /franchise URL redirects)
- `public/images/`: photos (from the client's current site, plus free Unsplash images); `public/images/team/`: team photos; `public/logos/`: brand and I love NDIS logos

## Before going live

- Wording on Home, About and team bios mirrors communitycarecircle.com.au and
  must not be reworded without the client's sign-off. Final Services wording is pending
  the client's policy review.
- Always describe registration as "Registered NDIS provider in NSW"
  (`REGISTERED` in `src/data/site.js`).
- All forms email admin through EmailJS (`src/lib/sendForm.js`). Career and volunteer file uploads go to Cloudinary and their links are put in the email. Needs the `VITE_EMAILJS_*` and `VITE_CLOUDINARY_*` variables listed in `.env.example`.
  anywhere yet : connect them to a form service/backend (file uploads need one).
  The contact form opens the visitor's email app.
- Configure the host to serve `index.html` for all routes (SPA fallback).
