import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

  return <RouterProvider router={router} />;
}

export default App;
