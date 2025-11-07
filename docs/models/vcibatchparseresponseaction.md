# VciBatchParseResponseAction

The next action that the batch credential endpoint should take.

## Example Usage

```typescript
import { VciBatchParseResponseAction } from "@authlete/authlete-typescript-sdk/models";

let value: VciBatchParseResponseAction = "UNAUTHORIZED";
```

## Values

```typescript
"OK" | "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "INTERNAL_SERVER_ERROR"
```