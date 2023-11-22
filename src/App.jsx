import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
