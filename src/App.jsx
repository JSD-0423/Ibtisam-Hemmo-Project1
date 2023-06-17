import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { FavoritesProvider, TopicsContainer, ThemeProvider } from "./context";
import { Home, Details } from "./pages";
import "./styles/global.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
  ]);

  return (
    <ThemeProvider>
      <TopicsContainer>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </TopicsContainer>
    </ThemeProvider>
  );
}

export default App;
