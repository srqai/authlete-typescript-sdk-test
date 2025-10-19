<!-- Start SDK Example Usage [usage] -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.services.get({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->