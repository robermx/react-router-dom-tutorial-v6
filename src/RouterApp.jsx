import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './ErrorPage';
import { Contact } from './routes/contact';
import { Root } from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);

export const RouterApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
