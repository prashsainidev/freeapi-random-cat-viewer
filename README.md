# Feline Editorial (Random Cat Viewer)

A sleek, magazine-style React application that fetches and displays random cat breeds using the FreeAPI endpoint. I wanted to move away from the standard boring API card layouts and try something that feels more like a high-end editorial or luxury catalog. 

## What it does
Every time you click "Discover Another", the app pulls a random cat from the database and updates the UI. Instead of just showing a basic name and picture, it goes deep into the details:
- **Core Info:** Name, origin, weight, and lifespan.
- **Traits & Temperament:** Highlights if the cat is a lap cat, rare, hypoallergenic, or strictly indoor.
- **Stats:** Shows intelligence, energy level, adaptability, and affection using a custom dot-rating system (e.g. 4 out of 5 dots).
- **Wikipedia Integration:** Directly links to the breed's Wikipedia page for deeper reading.

## Tech Stack & Design
- **React (Vite)** for the frontend architecture.
- **Vanilla CSS** for styling (No Tailwind or Bootstrap).
- The design uses a dark mode palette (`#0d0d0d`) with warm gold/amber accents (`#c9a252`). I paired 'Cormorant Garamond' for the classy serif headings with 'DM Sans' for clean body text.
- **Responsive:** Added specific media queries and `object-fit: contain` logic to ensure cat images don't get awkwardly cropped on smaller 320px mobile screens.

## How to run this locally

1. Clone the repo and navigate to this folder.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the local link provided by Vite in your browser.

## API Used
- **URL:** `https://api.freeapi.app/api/v1/public/cats/cat/random`
- This endpoint returns a new random cat object on every request. This is why the UI completely changes on every single load, unlike standard list-based APIs that return fixed arrays.

## Key Learnings
Building this helped me understand how to handle dynamic nested objects in React state (`catView.weight?.metric`), and how to map out dynamic UI elements like the dot ratings based on raw integer values coming directly from the backend.
