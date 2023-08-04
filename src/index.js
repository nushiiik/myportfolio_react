import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {HomePage} from './pages/homePage/homePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AnotherPage} from "./pages/anotherPage/anotherPage";
import {ThemeProvider} from "./processes/contextTheme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/another-page",
        element: <AnotherPage />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
          < RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);
