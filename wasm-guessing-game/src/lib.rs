use wasm_bindgen::prelude::*;
use rand::Rng;

// A struct to hold the game's state.
#[wasm_bindgen]
pub struct GuessingGame {
    secret_number: u32,
    game_over: bool,
}

#[wasm_bindgen]
impl GuessingGame {
    /// Creates a new game instance.
    #[wasm_bindgen(constructor)]
    pub fn new() -> GuessingGame {
        let secret_number = rand::thread_rng().gen_range(1..=100);
        GuessingGame {
            secret_number,
            game_over: false,
        }
    }

    /// Resets the game with a new secret number.
    pub fn reset(&mut self) {
        self.secret_number = rand::thread_rng().gen_range(1..=100);
        self.game_over = false;
    }

    /// Checks the user's guess against the secret number.
    /// Returns a string message indicating the result with emojis.
    pub fn guess(&mut self, guess: u32) -> String {
        if self.game_over {
            return "The game is over. Please start a new game.".to_string();
        }

        // Compare the guess to the secret number
        if guess == self.secret_number {
            self.game_over = true;
            format!("🎉 You got it! The number was {}.", self.secret_number)
        } else {
            // Calculate the absolute difference
            let diff = if guess > self.secret_number {
                guess - self.secret_number
            } else {
                self.secret_number - guess
            };

            // Provide feedback based on how close the guess is
            let hint = if guess < self.secret_number { "higher" } else { "lower" };
            
            if diff <= 5 {
                format!("🤏 You're very close! Try a little {}.", hint)
            } else if diff <= 10 {
                format!("🤔 Getting warmer... Try a bit {}.", hint)
            } else {
                format!("🥶 Too {}! Try again.", if guess < self.secret_number { "low" } else { "high" })
            }
        }
    }
}
