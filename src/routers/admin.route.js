import MenuVertical from "../layouts/menu-vertical/MenuVertical";
import Product from "../components/admin/product/Product";
import LoginLayout from "../layouts/login/Login";
import Login from "../components/admin/login/Login";

const routes = [
  {
    layout: MenuVertical,
    path: "/admin/product",
    exact: true,
    component: Product,
  },
  {
    layout: LoginLayout,
    path: "/login",
    exact: true,
    component: Login,
  },
];
export default routes;
