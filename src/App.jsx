import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioMain from "./pages/PortfolioMain";
import Crepus from "./components/Crepus";
import Bloom from "./components/Bloom";
import FourPaws from "./components/FourPaws";

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
    {
      path: "/four-paws",
      element: <FourPaws />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
