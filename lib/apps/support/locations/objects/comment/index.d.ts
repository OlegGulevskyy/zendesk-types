import { User } from "../user";

export type Comment = {
  channelDisplayInfo: Record<string, unknown>;
  id: number;
  imageAttachments: unknown[];
  nonImageAttachments: unknown[];
  value: string;
  via: {
    channel: string;
    source: {
      to: Record<string, unknown>;
      from: Record<string, unknown>;
      rel: null;
    };
  };
  author: User;
};
