import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ProfileUpdate from "../Pages/ProfileUpdate";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Pages/EstateDetails";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path: "/estates/:id",
        element: <EstateDetails />,
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path: "/profile-update",
        element: <ProfileUpdate />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
