import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home/Home"
import {Shoes} from "./pages/Shoes/Shoes"
import {Shoe} from "./pages/Shoe/Shoe"
import {Navbar} from "./components/Navbar/Navbar"


const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shoes",
        element: <Shoes />,
      },
      {
        path: "shoe/:shoeId",
        element: <Shoe />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
