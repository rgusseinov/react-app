import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root, {
  loader as rootLoader,
  action as rootAction 
} from './routes/root';
import Contact, {
  loader as contactLoader,
} from "./routes/contact";
import EditContact, {
  action as editAction
} from './routes/edit';
import { action as destroyAction } from "./routes/destroy";
import Index from './routes';
import ErrorPage from './error-page';
import GithubAccounts, { loader as githubAccountsLoader} from './routes/github-accounts';
import GithubAccountView, { loader as viewLoader} from './routes/github-account-view';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "github-accounts",
        element: <GithubAccounts />,
        loader: githubAccountsLoader
      },
      {
        path: "github-accounts/:accountId/view",
        element: <GithubAccountView />,
        loader: viewLoader
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
