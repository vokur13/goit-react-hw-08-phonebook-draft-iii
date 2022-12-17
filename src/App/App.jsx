import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Layout } from 'components/Layout';
import { HomeView } from 'views/HomeView';
// import { ContactsView } from 'views/ContactsView';
// import { RegisterView } from 'views/RegisterView';
// import { LoginView } from 'views/LoginView';

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
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
