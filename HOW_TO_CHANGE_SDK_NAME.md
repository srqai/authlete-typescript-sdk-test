# How to Change SDK Name from "authlete-test"

To change the SDK name from `authlete-test` to something else, you need to update these files:

## Files to Update

### 1. `.speakeasy/gen.yaml` - Main Configuration

```yaml
typescript:
  packageName: authlete-test  # CHANGE THIS
  baseErrorName: AuthleteTestError  # CHANGE THIS
  defaultErrorName: AuthleteTestDefaultError  # CHANGE THIS
  envVarPrefix: AUTHLETETEST  # CHANGE THIS (up to 12 chars)
  
generation:
  sdkClassName: AuthleteTest  # CHANGE THIS
```

### 2. `package.json`
- Line 2: `"name": "authlete-test"` → Change package name
- Lines 8, 46, 58, 69, 80, 91, 102, 113: All instances of `"authlete-test/source"` → Change to new name

### 3. `jsr.json`
- Line 4: `"name": "authlete-test"` → Change to new name

### 4. Rename Directory
The folder name `authlete-test-typescript` should match your new name.

## Example: Changing to "authlete-sdk"

### Step 1: Update `.speakeasy/gen.yaml`
```yaml
generation:
  sdkClassName: AuthleteSdk  # Changed from AuthleteTest
  
typescript:
  packageName: authlete-sdk  # Changed from authlete-test
  baseErrorName: AuthleteSdkError  # Changed from AuthleteTestError
  defaultErrorName: AuthleteSdkDefaultError  # Changed from AuthleteTestDefaultError
  envVarPrefix: AUTHLETESDK  # Changed from AUTHLETETEST
```

### Step 2: Update `package.json`
Replace all instances of:
- `"authlete-test"` → `"authlete-sdk"`
- `"authlete-test/source"` → `"authlete-sdk/source"`

### Step 3: Update `jsr.json`
```json
{
  "name": "authlete-sdk",  // Changed from authlete-test
  ...
}
```

### Step 4: Regenerate SDK
```bash
speakeasy generate
```

## Quick Commands

Replace all occurrences at once:
```bash
# In .speakeasy/gen.yaml
sed -i '' 's/authlete-test/authlete-sdk/g' .speakeasy/gen.yaml
sed -i '' 's/AuthleteTest/AuthleteSdk/g' .speakeasy/gen.yaml

# In package.json  
sed -i '' 's/"authlete-test"/"authlete-sdk"/g' package.json

# In jsr.json
sed -i '' 's/"authlete-test"/"authlete-sdk"/g' jsr.json
```

## After Renaming

1. Run `speakeasy generate` to regenerate
2. Run `npm install` to update dependencies
3. Update imports in examples
4. Test the build

## What NOT to Change

- The repository URL in `package.json` doesn't need to change
- The workflow file (`.speakeasy/workflow.yaml`) uses the actual spec file
- Overlay file (`.speakeasy/speakeasy-modifications-overlay.yaml`) doesn't need changes

## Recommended Names

- `authlete-sdk` - Simple and clear
- `@authlete/typescript-sdk` - Scoped npm package
- `authlete-typescript-sdk` - More descriptive

