import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  hasAccess: boolean;
};

export function PrivateRouter({ children , hasAccess}:PrivateRouteProps): JSX.Element {

  return hasAccess ? children : <Navigate to={'/login'} />;
}
