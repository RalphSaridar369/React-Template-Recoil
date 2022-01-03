import Home from "./Screens/Home/Home"
import Login from "./Screens/Auth/Login"
import About from "./Screens/About/About"

export const routes = [
    {
        exact:true,
        path:'/',
        component:<Home />,
        type:'protected',
    },
    {
        exact:false,
        path:'/login',
        component:<Login />,
        type:'normal'
    },
    {
        exact:false,
        path:'/about',
        component:<About />,
        type:'normal'
    },
]