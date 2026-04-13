# FOSSEE Workshop Booking: React UI/UX Redesign

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
All components were designed starting from 375px screens. Navigation collapses into a hamburger menu, tables convert into cards on mobile, and forms stack vertically for better readability. Touch targets follow WCAG recommendations (minimum 44px).

### 2. Visual Hierarchy
A clean hierarchy was created using the Syne font for headings and DM Sans for body text. A single accent color (#63b3ed) is used consistently for interactive elements, while semantic colors are reserved for status indicators.

### 3. Information Architecture
The app separates browsing, details, and actions clearly:

- `/workshop-types` → Browse workshops with search and filters  
- `/workshop-types/:id` → Detailed workshop view  
- `/propose` → Workshop request flow  
- `/my-workshops` → Status tracking  

### 4. Feedback & States
Every user interaction has clear feedback:
hover states, loading states, success toasts, error messages, and empty states. This reduces ambiguity and improves usability.

### 5. Accessibility
- Semantic HTML elements used throughout  
- ARIA labels and live regions for dynamic updates  
- Keyboard-friendly navigation  
- Form validation with accessible error messages  

---

## How Responsiveness Was Achieved

- CSS variables for consistent spacing and colors  
- CSS Grid with `auto-fit` and `minmax()` for flexible layouts  
- `clamp()` used for responsive typography  
- Mobile-first breakpoints: 1024px, 768px, 480px  
- Tables gracefully degrade into cards on small screens  

Tested across common device widths (320px to 1280px).

---

## Trade-offs: Design vs Performance

| Decision | Benefit | Trade-off | Outcome |
|----------|--------|------------|----------|
| Google Fonts | Better typography | Slight load cost | Acceptable |
| Backdrop blur navbar | Modern UI feel | GPU usage | Minimal impact |
| CSS animations | Better UX feel | Slight paint cost | Worth it |
| No icon library | Smaller bundle | More manual icons | Faster load |
| React SPA routing | Smooth navigation | Larger JS bundle | Acceptable (~86KB gzip) |

---

## Most Challenging Part

The most challenging part was building the workshop proposal flow.

It required:
- Maintaining state across steps
- Step-wise validation
- A terms & conditions modal integrated into the form state
- Ensuring everything worked smoothly on mobile screens

This was handled using a structured state model and step-based validation logic.

---

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm

### Run Locally
```bash
git clone <your-repo-url>
cd fossee-workshop
npm install
npm start

## Project Structure

```
src/
├── App.js
├── App.css
├── index.css
├── components/
│   └── Navbar.js
└── pages/
    ├── HomePage
    ├── WorkshopTypesPage
    ├── WorkshopDetailsPage

---

## Features Implemented

- Responsive navbar with mobile menu
- Hero section with modern layout
- Workshop search + filtering
- Workshop detail pages
- Mobile-first responsive design
- Toast notifications system
- Accessible forms and UI states
- Clean dark theme UI

---

## Backend Integration Notes

This is a React frontend with mocked data. To connect to the Django backend:

1. Add Django REST Framework + serializers for each model
2. Replace mock arrays with `fetch()` / `axios` API calls
3. Handle CSRF tokens in POST requests (`X-CSRFToken` header)
4. Replace `AuthContext` with session/JWT authentication

---

*Built as part of the FOSSEE Python Screening Task focused on improving UI/UX using React.*
