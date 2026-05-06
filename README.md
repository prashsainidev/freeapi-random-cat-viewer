# Feline Editorial (Random Cat Viewer)

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-React_|_Vite_|_CSS3-blue?style=for-the-badge)

**Welcome to Part 3 of my FreeAPI Mastery Series.** After building complex lists and grids in the first two parts of this series, I wanted to shift focus to single-item data architecture.

This is a sleek, magazine-style React application that fetches and displays random cat breeds using the FreeAPI endpoint. I wanted to move away from the standard boring API card layouts and try something that feels more like a high-end editorial or luxury catalog. 

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

## The API Integration Breakdown

### 1. The Dynamic Fetch
- **Endpoint:** `https://api.freeapi.app/api/v1/public/cats/cat/random`
- **Behavior:** This specific endpoint returns a *single* random cat object on every request, not a list. To make the app interactive, I attached the `fetchCat()` function to the "Discover Another" button. The UI completely refreshes on every load.

### 2. Demystifying the JSON Data
When you hit the endpoint, the API returns a massive JSON object wrapped in `data.data`. This single object contains deeply nested information.
- **Core Info:** `catView.name`, `catView.description`, and `catView.image` are straightforward strings.
- **Nested Objects:** Some data is hidden deeper. For example, weight isn't a string, it's an object. I had to use optional chaining to safely extract `catView.weight?.metric`.
- **String Splitting:** The API returns temperament as a single comma-separated string (`"Playful, Energetic, Friendly"`). I used `.split(', ')` to break it into an array and map it to individual UI badges.

### 3. Dynamic UI Mapping (The Stats)
The API returns stats like intelligence and energy level as raw integers (e.g., `intelligence: 5`). Instead of just printing the number "5", I built a `renderDots(score)` function that maps an array of `[1, 2, 3, 4, 5]` and dynamically colors the dots based on the API's integer value, creating a premium visual rating system.

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
