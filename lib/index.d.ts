import type { ZafClient } from "./client/client";
export { ZafClient };

export type ZAFClient = {
  init: () => ZafClient;
};
