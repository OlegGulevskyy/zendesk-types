import type { ZafClient } from "./client/client";

declare global {
  interface Window {
    ZAFClient: {
      init: () => ZafClient;
    };
  }
}
