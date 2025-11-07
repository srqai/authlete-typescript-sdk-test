# BackchannelAuthenticationIssueRequest

## Example Usage

```typescript
import { BackchannelAuthenticationIssueRequest } from "@authlete/authlete-typescript-sdk/models";

let value: BackchannelAuthenticationIssueRequest = {
  ticket: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `ticket`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The ticket issued from Authlete's `/backchannel/authentication` API.<br/> |