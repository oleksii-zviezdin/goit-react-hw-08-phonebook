import {
  // ContactForm,
  ContactList,
  // Notification,
  Filter,
  // UserMenu,
  // RegisterForm,
  // LoginForm,
  Loader,
  Layout,
  PrivateRoute,
  RestrictedRoute,
} from './index';
import { Container, ContnactsTitle, Error } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectItems,
} from 'redux/contacts/selector';
import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
// import { selectIsLoggedIn } from 'redux/auth/selector';
import { refreshUser } from 'redux/auth/operation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  console.log(
    setAuthHeader(`dfsdkmasdmdgsdlmdKSmkfKDlLSFOSKksosk214drtb45vk349vk3`)
  );

  const items = useSelector(selectItems);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Suspense fallback={null}>
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
                <PrivateRoute redirectTo="/login" component={<ContactPage />} />
              }
            />
          </Route>
        </Routes>

        {/* <UserMenu /> */}
        {/* <FormTitle>Phonebook</FormTitle> */}
        {/* {isLoggedIn && <ContactForm />} */}
        {items?.length !== 0 && !isError && <Filter />}
        {/* {!isLoggedIn && <Notification message={'Please register or login'} />}
      {items?.length === 0 && isLoggedIn && (
        <Notification
          message={'This is where your added contacts will be displayed'}
        />
      )} */}
        {isError && <Error>{isError}</Error>}
        {isLoading && <Loader />}
        {/* {!isLoggedIn && <RegisterForm />}
      {<LoginForm />} */}
        {items?.length !== 0 && !isError && (
          <>
            <ContnactsTitle>Contacts</ContnactsTitle>
            <ContactList contacts={items} />
          </>
        )}
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </Container>
    </Suspense>
  );
};
