# IntrospectionResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { IntrospectionResponseAction } from "authlete-test/models";

let value: IntrospectionResponseAction = "FORBIDDEN";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "OK"
```