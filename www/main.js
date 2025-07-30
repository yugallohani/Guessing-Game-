// Import the wasm-bindgen generated glue code
import init, { GuessingGame } from './pkg/wasm_guessing_game.js';

async function run() {
    // Initialize the wasm module
    await init();

    // Get DOM elements
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const resetButton = document.getElementById('reset-button');
    const messageEl = document.getElementById('message');

    let game = new GuessingGame();

    // Function to handle a guess
    function handleGuess() {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess)) {
            messageEl.textContent = "Please enter a valid number.";
            messageEl.className = "mt-6 text-lg h-8 text-yellow-400";
            return;
        }

        const result = game.guess(guess);
        messageEl.textContent = result;

        // Style message based on result
        if (result.includes("You got it!")) {
            messageEl.className = "mt-6 text-lg h-8 text-green-400 font-bold";
            guessInput.disabled = true;
            guessButton.disabled = true;
        } else if (
            result.includes("low") || result.includes("high") ||
            result.includes("higher") || result.includes("lower")
        ) {
            messageEl.className = "mt-6 text-lg h-8 text-red-400";
        } else if (result.includes("The game is over")) {
            messageEl.className = "mt-6 text-lg h-8 text-yellow-400 font-bold";
        } else if (result.includes("warmer") || result.includes("close")) {
            messageEl.className = "mt-6 text-lg h-8 text-orange-400";
        } else {
            messageEl.className = "mt-6 text-lg h-8";
        }

        guessInput.value = '';
        guessInput.focus();
    }

    // Function to reset the game
    function resetGame() {
        game.reset();
        messageEl.textContent = '';
        messageEl.className = "mt-6 text-lg h-8";
        guessInput.disabled = false;
        guessButton.disabled = false;
        guessInput.value = '';
        guessInput.focus();
    }

    // Event listeners
    guessButton.addEventListener('click', handleGuess);
    resetButton.addEventListener('click', resetGame);

    // Allow pressing Enter to guess
    guessInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleGuess();
        }
    });

    // Set initial focus
    guessInput.focus();
}

run();
