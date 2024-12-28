declare namespace IRouteType {
    interface IMeta {
        title: string;
    }

    interface IRoute {
        name: string;
        path: string;
        element: React.LazyExoticComponent<() => React.JSX.Element>;
        meta: IMeta;
        children?: IRoute[];
    }
}