import MenuVertical from "../layouts/menu-vertical/MenuVertical";
import Product from "../components/admin/product/Product";
import Category from "../components/admin/category/Category";
import Blog from "../components/admin/blog/Blog";
import Order from "../components/admin/order/Order";
import Comment from "../components/admin/comment/Comment";
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
    layout: MenuVertical,
    path: "/admin/order",
    exact: true,
    component: Order,
  },
  {
    layout: MenuVertical,
    path: "/admin/comment",
    exact: true,
    component: Comment,
  },
  {
    layout: LoginLayout,
    path: "/login",
    exact: true,
    component: Login,
  },
];
export default routes;
