# BackchannelAuthenticationIssueRequest

## Example Usage

```typescript
import { BackchannelAuthenticationIssueRequest } from "@big76/test-sdk/models";

let value: BackchannelAuthenticationIssueRequest = {
  ticket: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `ticket`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The ticket issued from Authlete's `/backchannel/authentication` API.<br/> |