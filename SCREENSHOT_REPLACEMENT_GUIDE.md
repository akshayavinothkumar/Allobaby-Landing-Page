# Screenshot Replacement Guide

This guide explains how to replace the placeholder app screenshots on the AlloBaby landing page with real screenshots from the AlloBaby mobile application.

**Good news:** You do **not** need to edit any React code. Just replace image files in a folder.

---

## Quick Start (Easiest Method)

1. Open the folder: `public/screenshots/`
2. For each placeholder file, save your real app screenshot using the **exact same filename** but with a `.png` extension
3. Save the file — the website updates automatically during development

**Example:** Replace the dashboard placeholder by adding:

```
public/screenshots/dashboard-placeholder.png
```

The website will automatically use your PNG instead of the SVG placeholder.

---

## 1. Screenshot Folder Structure

All screenshot images live in:

```
public/screenshots/
```

### Current Placeholder Files

| Filename | Used For |
|----------|----------|
| `dashboard-placeholder` | Main home dashboard |
| `monitoring-placeholder` | Vital signs monitoring |
| `ai-assistant-placeholder` | Allobot AI assistant screen |
| `appointments-placeholder` | Appointment scheduling |
| `consultation-placeholder` | Video consultation |
| `alerts-placeholder` | Risk alert notifications |
| `baby-monitoring-placeholder` | Baby / newborn tracking |
| `health-tracking-placeholder` | Health tracking & wellness log |

Placeholder files are currently `.svg` files. When you add a `.png` file with the same base name, the website prefers the PNG automatically.

### Mirror Folder (Reference Only)

A reference copy of filenames is also documented at:

```
src/assets/screenshots/
```

This folder contains a `README.txt` listing all filenames. The **active** images used by the website are in `public/screenshots/`.

---

## 2. Alternative Screenshot Replacement Method

If you prefer to use different filenames or add new screenshots, you can update the configuration file.

### Step 1: Add your screenshot to the folder

```
public/screenshots/my-new-dashboard.png
```

### Step 2: Update the configuration

Open `src/data/screenshots.js` and update the `file` property:

```javascript
export const screenshots = [
  {
    id: 'dashboard',
    file: 'my-new-dashboard',  // ← change this (no extension)
    title: 'Health Dashboard',
    description: 'Your complete pregnancy overview at a glance',
  },
  // ... other screenshots
]
```

### Step 3: Update the Hero section (optional)

The hero phone mockup uses a separate reference. Open `src/components/Hero.jsx` and find:

```jsx
<ScreenshotImage
  file="dashboard-placeholder"
  alt="AlloBaby app dashboard showing pregnancy health overview"
  className="h-[520px] w-full object-cover object-top"
/>
```

Change `file="dashboard-placeholder"` to match your new filename (without extension).

---

## 3. Screenshot Component Explanation

### Which component controls the screenshot section?

**`src/components/Screenshots.jsx`**

This component renders:
- A **carousel** with large phone mockup and navigation dots
- A **grid** of smaller phone mockups below

### How are screenshots loaded?

**`src/components/ScreenshotImage.jsx`**

This reusable component:
1. Tries to load `/screenshots/{filename}.png` first
2. Falls back to `/screenshots/{filename}.svg` if PNG is not found

### Where is the screenshot list defined?

**`src/data/screenshots.js`**

This centralized config lists all screenshots used in the carousel and grid. The `file` property (without extension) maps to files in `public/screenshots/`.

### How screenshots appear in the carousel

```jsx
// Screenshots.jsx — carousel uses screenshots[current].file
<ScreenshotImage
  file={screenshots[current].file}
  alt={`AlloBaby — ${screenshots[current].title}`}
  className="h-[520px] w-full object-cover object-top"
/>
```

The carousel auto-advances every 5 seconds. Users can also click dots or arrow buttons.

### How screenshots appear in mobile mockups

```jsx
// Screenshots.jsx — grid uses PhoneFrame component
function PhoneFrame({ file, title }) {
  return (
    <div className="rounded-[2rem] border-[5px] border-gray-800 ...">
      <ScreenshotImage
        file={file}
        alt={`AlloBaby app — ${title}`}
        className="h-[400px] w-full object-cover object-top"
      />
    </div>
  )
}
```

### Hero section mockup

**`src/components/Hero.jsx`** also uses `ScreenshotImage` with `file="dashboard-placeholder"` for the main hero phone display.

---

## 4. Recommended Screenshot Mapping

