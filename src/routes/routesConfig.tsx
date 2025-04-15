import { lazy } from "react";

const Home = lazy(() => import('../views/Home/Home'));
const Bags = lazy(() => import('../views/Bags/Bags'));
const SingleBag = lazy(() => import('../views/Bags/SingleBag'));
const Nodes = lazy(() => import('../views/Nodes/Nodes'));
const SingleTask = lazy(() => import('../views/Tasks/SingleTask'));
const Tasks = lazy(() => import('../views/Tasks/Tasks'));

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
        name: 'single task',
        path: '/bags/:bagDisplayName/tasks/:taskDisplayName',
        element: SingleTask,
        meta: {
            title: 'single task',
        },
        children: []
    },
    {
        name: 'tasks',
        path: '/bags/:bagDisplayName/tasks',
        element: Tasks,
        meta: {
            title: 'tasks',
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