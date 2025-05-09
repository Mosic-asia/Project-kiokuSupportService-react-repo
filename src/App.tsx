import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Home from './routes/Home';
import Header from './components/Header';
// import Profile from './routes/Profile';
import Menu from './routes/Menu';
// import Login from './routes/Login';
// import CreateAccount from './routes/CreateAccount';
// import ResetPassword from './routes/ResetPassword';

const AppWrapper = styled.div`
  max-width: 430px;
  margin: 0 auto;
  padding: env(safe-area-inset-top) 16px env(safe-area-inset-bottom);
  min-height: 100vh;
  background-color: #fff;
`;

// Header를 공통 layout으로 감쌈
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      // {
      //   path: 'profile',
      //   element: <Profile />,
      // },
      {
        path: 'menu',
        element: <Menu />,
      },
    ],
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/create-account',
  //   element: <CreateAccount />,
  // },
  // {
  //   path: '/reset-password',
  //   element: <ResetPassword />,
  // },
]);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <RouterProvider router={router} />
      </AppWrapper>
    </>
  );
};

export default App;