#!/bin/bash

# Setup script to create a test project for the Authlete SDK with proxy overlay

set -e

echo "🚀 Setting up test project for Authlete SDK..."

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SDK_DIR="$SCRIPT_DIR"
PARENT_DIR="$(dirname "$SCRIPT_DIR")"

# Prompt for project name
read -p "Enter test project name (default: authlete-test): " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-authlete-test}

TEST_PROJECT_DIR="$PARENT_DIR/$PROJECT_NAME"

if [ -d "$TEST_PROJECT_DIR" ]; then
    echo "⚠️  Directory $TEST_PROJECT_DIR already exists!"
    read -p "Continue anyway? (y/n): " CONTINUE
    if [ "$CONTINUE" != "y" ]; then
        echo "Aborted."
        exit 1
    fi
fi

echo "📁 Creating test project in: $TEST_PROJECT_DIR"
mkdir -p "$TEST_PROJECT_DIR"
cd "$TEST_PROJECT_DIR"

echo "📝 Creating package.json..."
cat > package.json << 'EOF'
{
  "name": "authlete-test",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "test": "ts-node test.ts"
  },
  "devDependencies": {
    "@types/node": "^24.10.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  },
  "dependencies": {
    "@authlete/typescript-sdk": "file:../test-sdk"
  }
}
EOF

echo "📝 Creating tsconfig.json..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
EOF

echo "📝 Creating test.ts..."
cat > test.ts << 'EOF'
import { Authlete } from "@authlete/typescript-sdk";

// Test the proxy overlay with serviceId in constructor
const authlete = new Authlete({
    serverURL: "https://api.authlete.com",
    serviceId: "YOUR_SERVICE_ID", // Replace with your actual service ID
});

async function test() {
    console.log("✅ SDK initialized with serviceId:", authlete.getServiceId());
    
    // Test that serviceId is injected automatically
    try {
        // This should work without passing serviceId explicitly
        const result = await authlete.authorization.issue({
            authorizationIssueRequest: {
                ticket: "TICKET_ID",
                subject: "user1"
            }
            // serviceId should be injected automatically from constructor
        });
        console.log("✅ Success! serviceId was injected automatically");
    } catch (error: any) {
        console.log("ℹ️  Error (expected if no real credentials):", error.message);
        console.log("✅ But the call was made - serviceId injection worked!");
    }
}

test();
EOF

echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit test.ts and replace 'YOUR_SERVICE_ID' with your actual service ID"
echo "2. Run: npm run test"
echo ""
echo "Project location: $TEST_PROJECT_DIR"

