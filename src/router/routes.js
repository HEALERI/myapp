import Home from "../pages/Home";
import Market from "../pages/Market";
import User from "../pages/User";


export default [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/market',
        component:Market
    }
]