# Memory Game

The Memory Game is an interactive web application designed to test and improve a user's short-term memory and cognitive focus. Unlike traditional "pair-matching" games, this version challenges players to recall their previous choices in an ever-changing environment.

[**View Live Demo**](https://ztanvir.github.io/memory-card/) | [**Browse Source Code**](https://github.com/ZTanvir/memory-card)

## Core functionalities

#### Logic & gameplay

- The Fisher-Yates Shuffle algorithm to shuffle cards
- Fetch data from api
- Store top score

#### User Experience

- Responsive and modern ui
- Background music and user interaction with ui sound

## Technologies used

- React
- Javascript
- Axios
- Localstorage
- Css module
- Vite

## Purpose & Goal

I built this to train my own memory. In a world where it’s hard to wait and even harder to focus, this game serves as a digital gym for the brain. It forces me to be mindful of each interaction, rewarding patience and attention over speed.

## Killer features

### **Fisher-Yates Shuffle algorithm:**

Initially, I used a basic `Math.random()` sort to shuffle the cards. However, during testing, I noticed a "bias" where certain cards remained in their original positions across multiple renders.

I implemented the Fisher-Yates (Knuth) Shuffle. This algorithm runs in `O(n)` time complexity and ensures every possible permutation of the cards is equally likely.

```
Javascript
// Optimized O(n) Shuffle
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
```

### **Synchronize user interaction with sound:**

To meet the project's goal of "Mindful Focus," I integrated audio system.

The user experience is enhanced with atmospheric background music and responsive sound effects that trigger on every card click and rotation."

### **Fetch all game data in initial screen:**

![](/screenshoot/Memory-Card_start_screen.gif)

Instead of fetching data sequentially or on every turn, I utilized `Promise.all()` to fetch all necessary game assets and API data in parallel during the initial loading screen.

### **Dynamic 3D Card Mechanics:**

![](/screenshoot/flip_card.gif)

On every new round or shuffle, cards perform a coordinated flip from the back-face to the front-face.
I leveraged the CSS `transform-style: preserve-3d` property combined with `backface-visibility: hidden.`

## Lesson learned

### **State vs Routing for Navigation**

While this worked for a small 3-page app, I realized it wasn't scalable. If the project grew to 50+ levels or complex settings pages it will be impossible to continue.
The solution is to use `react-router`.

### **Forcing Re-renders with the `key` Prop**

A major hurdle was getting the card-flip animation to trigger every time the deck was shuffled. Because the card components looked the same to React's Virtual DOM, it tried to reuse the existing elements without re-triggering the CSS entry animations.

As react use `React Reconciliation` algorithm to render elements.I implemented Unique Key Assignment. By assigning a new key to the card container on every render, I forced React to treat the shuffled cards as entirely new elements.

### **True randomness make the game more fun**

I learned that humans are very good at spotting patterns, even unintentional ones. If the shuffle isn't truly uniform, the game becomes predictable and loses its challenge. By implementing the `Fisher-Yates Shuffle` the issue has been solved.

### **Managing State & Prop Drilling**

One of the biggest challenges in this project was managing data flow across multiple components. Initially, I relied on prop drilling—passing data through several layers of components that didn't actually need the information just to reach a deeply nested child.

As the component tree grew, it became difficult to track where data originated and where it was being modified.

In future iterations or larger-scale projects, I plan to implement a Global State Management solution like `Context api` and `Redux toolkit`.

## Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

- **Node.js** (v18.x or higher) and **npm** or **yarn**.
- **Npm**: If you prefer using npm for package management and running scripts.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ZTanvir/memory-card.git
   cd memory-card
   ```

2. **Install dependencies:**

   Using Npm:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173/memory-card/](http://localhost:5173/memory-card/) to view the app in your browser.

### API Documentation

The API documentation for this application is available at [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon). It details all endpoints and their usage.
