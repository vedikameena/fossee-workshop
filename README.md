# FOSSEE Workshop Booking — React UI/UX Redesign

This project is a UI/UX redesign of the FOSSEE Workshop Booking portal built using React.  
The original system was functional but minimal, so the goal was to improve usability, responsiveness, and overall user experience while keeping the core structure intact.

---

## Before vs After

## Before vs After

**Note:** The original repository UI has been used as reference for the “Before” state.
Screenshots were not captured during initial setup; instead, the baseline UI is taken directly from the FOSSEE provided repository.

| Aspect | Before (Original) | After (My Implementation) |
|--------|------------------|----------------------------|
| UI/UX | Basic Bootstrap layout | Modern responsive React UI |
| Mobile | Limited responsiveness | Fully mobile-first design |
| Interaction | Minimal feedback | Search, filters, toasts, states |
| Accessibility | Basic HTML | ARIA + semantic structure |

---

## Design Principles

### 1. Mobile-First Layout
Every component was designed at 375px first. Navigation collapses to a hamburger. Tables on desktop become cards on mobile. Forms use single-column stacking on small screens. Touch targets are minimum 44×44px (WCAG 2.1).

### 2. Visual Hierarchy
Used the **Syne** display typeface paired with **DM Sans** for body. A single blue accent (`#63b3ed`) guides attention to interactive elements. Semantic color is used for status badges only (green/amber/red/blue).

### 3. Information Architecture
Separated workshop *types* (browse/detail) from *instances* (propose/track):
- `/workshop-types` — browse categories with search + filter
- `/workshop-types/:id` — detail page with outline, prerequisites, T&C
- `/propose` — two-step wizard to request a workshop
- `/my-workshops` — tabbed status tracker

### 4. Feedback & States
Every interaction has a state: hover, loading (spinner), success (toast + green), error (inline), empty (illustrated message). Reduces user confusion dramatically.

### 5. Accessibility
- Semantic HTML: `nav`, `main`, `aside`, `section`, `role` attributes
- Form inputs linked to errors via `aria-describedby` + `aria-invalid`
- `aria-live="polite"` on toasts and dynamic result counts
- Keyboard-navigable dropdown, closes on outside click
- All interactive elements have visible labels or `aria-label`

---

## How Responsiveness Was Ensured

1. **CSS custom properties** for all design tokens — no magic numbers
2. **CSS Grid** with `auto-fit` / `minmax()` for intrinsic responsiveness
3. **`clamp()`** for fluid typography without media-query jumps
4. **Three breakpoints**: 1024px, 768px, 480px — mobile-first cascade
5. **`overflow-x: auto`** on tables/tab bars — no horizontal scroll bleed
6. Tested at: 320px, 375px, 414px, 768px, 1024px, 1280px

---

## Trade-offs: Design vs Performance

| Decision | Gain | Cost | Verdict |
|---|---|---|---|
| Google Fonts (Syne + DM Sans) | Distinctive typography | ~50KB, FOUT risk | Acceptable — preconnected |
| CSS `backdrop-filter` on navbar | Glassmorphism depth | GPU composite layer | Acceptable — single element |
| CSS animations on hero | Visual delight | Minimal (CSS-only) | Good trade-off |
| No external icon library | Consistent, small bundle | Slightly more markup | Positive — saved ~30KB |
| React Router SPA | Instant transitions | Larger initial bundle | 86KB gzip — acceptable |

Final gzipped build: **86.52 KB JS + 6.62 KB CSS**.

---

## Most Challenging Part

**The propose workshop flow.** Splitting a single dense form into a two-step wizard required:
- Maintaining form state across steps without data loss
- Step-specific validation before allowing progression
- A T&C modal that feeds back into the form's checkbox state
- A success state that allows re-proposing without page reload
- Making the entire flow work elegantly at 375px

Approach: modelled state as a flat object (`form`, `step`, `tncAccepted`, `submitted`) with focused per-step validation functions. The modal uses `position: fixed` with backdrop click-to-close.

---

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm

### Local Development
```bash
git clone <your-repo-url>
cd fossee-workshop
npm install
npm start
# Runs at http://localhost:3000
```

### Production Build
```bash
npm run build
# Static files in /build
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
# In package.json, add:
#   "homepage": "https://<username>.github.io/fossee-workshop"
#   scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

---

## Project Structure

```
src/
├── App.js              # Router, AuthContext, Toast, Footer
├── App.css             # Navbar, Buttons, Cards, Toasts, Footer
├── index.css           # Design tokens, reset, base typography
├── components/
│   └── Navbar.js       # Responsive nav with dropdown + mobile menu
└── pages/
    ├── HomePage           # Hero, stats, workshop grid, how-it-works
    ├── LoginPage          # Validated auth form
    ├── RegisterPage       # Multi-section registration
    ├── AuthPages.css      # Shared auth styles
    ├── WorkshopTypesPage  # Search + filter, table/cards
    ├── WorkshopDetailsPage# Outline, prerequisites, sidebar CTA
    ├── ProposeWorkshopPage# 2-step wizard + T&C modal
    ├── WorkshopStatusPage # Tabbed status tracker
    └── ProfilePage        # Editable profile with sidebar
```

---

## Features Implemented

- [x] Responsive navbar (hamburger on mobile, dropdown on desktop)
- [x] Hero section with animated floating cards + grid background
- [x] Impact statistics row
- [x] Workshop list: search, tag filter, table (desktop) + cards (mobile)
- [x] Workshop detail: day-by-day outline, prerequisites, T&C accordion
- [x] Two-step propose wizard with T&C modal
- [x] Workshop status page with tabs (All / Pending / Confirmed / Completed / Declined)
- [x] Profile page with inline editing
- [x] Toast notification system (success / error / info)
- [x] AuthContext (login / logout state management)
- [x] Inline form validation with accessible error messages
- [x] Empty states, loading spinners, success screens
- [x] Dark theme with CSS custom properties
- [x] SEO-friendly semantic HTML structure

---

## Backend Integration Notes

This is a React frontend with mocked data. To connect to the Django backend:

1. Add Django REST Framework + serializers for each model
2. Replace mock arrays with `fetch()` / `axios` API calls
3. Handle CSRF tokens in POST requests (`X-CSRFToken` header)
4. Replace `AuthContext` with session/JWT authentication

---

*Built as part of the FOSSEE Python Screening Task focused on improving UI/UX using React.*
