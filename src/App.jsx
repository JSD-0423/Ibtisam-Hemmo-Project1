import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FavoritesProvider, ThemeProvider } from "./context";
import { Home, Details, Layout } from "./pages";
import "./styles/global.css";

function App() {
  const isProduction = import.meta.env.PROD;

  const imagePath = isProduction
    ? "/Ibtisam-Hemmo-Project1/assets/images"
    : "../assets/images";

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "", element: <Home imagePath={imagePath} /> },
          { path: "details/:id", element: <Details imagePath={imagePath} /> },
        ],
      },
    ],
    { basename: import.meta.env.DEV ? "/" : "/Ibtisam-Hemmo-Project1/" }
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
