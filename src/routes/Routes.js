import { createBrowserRouter } from "react-router-dom";
import Homes from "../Components/Pages/Homes/Homes";
import Login from "../Components/Pages/Login/Login";
import Main from "../Layout/Main";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Homes></Homes>

      },
      {
        path: '/login',
        element: <Login></Login>
      }

    ]
  }
])