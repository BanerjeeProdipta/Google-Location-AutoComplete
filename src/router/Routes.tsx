import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LogIn from '../pages/Login';
import { isAuthenticated } from '../utils';

function Routes() {
  const redirectUrl = 'https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature&client_id=7beee992-5bc0-45c6-bf0e-28cf0aadd8f0&redirect_uri=http://localhost:3000/login';

  function OutletLayout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  const withoutLogin = {
    path: '/',
    element: !isAuthenticated ? <OutletLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: '/', element: <Navigate to={redirectUrl} replace /> },
      { path: '/login', element: <LogIn /> },
    ],
  };

  const withLogin = {
    path: '/app',
    element: isAuthenticated ? <OutletLayout /> : <Navigate to="/" />,
    children: [
      { path: '', element: <Navigate to="/app/dashboard" /> },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  };

  const notFound = {
    path: '*',
    element: <div>Not Found</div>,
  };

  const routes = useRoutes([withoutLogin, withLogin, notFound]);

  return (
    routes
  );
}

export default Routes;
