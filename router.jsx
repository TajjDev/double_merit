// import { Link } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./src/layout/MainL";
import Index from "./src/pages/index/Index";
import About from "./src/pages/aboutUS/About";
// import Contact from "./src/pages/contactUS/contact";
import Academic from "./src/pages/academics/Academic";
import Contact from "./src/pages/contactUS/Contact";
import Unk from "./src/pages/index/Unk";


const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
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
            {
                path:'*',
                element:<Unk/>
            }

        ]
    }
])
export default router
