import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@/pages/About';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  // { path: '/home', element: <Home /> },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};
export default Routes;
