import MenuHorizontal from "../layouts/menu-horizontal/MenuHorizontal";
import Home from "../components/web/home/Home";
import Introduce from "../components/web/introduce/Introduce";

const routes = [
  {
    layout: MenuHorizontal,
    path: "/",
    exact: true,
    component: Home,
  },
  {
    layout: MenuHorizontal,
    path: "/introduce",
    exact: true,
    component: Introduce,
  },
];
export default routes;
