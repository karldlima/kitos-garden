interface Link {
  text: string;
  url: string;
}

interface HeaderLink {
  uid: number;
  link: Link;
}

export const headerData: HeaderLink[] = [
  { uid: 1, link: { text: "Home", url: "/" } },
  { uid: 2, link: { text: "Posts", url: "/posts" } },
  { uid: 3, link: { text: "Projects", url: "/projects" } },
];

export default headerData;
