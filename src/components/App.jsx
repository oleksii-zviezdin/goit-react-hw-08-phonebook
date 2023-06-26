import { Loader, Layout, PrivateRoute, RestrictedRoute } from './index';
import { Container } from './App.styled';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from 'redux/auth/operation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/" component={<ContactPage />} />
              }
            />
          </Route>
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </Container>
    </Suspense>
  );
};
