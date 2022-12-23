import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from '@mui/material/Container';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Client from './pages/Client'
import Dashboard from './pages/Admin/Dashboard'
import Add from './pages/Admin/Add'
import Suppliers from './pages/Admin/Suppliers'
import Details from './pages/Admin/Details'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
  },
  {
    path: "admin",
    element: <Dashboard />,
    children: [
      {
        path: "add",
        element: <Add />,
      }, 
      {
        path: "suppliers",
        element: <Suppliers/>,
      },
      {
        path: "suppliers/:supId",
        element: <Details/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container maxWidth="lg">
    <RouterProvider router={router} />
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
