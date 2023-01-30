import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './ErrorPage';
import { Contact, loader as contactLoader } from './routes/contact';
import { EditContact, action as editAction } from './routes/Edit';
import { action as destroyAction } from './routes/destroy';
import {
  loader as rootLoader,
  action as rootAction,
  Root,
} from './routes/Root';
import { Index } from './routes/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
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
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
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
