import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { 
    ADMIN_ROUTE, 
    BASKET_ROUTE, 
    DEVICE_ROUTE, 
    ERROR_ROUTE, 
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE, 
    SHOP_ROUTE 
} from "./utils/consts";

export const authRoutes = [     // для авторизаванных пользователей
    {
        path: ADMIN_ROUTE,
        component: <Admin />
    },
    {
        path: BASKET_ROUTE,
        component: <Basket />
    },
];

export const publicRoutes = [   // для всех пользователей
    {
        path: SHOP_ROUTE,
        component: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth />
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: <DevicePage />
    },
    {
        path: ERROR_ROUTE,
        component: <Shop />
    }
];