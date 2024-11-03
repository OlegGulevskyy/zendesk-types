import { Group } from "../group";
import { User } from "../user";
import { Comment, CommentResponse } from "../comment";
import { Via } from "../via";
import { Organization } from "../user/organizations";

export type Ticket = {
  createdAt: string;
  description: string;
  externalId: null | unknown;
  emailCcs: unknown;
  id: number;
  isNew: boolean;
  postSaveAction: string; // string enum to find
  priority: string; // string enum to find
  recipient: unknown;
  sharedWith: unknown;
  status: string; // string enum to find
  subject: string;
  tags: string[];
  type: string; // string enum to find
  updatedAt: string;
  viewers: unknown;
  brand: unknown;
  comment: Comment | CommentResponse;
  form: unknown;
  editor: unknown;
  organization: Organization;
  via: Via;
  conversation: unknown;
  collaborators: unknown;
  followers: unknown;
  assignee: {
    group: Group;
    user: User;
  };
  requester: User;
  comments: Comment[];
};
