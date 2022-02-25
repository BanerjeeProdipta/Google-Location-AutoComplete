import { useRoutes } from 'react-router-dom';
import Location from '../pages/Location';

function Routes() {
  const route = {
    path: '/',
    element: <Location />,
  };

  const notFound = {
    path: '*',
    element: <div>Not Found</div>,
  };

  const routes = useRoutes([route, notFound]);

  return routes;
}

export default Routes;
