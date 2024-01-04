import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "./router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/themes/theme.js";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CustomToaster from "./components/common/toaster/toaster-custom.jsx";
import "./assets/general-style.scss";

// ! Remove - came from API
import "./services/mock-data/mock-server.js";

// for rtl
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// import App from "./app.jsx";

// function RTL(props) {
//   return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
// }
//

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      initialData: {
        role: ["guest"],
      },
    },
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // *comented because of double rendering
  // <React.StrictMode>

  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <RouterProvider />
      </CacheProvider>
    </ThemeProvider>
    <CustomToaster />
  </QueryClientProvider>

  // <App />

  // </React.StrictMode>
);
