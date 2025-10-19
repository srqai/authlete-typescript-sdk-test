# VciDeferredParseResponseAction

The next action that the deferred credential endpoint should take.

## Example Usage

```typescript
import { VciDeferredParseResponseAction } from "authlete-test/models";

let value: VciDeferredParseResponseAction = "UNAUTHORIZED";
```

## Values

```typescript
"OK" | "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "INTERNAL_SERVER_ERROR"
```