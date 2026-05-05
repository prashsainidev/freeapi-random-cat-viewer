# Feline Editorial (Random Cat Viewer)

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-React_|_Vite_|_CSS3-blue?style=for-the-badge)

A sleek, magazine-style React application that fetches and displays random cat breeds using the FreeAPI endpoint. I wanted to move away from the standard boring API card layouts and try something that feels more like a high-end editorial or luxury catalog. 

## What it does

Every time you click "Discover Another", the app pulls a random cat from the database and updates the UI. It goes deep into the details:

- **Core Info:** Name, origin, weight, and lifespan.
- **Traits & Temperament:** Highlights if the cat is a lap cat, rare, hypoallergenic, or strictly indoor.
- **Stats:** Shows intelligence, energy level, adaptability, and affection using a custom dot-rating system.
- **Wikipedia Integration:** Directly links to the breed's Wikipedia page for deeper reading.

## Tech Stack & Design

- **Frontend:** React (Vite)
- **Styling:** Vanilla CSS (No Tailwind or Bootstrap)
- **Color Palette:** Dark mode (`#0d0d0d`) with warm gold/amber accents (`#c9a252`).
- **Typography:** 'Cormorant Garamond' for classy serif headings paired with 'DM Sans' for body text.
- **Responsiveness:** Uses media queries and `object-fit: contain` to prevent awkward cropping on mobile screens.

## API Used

- **Endpoint:** `https://api.freeapi.app/api/v1/public/cats/cat/random`
- **Behavior:** Returns a new random cat object on every request. The UI completely refreshes on every load, unlike standard list-based APIs.

## Key Learnings

- **Nested Objects:** Handled dynamic nested objects securely in React state (e.g., `catView.weight?.metric`).
- **Dynamic UI Mapping:** Mapped out dynamic UI elements like dot ratings based on raw integer values from the backend.

## How to run this locally

1. **Clone the repo** and navigate to this folder.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm run dev
   ```
4. Open the local link provided by Vite in your browser.
