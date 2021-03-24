import MenuVertical from "../layouts/menu-vertical/MenuVertical";
import Product from "../components/admin/product/Product";
import Category from "../components/admin/category/Category";
import Blog from "../components/admin/blog/Blog";
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
    layout: MenuVertical,
    path: "/admin/category",
    exact: true,
    component: Category,
  },
  {
    layout: MenuVertical,
    path: "/admin/blog",
    exact: true,
    component: Blog,
  },

  {
    layout: LoginLayout,
    path: "/login",
    exact: true,
    component: Login,
  },
];
export default routes;
