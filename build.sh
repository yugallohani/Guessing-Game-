#!/bin/bash
# Exit script if any command fails
set -e

# --- This is the fix ---
# Ensure we are in the root of the repository where Cargo.toml is located
# Render clones the repo into /opt/render/project/src
# We need to go up one level to the project root
cd .. 

# Install wasm-pack
echo "Installing wasm-pack..."
cargo install wasm-pack

# Build the Rust/WASM module
echo "Building WebAssembly module..."
wasm-pack build --target web
