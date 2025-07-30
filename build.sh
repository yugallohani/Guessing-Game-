#!/bin/bash
# Exit script if any command fails
set -e

# Change directory into the folder containing the Rust project
echo "Changing to wasm-guessing-game directory..."
cd wasm-guessing-game

# Install wasm-pack
echo "Installing wasm-pack..."
cargo install wasm-pack

# Build the Rust/WASM module. This creates a `pkg` directory inside here.
echo "Building WebAssembly module..."
wasm-pack build --target web

# --- This is the fix ---
# Copy the compiled package into the `www` directory, which Render serves.
echo "Copying built package to publish directory..."
cp -r pkg ../www/
