import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Pages/Authentication/Register";
import Completed from "../Pages/Dashboard/Completed/Completed";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Ongoing from "../Pages/Dashboard/Ongoing/Ongoing";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ToDo from "../Pages/Dashboard/ToDo/ToDo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h1>hhhh</h1>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "to-do",
        element: <ToDo />,
      },
      {
        path: "ongoing",
        element: <Ongoing />,
      },
      {
        path: "completed",
        element: <Completed />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
]);
