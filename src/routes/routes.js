import Home from '~/pages/Home';
import Product from '~/pages/Product';
import News from '~/pages/News';
import Introduce from '~/pages/Introduce';

// Public routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/news', component: News },
    { path: '/introduce', component: Introduce },
];

export const privateRoutes = [];
