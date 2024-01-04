import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutesList, routesList } from "./routes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ForbiddenAccess from "../pages/errors/forbidden";
import ScrollToTop from "./scroll-restoration ";
// import Loading from "../components/base/loading";

const RouterProvider = () => {
  const queryClient = useQueryClient();

  const { data: roleFromQuery } = useQuery({
    queryKey: ["role"],
  });

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log("get LS set to rq", role);
    queryClient.setQueryData(["role"], role);

    // console.log("role set to setQueryData", role);
  }, [roleFromQuery]);

  const hendleRouterEnter = (route) => {
    if (route.authRole.includes(roleFromQuery)) {
      console.log("inc", route.name);
      return <route.component />;
    } else {
      console.log("not inc");
      return <route.component />;
      // return <ForbiddenAccess />;
    }
  };

  return (
    <BrowserRouter scrollRestoration="manual">
      <ScrollToTop />
      <Routes>
        {publicRoutesList.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        ))}

        {routesList.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            element={hendleRouterEnter(route)}
          >
            {/* {console.log(
              "Ok >",
              route.name,
              route.authRole,
              role,
              route.authRole.includes(role)
            )} */}
            {/* {route.subRoute
                  ? console.log(route.subRoute)
                  : console.log("no sub")} */}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
  // }
};

export default RouterProvider;
