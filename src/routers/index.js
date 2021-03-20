import webRoute from "./web.router";
import adminRoute from "./admin.route";
import notFoundRoute from "./notfound.route";

const routes = [...webRoute, ...adminRoute, ...notFoundRoute];

export default routes;
