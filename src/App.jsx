import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioMain from "./pages/PortfolioMain";
import Crepus from "./components/Crepus";
import Bloom from "./components/Bloom";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <PortfolioMain />,
    },
    {
      path: "/crepus",
      element: <Crepus />,
    },
    {
      path: "/bloom",
      element: <Bloom />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
