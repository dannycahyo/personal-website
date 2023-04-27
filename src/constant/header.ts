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
    name: "About",
    path: "/about",
  },
];

export { headerMenus };
export type { HeaderMenu };
