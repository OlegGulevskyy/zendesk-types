import { NestedPaths } from "../utilities/utilities";
import { GetData, GettableLocations } from "./get";
import { Metadata } from "../metadata/metadata";

type ZendeskApiResponse<U> = U & {
  errors: {}; // need to reproduce errors somehow to property type it
};

export type ZafClient = {
  invoke: (cmd: string, arg: any) => void;

  get: <Path extends NestedPaths<GettableLocations>>(
    key: Path
  ) => Promise<ZendeskApiResponse<GetData<Path>>>;

  metadata: <U>() => Metadata<U>;
  request: <U>(data: Object) => Promise<U>;
  on: (eventName: string, listener: (...args: any) => any) => void;
};
