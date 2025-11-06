# InfoResponse

## Example Usage

```typescript
import { InfoResponse } from "authlete/models";

let value: InfoResponse = {
  version: "<value>",
  features: [],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `version`                              | *string*                               | :heavy_check_mark:                     | The server version.                    |
| `features`                             | *string*[]                             | :heavy_check_mark:                     | the features that the server supports. |