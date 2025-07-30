#!/bin/bash
# Exit script if any command fails
set -e

# Install wasm-pack
cargo install wasm-pack

# Build the Rust/WASM module
wasm-pack build --target web
