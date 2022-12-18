import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Layout } from 'components/Layout';
import { HomeView } from 'views/HomeView';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { useAuth } from 'hooks';

const ContactsView = lazy(() =>
  import('../views/ContactsView').then(module => ({
    ...module,
    default: module.ContactsView,
  }))
);

const RegisterView = lazy(() =>
  import('../views/RegisterView').then(module => ({
    ...module,
    default: module.RegisterView,
  }))
);

const LoginView = lazy(() =>
  import('../views/LoginView').then(module => ({
    ...module,
    default: module.LoginView,
  }))
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginView />}
                />
              }
            />
          </Route>
        </Routes>
      )}
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
