import { User } from "./objects/user/";
import { Ticket } from "./objects/ticket";

export type Locations = {
  ticket: Ticket;
  currentUser: User;
};
