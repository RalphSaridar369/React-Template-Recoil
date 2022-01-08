import Home from "./Screens/Home/Home"
import Login from "./Screens/Auth/Login"
import About from "./Screens/About/About"
import Products from "./Screens/Products/Products"

export const routes = [
    {
        exact:true,
        path:'/',
        component:<Home />,
        type:'normal',
    },
    {
        exact:true,
        path:'/products',
        component:<Products />,
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