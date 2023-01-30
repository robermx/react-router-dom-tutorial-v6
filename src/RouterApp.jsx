import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './ErrorPage';
import { Contact, loader as contactLoader } from './routes/contact';
import { EditContact, action as editAction } from './routes/Edit';
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
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
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
