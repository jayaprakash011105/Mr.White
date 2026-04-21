# Mr. White: The Mutation 🕵️‍♂️🦠

A modern, high-stakes social deduction game based on "Mr. White" / "Undercover". This version introduces a unique **Mutation Mechanic** that makes the game dynamic and challenging for infiltrators.

## 🌟 Features
- **Dynamic Backgrounds**: The UI theme changes based on the game phase (Home, Lobby, Reveal, Discussion, Voting).
- **Mutation System**: Infected players' words can shift through a "word chain" over time, forcing them to adapt their strategy.
- **Difficulty Modes**: Easy, Medium, and Hard word sets for different skill levels.
- **Flexible Player Counts**: Supports 3 to 10+ players with automatic role balancing.
- **Responsive Design**: Built with React and Vanilla CSS for a premium, mobile-friendly experience.

## 🎮 How to Play

### Roles
1. **Stable (Civilians)**: The majority. They have a secret word and must find the imposters.
2. **Infected (Parasites)**: A small group that starts with the same word as the Stable players but suffers from **Mutation** (their word changes randomly each round within a related chain).
3. **Mr. White**: A lone agent who has a completely different (but related) word or a category hint. They must guess the Stable word to survive.

### Game Flow
1. **Setup**: Enter player names and select difficulty.
2. **The Reveal**: Each player privately views their role and secret word.
3. **The Discussion**: Players take turns giving a one-word clue about their word.
4. **The Mutation**: Between rounds, the Host can trigger a new round, which might mutate the Infected players' words.
5. **The Vote**: Players vote to eliminate someone.
6. **Victory**: 
   - **Stable Win**: Eliminate Mr. White.
   - **Mr. White Win**: Survive until only 2 players remain.

## 🛠️ Tech Stack
- **Frontend**: React (Hooks, State Management)
- **Tooling**: Vite
- **Styling**: Vanilla CSS (Custom properties, CSS Animations)
- **Icons**: SVG injection

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---
*Created for the ultimate social deduction experience.*
