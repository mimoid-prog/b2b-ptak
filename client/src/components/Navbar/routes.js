const routes = [
  {
    link: "/",
    title: "home.title",
    internal: true,
    submenu: false,
  },
  {
    link: "/for-visitors",
    title: "forVisitors.title",
    internal: true,
    submenuSlug: "forVisitors",
    submenu: [
      {
        link: "/visitor-registration",
        title: "visitorRegistration.title",
        internal: true,
      },
      {
        link: "/exhibitors-catalog",
        title: "exhibitorsCatalog.title",
        internal: true,
      },
      {
        link: "hostedBuyers.link",
        title: "hostedBuyers.title",
        internal: false,
      },
      {
        link: "hotels.link",
        title: "hotels.title",
        internal: false,
      },
    ],
  },
  {
    link: "/for-exhibitors",
    title: "forExhibitors.title",
    internal: true,
    submenuSlug: "forExhibitors",
    submenu: [
      {
        link: "/exhibitor-registration",
        title: "exhibitorRegistration.title",
        internal: true,
      },
    ],
  },
  {
    link: "/contact",
    title: "contact.title",
    internal: true,
    submenu: false,
  },
];

export default routes;

const submenus = routes.filter(route => route.submenu);
let submenusObject = {};

for (let i = 0; i < submenus.length; i++) {
  submenusObject[submenus[i].submenuSlug] = false;
}

export { submenusObject };
