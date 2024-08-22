import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioMain from "./pages/PortfolioMain";
import Crepus from "./components/Crepus";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
