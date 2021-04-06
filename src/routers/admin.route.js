import MenuVertical from "../layouts/menu-vertical/MenuVertical";
import Product from "../components/admin/product";
import Category from "../components/admin/category";
import Blog from "../components/admin/blog";
import Order from "../components/admin/order";
import Comment from "../components/admin/comment";

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
];
export default routes;
