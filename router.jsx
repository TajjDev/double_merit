import { Link } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layout/MainL";
import Index from "./src/pages/index/Index";
import About from "./src/pages/aboutUS/About";
import Contact from "./src/pages/contactUS/Contact";
import Academic from "./src/pages/academics/Academic";


const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Index/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contactUs",
                element:<Contact/>
            },
            {
                path:"/academics",
                element:<Academic/>
            },

        ]
    }
])

export default router
