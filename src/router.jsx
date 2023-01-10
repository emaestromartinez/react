import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error/error-page";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./pages/root/root-page";

import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./pages/contact/contact";

import EditContact, {
  action as editAction,
} from "./components/edit-contact/edit-contact";
import { action as destroyAction } from "./components/destroy-contact/destroy-contact";
import ContactPlaceholder from "./components/contact-placeholder/contact-placeholder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <ContactPlaceholder /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
          },
        ],
      },
    ],
  },
]);
