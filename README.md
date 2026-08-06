# PRINCE HACKS — Admin Panel

Premium admin panel for the PRINCE HACKS modding/tools app. Manage keys, categories, posts, site settings, app themes and admin password from one place.

## Features

- **Secure Login** — Firebase Authentication (email + password), save-password toggle, 24h auto-logout
- **Dashboard** — live stats (users, keys, active/expired/banned, categories, posts), posts-per-category chart, recent keys & posts, one-click backup/export (JSON)
- **User Keys** — add/ban/unban/delete keys, random key generator, lifetime or timed expiry, device binding with device-limit chips, clear expired keys
- **Categories** — add/edit/delete categories with name + emoji icon
- **Posts** — add posts per category, before/after images, Free Fire / FF MAX / ZIP download links
- **Settings**
  - Site Settings — site title, app update / version push
  - UI Management — real-time theme colors (applies instantly in the user app)
  - Password Change — change admin password (current password re-auth required)
- **Responsive** — desktop sidebar + mobile bottom nav
- **Custom SVG icons** — all UI icons are inline SVG (no emoji)

## Tech Stack

- Plain HTML + CSS + JavaScript (no build step)
- Firebase Realtime Database
- Firebase Authentication
- Hosted as static files (Firebase Hosting / any static host)

## File Structure

```
├── index.html            # Login page
├── dashboard.html        # Overview / stats / backup
├── keys.html             # User key management
├── categories.html       # Category management
├── posts.html            # Post management
├── settings.html         # Site settings / theme / password
├── firebase-config.js    # Firebase app config
├── rules.json            # Realtime Database security rules
└── README.md
```

## Firebase Setup

1. Create a Firebase project: **thakur-gaming-tools**
2. **Authentication → Sign-in method → Email/Password → Enable**
3. **Authentication → Users → Add user** (add the admin email + password)
4. **Realtime Database → Create Database** (start in test mode, then set rules below)
5. Update **firebase-config.js** with your project values if they change:

```js
apiKey: "AIzaSyDcfBPjecrZW0Cdnl2HO_w1rQn8DXtCdHU",
databaseURL: "https://thakur-gaming-tools-default-rtdb.firebaseio.com",
projectId: "thakur-gaming-tools"
```

6. **Realtime Database → Rules** — paste the full contents of `rules.json` and click **Publish**.

## Deploy

Host the folder on any static host (Firebase Hosting, Netlify, Vercel, cPanel, etc.). Open `index.html`, login with the admin email and start managing.

## Backup / Restore

- **Export:** Dashboard → Backup / Export → downloads the whole DB as a JSON file
- **Restore:** (manual) paste the JSON back via Firebase Console → Realtime Database → import

## Notes

- Admin-only area: every page checks auth state; sessions auto-expire after 24 hours.
- Rules publish ke baad hi naye rules apply hote hain (App Update save ke liye login chahiye).
- Category icons are user-defined emoji (stored as data, not UI icons).
