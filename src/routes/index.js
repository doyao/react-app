import Login from '../pages/Login/index'
import Echarts from '../components/Echarts/index'
import TodoList from '../components/TodoList/index'
import NotFind from '../pages/404/index'
export const mainRoutes=[
    {
        path:"/",
        component:Login
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/404",
        component:NotFind
    },
]

export const adminRoutes=[
    {
        path:"/admin/TodoList",
        component:TodoList,
        title: '用户信息管理',
        isShow:true,
        excat:true
    },
    {
        path:"/admin/Echarts",
        component:Echarts,
        title: 'Echarts',
        isShow:true,
        excat:true
    },
]