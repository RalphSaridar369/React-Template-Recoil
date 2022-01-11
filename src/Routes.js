import Home from "./Screens/Home/Home"
import Login from "./Screens/Auth/Login"
import About from "./Screens/About/About"
import Products from "./Screens/Products/Products"
import Register from "./Screens/Auth/Register"
import HomeDetailed from "./Screens/Home/HomeDetailed"

export const routes = [
    {
        exact:true,
        path:'/',
        component:<Home />,
        type:'normal',
    },
    {
        exact:false,
        path:'/book-details/:id',
        component:<HomeDetailed />,
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
        exact:true,
        path:'/register',
        component:<Register />,
        type:'normal'
    },
    {
        exact:true,
        path:'/about',
        component:<About />,
        type:'normal'
    },
]