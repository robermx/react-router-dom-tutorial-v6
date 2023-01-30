import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './ErrorPage';
import { Contact } from './routes/contact';
import {
  loader as rootLoader,
  action as rootAction,
  Root,
} from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
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
