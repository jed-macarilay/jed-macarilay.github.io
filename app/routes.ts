import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // index("routes/home.tsx"),
  index("routes/home.tsx"),
  route("/portfolio", "routes/home.tsx"),
  route("/about", "routes/about.tsx"),
] satisfies RouteConfig;
