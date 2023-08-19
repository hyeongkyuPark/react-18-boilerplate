import DefaultLayout from 'components/templates/DefaultLayout';
import { HomePage } from 'pages';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PAGE_URL } from 'utils/urls';

const router = createBrowserRouter([
  {
    path: PAGE_URL.HOME,
    children: [
      {
        path: PAGE_URL.HOME,
        element: <HomePage />,
      },
      {
        path: PAGE_URL.TEST,
        element: <HomePage />,
      },
    ],
  },
  {
    path: PAGE_URL.HOME,
    element: <DefaultLayout />,
    children: [
      {
        path: PAGE_URL.TEST2,
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
