import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Contact from '@pages/Contact';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};
export default Routes;
