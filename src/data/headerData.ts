interface Link {
  text: string;
  url: string;
  icon: string;
}

interface HeaderLink {
  uid: number;
  link: Link;
}

export const headerData: HeaderLink[] = [
  { uid: 1, link: { text: "Home", url: "/", icon: "home-modern" } },
  { uid: 2, link: { text: "Posts", url: "/posts", icon: "book-open" } },
  {
    uid: 3,
    link: { text: "Projects", url: "/projects", icon: "computer-desktop" },
  },
];

export default headerData;
