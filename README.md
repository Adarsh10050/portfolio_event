# EventCrew — Event Agency Website

A premium, multi-page event agency website built with **React + Vite** (frontend) and **Node.js + Express** (backend).

---

## 🗂 Project Structure

```
evencrew/
├── frontend/          # React (Vite) app
│   ├── src/
│   │   ├── components/   Navbar, Footer
│   │   ├── pages/        Home, Services, Gallery, Contact
│   │   └── styles/       Per-component CSS files
│   └── package.json
├── backend/           # Node.js + Express API
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```

---

## 🚀 Quick Start

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
# Fill in your SMTP credentials in .env
npm run dev
# → http://localhost:5000
```

---

## 🔧 Backend Configuration (`.env`)

| Variable | Description |
|---|---|
| `SMTP_HOST` | Your SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Usually `587` for TLS |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password (Gmail: generate at myaccount.google.com) |
| `CONTACT_RECEIVER` | Email that receives contact form submissions |
| `CLIENT_ORIGIN` | Your frontend URL (for CORS) |
| `PORT` | API port (default 5000) |

### Gmail Setup
1. Enable 2FA on your Google account
2. Go to myaccount.google.com → Security → App Passwords
3. Generate a password for "Mail" and paste into `SMTP_PASS`

---

## 🌐 Deployment

### Frontend → Vercel or Netlify (free)

**Vercel:**
```bash
cd frontend
npm run build
# Push to GitHub, then import repo at vercel.com
```

**Netlify:**
```bash
cd frontend
npm run build
# Drag the `dist/` folder to netlify.com/drop
```

> ⚠️ Add a `_redirects` file in `frontend/public/` for client-side routing on Netlify:
> ```
> /* /index.html 200
> ```

### Backend → Render (free)

1. Push `backend/` folder to GitHub
2. Create a new **Web Service** at render.com
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `node server.js`
5. Add all `.env` variables under **Environment Variables**
6. Update `CLIENT_ORIGIN` to your Vercel/Netlify URL

### Update API URL for Production

In `frontend/vite.config.js`, the proxy only works in dev.  
For production, create `frontend/.env.production`:
```
VITE_API_URL=https://your-render-backend.onrender.com
```

Then in `Contact.jsx`, replace `/api/contact` with:
```js
const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, ...)
```

---

## ✨ Features

- **Multi-page routing** with React Router v6
- **Fixed navbar** with active link highlighting + mobile hamburger menu
- **Home page**: Hero with stats, services preview, gallery preview, testimonial
- **Services page**: 4 detailed service cards with features list
- **Gallery page**: Masonry grid with category filters + fullscreen modal
- **Contact page**: Validated form → Express API → Nodemailer email + auto-reply
- **Rate limiting**: Max 5 submissions / 15 min per IP (spam protection)
- **Responsive**: Mobile-first design across all pages
- **Design**: Black `#0a0a0a` + Red `#e50000` + Bebas Neue display font

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Surface | `#111111` |
| Primary (Red) | `#e50000` |
| Text | `#ffffff` |
| Muted | `#888888` |
| Display Font | Bebas Neue |
| Body Font | Poppins |
