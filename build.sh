#!/bin/bash
# Exit script if any command fails
set -e

# --- This is the fix ---
# Change directory into the folder containing the Rust project
echo "Changing to wasm-guessing-game directory..."
cd wasm-guessing-game

# Install wasm-pack
echo "Installing wasm-pack..."
cargo install wasm-pack

# Build the Rust/WASM module
echo "Building WebAssembly module..."
wasm-pack build --target web
