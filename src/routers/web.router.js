import MenuHorizontal from "../layouts/menu-horizontal/MenuHorizontal";
import Home from "../components/web/home/Home";
import Introduce from "../components/web/introduce/Introduce";
import Contract from "../components/web/contract/Contract";
import Product from "../components/web/product/Product";
import Category from "../components/web/category/Category";
import Cart from "../components/web/cart/Cart";
import Blog from "../components/web/blog/Blog";
import DetailBlog from "../components/web/detail-blog/DetailBlog";
import Policy from "../components/web/policy/Policy";
import Community from "../components/web/community/Community";

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
  {
    layout: MenuHorizontal,
    path: "/product/:id",
    exact: true,
    component: Product,
  },
  {
    layout: MenuHorizontal,
    path: "/cart",
    exact: true,
    component: Cart,
  },
  {
    layout: MenuHorizontal,
    path: "/category/:id",
    exact: true,
    component: Category,
  },
  {
    layout: MenuHorizontal,
    path: "/category",
    exact: true,
    component: Category,
  },
  {
    layout: MenuHorizontal,
    path: "/blog",
    exact: true,
    component: Blog,
  },
  {
    layout: MenuHorizontal,
    path: "/detail-blog/:id",
    exact: true,
    component: DetailBlog,
  },
  {
    layout: MenuHorizontal,
    path: "/policy",
    exact: true,
    component: Policy,
  },
  {
    layout: MenuHorizontal,
    path: "/community",
    exact: true,
    component: Community,
  },
];
export default routes;
