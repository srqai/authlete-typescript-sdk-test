#!/bin/bash
set -e

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Ensure directories exist
mkdir -p "$ROOT_DIR/.tshy-build/esm"
mkdir -p "$ROOT_DIR/.tshy-build/commonjs"

# Change to root directory and run tshy
cd "$ROOT_DIR"
npx tshy

