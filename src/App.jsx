import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopicsContainer from "./context/TopicsContainer";
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
    <TopicsContainer>
      <RouterProvider router={router} />
    </TopicsContainer>
  );
}

export default App;
