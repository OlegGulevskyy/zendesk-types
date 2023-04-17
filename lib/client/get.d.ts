import { Locations as AllLocations } from "../apps/support/locations";
import { NestedPaths, TypeFromPath } from "../utilities/utilities";

export type GetData<Key extends NestedPaths<AllLocations>> = {
  [key in Key]: TypeFromPath<AllLocations, key>;
};
