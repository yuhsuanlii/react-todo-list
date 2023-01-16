import React from "react";
import ReactDOM from "react-dom";
import HomePage from './components/HomePage';
import ListPage from './components/ListPage';
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "list",
        element: <ListPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);