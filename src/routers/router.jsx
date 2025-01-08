import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews"
import AddReview from "../pages/private-pages/AddReview";
import MyReviews from "../pages/private-pages/MyReviews";
import GameWatchList from "../pages/private-pages/GameWatchList"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AuthLayout from "../pages/AuthLayout";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRouter from "../routers/PrivateRouter"
import ReviewDetails from "../pages/private-pages/ReviewDetails";
import UpdateReview from "../pages/private-pages/UpdateReview";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://chill-gamer-server-side.vercel.app/review'),
    },
    {
        path: "/add-review",
        element: (
            <PrivateRouter>
                <AddReview></AddReview>
            </PrivateRouter>
        ),
    },
    {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch('https://chill-gamer-server-side.vercel.app/review'),
    },
    {
        path: "/my-reviews",
        element: (
            <PrivateRouter>
                <MyReviews></MyReviews>
            </PrivateRouter>
        ),
    },
    {
        path: "/review/:id",
        element: (
            <PrivateRouter>
                <ReviewDetails></ReviewDetails>
            </PrivateRouter>
        ),
    },
    {
        path: "/updateReview/:id",
        element: (
            <PrivateRouter>
                <UpdateReview></UpdateReview>
            </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`https://chill-gamer-server-side.vercel.app/review/${params.id}`),
    },
    {
        path: "/game-watchList",
        element: (
            <PrivateRouter>
                <GameWatchList></GameWatchList>
            </PrivateRouter>
        ),
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
                path: "/auth/forgot-password",
                element: <ForgotPassword></ForgotPassword>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default Router;