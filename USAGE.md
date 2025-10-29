<!-- Start SDK Example Usage [usage] -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.services.get({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->