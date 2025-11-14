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

# Copy type augmentation file to dist directories and update authlete.d.ts
if [ -f "$ROOT_DIR/service-id-augmentation.d.ts" ]; then
  cp "$ROOT_DIR/service-id-augmentation.d.ts" "$ROOT_DIR/dist/commonjs/"
  cp "$ROOT_DIR/service-id-augmentation.d.ts" "$ROOT_DIR/dist/esm/"
  
  # Add reference directive to authlete.d.ts files (remove any existing import first)
  for file in "$ROOT_DIR/dist/commonjs/authlete.d.ts" "$ROOT_DIR/dist/esm/authlete.d.ts"; do
    if [ -f "$file" ]; then
      # Remove the import line if it exists
      sed -i '' '/import.*service-id-augmentation/d' "$file"
      # Add reference directive at the top if not present
      if ! grep -q "service-id-augmentation" "$file"; then
        sed -i '' '1s|^|/// <reference path="./service-id-augmentation.d.ts" />\n|' "$file"
      fi
    fi
  done
fi

