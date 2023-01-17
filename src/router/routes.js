import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../pages/About/About";
import Chat from "../pages/Chat/Chat";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Message from "../pages/Message/Message";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chat',
                element: <Chat></Chat>
            },
            {
                path: '/chat/hello',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            }
        ]
    }
])
export default routes;