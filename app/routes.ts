import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes() satisfies RouteConfig;

// export default [
//     index("./routes/_index.tsx"),

//     layout("./routes/_auth/route.tsx", [
//         route("login", "./routes/_auth.login/route.tsx"),
//         route("register", "./routes/_auth.register/route.tsx"),
//     ]),
// ] satisfies RouteConfig;