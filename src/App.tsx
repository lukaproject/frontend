import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LukaRoutes from './routes/routesConfig';

function App() {
  const RouteElement = (router: IRouteType.IRoute): React.ReactNode => {
    if (!router.element) return null;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <router.element />
      </Suspense>
    )
  };

  const RouteItem = (route: IRouteType.IRoute) => {
    return (
      <Route key={route.name} element={RouteElement(route)} path={route.path}>
        {RouteList(route.children ?? [])}
      </Route>
    )
  };

  const RouteList = (routes: IRouteType.IRoute[]) => {
    return routes.map((item) => RouteItem(item));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {RouteList(LukaRoutes)}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
