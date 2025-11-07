<!-- Start SDK Example Usage [usage] -->
```typescript
import { Authlete } from "authlete-typescript-sdk";

const authlete = new Authlete({
  bearer: process.env["AUTHLETE_BEARER"] ?? "",
});

async function run() {
  const result = await authlete.service.get({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->