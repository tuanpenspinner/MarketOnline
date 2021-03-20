import webRoute from "./web.router";
import notFoundRoute from "./notfound.route";

const routes = [...webRoute, ...notFoundRoute];

export default routes;