| Placeholder File | Recommended App Screen |
|------------------|------------------------|
| `dashboard-placeholder` | Main Home Dashboard — pregnancy week, vitals summary, quick actions |
| `monitoring-placeholder` | Vital Signs Monitoring — heart rate, blood pressure, glucose charts |
| `ai-assistant-placeholder` | Allobot Screen — AI chat interface with sample conversation |
| `appointments-placeholder` | Appointment Scheduling — calendar view with upcoming visits |
| `consultation-placeholder` | Video Consultation — active or ready-to-join video call screen |
| `alerts-placeholder` | Risk Alert Screen — AI notification with health warning |
| `baby-monitoring-placeholder` | Baby Tracking Screen — cry detection or newborn care dashboard |
| `health-tracking-placeholder` | Health Tracking Log — daily wellness entries and trends |

---

## 5. Screenshot Specifications

For best results on the landing page:

| Property | Recommendation |
|----------|----------------|
| **Format** | PNG (preferred) or high-quality JPG |
| **Orientation** | Portrait (vertical) |
| **Minimum width** | 1080px |
| **Aspect ratio** | 9:16 (standard phone screen) |
| **Resolution** | Use actual device screenshots at full resolution |
| **Framing** | Capture full screen without device bezels (the website adds phone frames) |
| **Consistency** | Use screenshots from the same device/theme for a cohesive look |
| **Status bar** | Clean status bar (full battery, good signal) looks more professional |

### Tips

- Take screenshots on a real Android device running AlloBaby
- Use the same light theme across all screenshots
- Avoid screenshots with personal or real patient data — use demo accounts
- Crop out any device navigation bars if they appear

---

## 6. Rebuilding After Changes

### During development

```bash
npm install    # only needed once
npm run dev
```

After replacing screenshots in `public/screenshots/`:
1. Save your PNG files
2. Refresh the browser — changes appear immediately (hot reload)

### If the dev server is not running

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## 7. Production Deployment

After updating screenshots, rebuild before deploying:

```bash
npm run build
```

This creates an optimized `dist/` folder containing your updated images.

### Deploy the build folder

Upload the entire `dist/` folder to your hosting provider:

- **Vercel:** `vercel --prod`
- **Netlify:** `netlify deploy --prod --dir=dist`
- **Manual:** Upload `dist/` contents via FTP or cloud console

Screenshots are copied into `dist/screenshots/` automatically during build.

---

## 8. Troubleshooting

### Issue: Image not showing

**Solution:** Check the file path and name.

- File must be in `public/screenshots/`
- Filename must match exactly (case-sensitive on Linux servers)
- Example: `dashboard-placeholder.png` not `Dashboard-Placeholder.png`

### Issue: Broken image icon

**Solution:** Verify the filename matches the config.

1. Open `src/data/screenshots.js`
2. Confirm the `file` value matches your image name (without `.png` or `.svg`)
3. Ensure the file is not corrupted — open it in an image viewer to verify

### Issue: Image stretched or distorted

**Solution:** Use correct aspect ratio and styling.

- Use portrait screenshots (9:16 ratio)
- Minimum width: 1080px
- The website uses `object-cover object-top` — very wide or square images may crop unexpectedly
- Retake screenshots in portrait orientation

### Issue: Carousel layout broken

**Solution:** Use screenshots with consistent aspect ratios.

- All screenshots should be the same dimensions
- Mixing landscape and portrait images causes uneven carousel display
- Recommended: 1080 × 1920 px for all screenshots

### Issue: Old placeholder still showing

**Solution:** Clear browser cache.

- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Or open in an incognito/private window
- In production, redeploy after `npm run build`

### Issue: PNG not loading, SVG placeholder still visible

**Solution:** Confirm PNG filename is correct.

The system looks for `{name}.png` first, then falls back to `{name}.svg`.

- Your file: `public/screenshots/dashboard-placeholder.png` ✓
- Wrong: `public/screenshots/dashboard.png` ✗ (unless you update `screenshots.js`)

---

## Regenerating SVG Placeholders

If you need to reset placeholders, run:

```bash
node scripts/generate-placeholders.mjs
```

This recreates all `.svg` placeholder files in `public/screenshots/`.

---

## Summary

| Task | Action |
|------|--------|
| Replace a screenshot | Drop PNG into `public/screenshots/` with matching filename |
| Add a new screenshot | Add PNG + update `src/data/screenshots.js` |
| Change hero screenshot | Update `file` in `src/components/Hero.jsx` |
| Preview changes | `npm run dev` |
| Deploy changes | `npm run build` → deploy `dist/` |

For questions, contact the development team or refer to `README.md`.
