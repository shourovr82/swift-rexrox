import { createBrowserRouter } from "react-router-dom";
import Booking from "../Components/Pages/Booking/Booking";
import Homes from "../Components/Pages/Homes/Homes";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Login/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('http://localhost:5000/hotels'),
        element: <Homes></Homes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/place/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/place/${params.id}`),
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
      ,


    ]
  }
])