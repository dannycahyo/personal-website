type HeaderMenu = {
  name: string;
  path: string;
};

const headerMenus: HeaderMenu[] = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Discord",
    path: "/discord",
  },
  {
    name: "About",
    path: "/about",
  },
];

export { headerMenus };
export type { HeaderMenu };
