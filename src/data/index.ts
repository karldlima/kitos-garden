interface Link {
  text: string;
  url: string;
  icon?: string;
}

export interface Anchor {
  uid: number;
  link: Link;
}

export * from "./footerData";
export * from "./headerData";
