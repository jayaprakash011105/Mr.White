# 🕵️‍♂️ Mr. White: The Mutation 🦠

Welcome to the ultimate social deduction experience. **Mr. White: The Mutation** is a high-stakes, fast-paced party game that blends the classic "Undercover" mechanics with a unique, dynamic **Mutation System**.

---

## 🎮 Game Concept

In a world of secrets, most are **Stable**—civilians holding a shared secret word. However, among them lurks an agent known as **Mr. White**, and a group of **Infected Parasites** whose very thoughts (words) are shifting.

The goal? **Stable players** must find and eliminate Mr. White. **Mr. White** must survive and blend in. **Infected players** must adapt to their changing words without being detected as imposters.

---

## 🚦 Complete Game Flow

### 1. 🏠 Home Screen (The Gateway)
The entry point of the game. Here you can:
*   **Access Rules**: Tap the `?` icon to understand the mechanics.
*   **Adjust Settings**: Tap the `⚙️` icon to configure reveal times, discussion timers, and visual preferences (Animations/High Contrast).
*   **Start Game**: Press the "Enter" button to move to setup.

### 2. 📝 Setup Phase (Lobby)
The Host prepares the mission:
*   **Player Registration**: Add 3 to 10+ players.
*   **Difficulty Selection**: 
    *   🟢 **Easy**: Distinct, simple words.
    *   🟡 **Medium**: Closely related concepts.
    *   🔴 **Hard**: Abstract or highly specific word chains.
*   **Mr. White Hints**: Choose what Mr. White sees:
    *   `Imposter`: They see "IMPOSTER" (Hardest).
    *   `Category`: They see the broad category (e.g., "CATEGORY: FRUITS").
    *   `Related Word`: They get a word related to the Stable word.
*   **Game Mode**:
    *   **Normal**: Classic social deduction.
    *   **Mutation**: Words for Infected players shift every round.

### 3. 👁️ The Reveal (Security Check)
The phone is passed around. Each player taps their name to see:
*   **Their Secret Word**.
*   **Their Identity Status** (Stable, Infected, or Mr. White).
*   *Note: This screen has a timer and a "Hide" function to ensure privacy.*

### 4. 🗣️ The Discussion (Clue Phase)
The most intense part of the game.
*   **Turn-Based Clues**: Players take turns giving a **single word clue** that describes their secret word without giving it away to Mr. White.
*   **Host Control**: The host manages a timer.
*   **Mutation Pulse**: If playing in **Mutation Mode**, the host can trigger a "Next Round" which might cause the Infected players' words to mutate into the next stage of the chain!

### 5. 🗳️ The Vote (Elimination)
Suspicions reach a boiling point.
*   Players select who they believe is an imposter.
*   **Elimination Result**: A dedicated screen reveals if the ousted player was **Stable**, **Infected**, or the elusive **Mr. White**.

### 6. 🏆 Victory or Defeat (End Game)
*   **Stable Victory**: The group successfully identifies and eliminates Mr. White.
*   **Mr. White Victory**: Mr. White survives until only 2 players remain.
*   **Session Scores**: The game tracks wins across multiple rounds for a competitive session.

---

## 🧬 The Mutation Mechanic
Exclusive to this version, the **Infected** role adds a layer of chaos:
*   Infected players start with the same word as the Stable players.
*   As rounds progress, there is an increasing chance (`Round Number * 25%`) that their word will **Mutate**.
*   They must subtly shift their clues to match their new word while convincing others they are still "Stable".

---

## 🛠️ Technical Features
*   **Dynamic Theme Engine**: The background and UI color schemes automatically shift to match the mood of the game phase (e.g., Chill Blue for Setup, Danger Red for Voting).
*   **Smart Word Chains**: Hand-curated word sets designed to create linguistic ambiguity.
*   **Responsive UI**: Optimized for both mobile "pass-and-play" and desktop hosting.

---

## 🚀 Getting Started

1.  **Clone & Install**:
    ```bash
    npm install
    ```
2.  **Launch Mission**:
    ```bash
    npm run dev
    ```

---
*Good luck, Agent. Trust no one—not even your own words.*
