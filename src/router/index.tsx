import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import Home from "../pages/home";
import DashboardLayoutBasic from "../components/layout";
import Dashboard from "../pages/dashboard";
  
const router = createBrowserRouter([
{
    path: "/",
    element: <DashboardLayoutBasic />,
    children: [
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
            children: [
                {
                    path: "/dashboard/home",
                    element: <Home />,
                }
            ]
        }
    ],
}
]);
  
export default router;
