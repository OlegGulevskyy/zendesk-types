export type Via = {
  channel: string;
  source: {
    to: {
      name: string;
      address: string;
    };
    from: {
      address: string;
      name: string;
    };
    rel: null;
  };
};
