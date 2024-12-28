import { lazy } from "react";

const Home = lazy(() => import('../views/Home/Home'));
const Bags = lazy(() => import('../views/Bags/Bags'));
const SingleBag = lazy(() => import('../views/Bags/SingleBag'));
const Nodes = lazy(() => import('../views/Nodes/Nodes'));

const LukaRoutes: IRouteType.IRoute[] = [
    {
        name: 'Home',
        path: '/',
        element: Home,
        meta: {
            title: 'home',
        },
        children: []
    },
    {
        name: 'Bags',
        path: '/bags',
        element: Bags,
        meta: {
            title: 'bags',
        },
        children: []
    },
    {
        name: 'single bag',
        path: '/bags/:bagDisplayName',
        element: SingleBag,
        meta: {
            title: 'single bag',
        },
        children: []
    },
    {
        name: 'nodes',
        path: '/nodes',
        element: Nodes,
        meta: {
            title: 'nodes',
        },
        children: []
    }
];

export default LukaRoutes;