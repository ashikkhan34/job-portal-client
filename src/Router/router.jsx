import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../MainlayOut/MainlayOut";
import Home from "../Pages/Home";
import Register from "../Pages/register/Register";
import SignIn from "../Pages/signIn/SignIn";
import JobDetails from "../Pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/jobApplay/JobApply";
import MyApplications from "../Pages/myapplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedjob/MyPostedJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      errorElement: <h1>this is error pages</h1>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/job-details/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:4000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:'/myApplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'/add-job',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'/myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;