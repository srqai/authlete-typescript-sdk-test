# IdtokenReissueResponseAction

The next action that the implementation of the token endpoint should take.

## Example Usage

```typescript
import { IdtokenReissueResponseAction } from "authlete/models";

let value: IdtokenReissueResponseAction = "CALLER_ERROR";
```

## Values

```typescript
"OK" | "INTERNAL_SERVER_ERROR" | "CALLER_ERROR"
```