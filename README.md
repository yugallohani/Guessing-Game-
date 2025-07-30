# WASM Guessing Game

A modern, interactive number guessing game built with Rust, WebAssembly (WASM), and JavaScript. The game is compiled to WebAssembly using `wasm-pack` and features a beautiful, responsive UI styled with Tailwind CSS.

## Live Demo

Play the game here: [https://guessing-game-vedd.onrender.com](https://guessing-game-vedd.onrender.com)

## How It Works
- The app picks a random number between 1 and 100.
- Enter your guess and get instant feedback:
  - "You're very close!" if your guess is within 5.
  - "Getting warmer..." if your guess is within 10.
  - Hints if your guess is too high or too low.
  - Celebrate with confetti and a message when you win!
- Start a new game anytime with the "New Game" button.

## Technologies Used
- **Rust**: Game logic and random number generation.
- **wasm-bindgen**: Bridge between Rust and JavaScript.
- **wasm-pack**: Build tool for compiling Rust to WASM.
- **JavaScript**: Handles UI interaction and DOM updates.
- **Tailwind CSS**: For a modern, responsive design.

## Project Structure
- `wasm-guessing-game/`: Rust source code and WASM build.
- `www/`: Frontend files (HTML, JS, CSS, and WASM package).
- `build.sh`: Build script for deployment (used by Render).

## Deployment
This project is deployed on [Render](https://render.com). The build process uses `build.sh` to compile the Rust code to WASM and copy the output to the web directory.

## Getting Started (Local Development)
1. Install [Rust](https://www.rust-lang.org/tools/install) and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/).
2. Clone this repo:
   ```sh
   git clone https://github.com/yugallohani/Guessing-Game-.git
   cd Guessing-Game-
   ```
3. Build the WASM package:
   ```sh
   cd wasm-guessing-game
   wasm-pack build --target web
   cp -r pkg ../www/
   ```
4. Serve the frontend:
   ```sh
   cd ../www
   python3 -m http.server 8080
   # Then open http://localhost:8080 in your browser
   ```

## License
MIT
