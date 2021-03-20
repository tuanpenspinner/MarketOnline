import MenuVertical from "../layouts/menu-vertical/MenuVertical";
import Product from "../components/admin/product/Product";
const routes = [
  {
    layout: MenuVertical,
    path: "/admin/product",
    exact: true,
    component: Product,
  },
];
export default routes;
