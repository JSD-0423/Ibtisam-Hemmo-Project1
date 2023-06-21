import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FavoritesProvider, ThemeProvider } from "./context";
import { Home, Details, Layout } from "./pages";
import "./styles/global.css";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "", element: <Home /> },
          { path: "details/:id", element: <Details /> },
        ],
      },
    ],
    { basename: import.meta.env.DEV ? "/" : "/react-vite-gh-pages/" }
  );

  return (
    <ThemeProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
