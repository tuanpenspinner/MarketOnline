import MenuHorizontal from "../layouts/menu-horizontal/MenuHorizontal";
import Home from "../components/web/home/Home";
import Introduce from "../components/web/introduce/Introduce";
import Contract from "../components/web/contract/Contract";

const routes = [
  {
    layout: MenuHorizontal,
    path: "/",
    exact: true,
    component: Home,
  },
  {
    layout: MenuHorizontal,
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    layout: MenuHorizontal,
    path: "/introduce",
    exact: true,
    component: Introduce,
  },
  {
    layout: MenuHorizontal,
    path: "/contract",
    exact: true,
    component: Contract,
  },
];
export default routes;
