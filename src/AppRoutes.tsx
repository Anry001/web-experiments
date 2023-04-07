import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <h1>hello world</h1> },
]);

const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};
export default AppRoutes;
