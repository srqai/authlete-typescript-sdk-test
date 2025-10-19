# GMResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { GMResponseAction } from "authlete-test/models";

let value: GMResponseAction = "NOT_FOUND";
```

## Values

```typescript
"OK" | "NO_CONTENT" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "CALLER_ERROR" | "AUTHLETE_ERROR"
```