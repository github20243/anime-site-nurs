import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import NotFoundPage from "../pages/NotFound/NotFound";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/homePage/HomePage";
import AnimePage from "../pages/animepage/AnimePage";
import EpisodesPage from "../pages/episodPage/EpisodePage";
import EpisodePage from "../pages/episodPage/EpisodePage";
import UserRoute from "./UserRoute";
import Spinner from "../components/spinner/Spinner";
import SignIn from "../pages/RegistrationPage/SingIn";
import SignUp from "../pages/RegistrationPage/SingUp";
import { useAppSelector } from "../hooks/customHook";

const USER_ROUTES = [
  { path: "/", element: <HomePage /> },
  { path:"/anime/:id", element: <AnimePage /> },
  { path: "/anime/:id/episodes", element: <EpisodesPage /> },
  { path: "/anime/:id/episode/:episodeIndex", element: <EpisodePage /> },
  { path: "/user/*", element: <UserRoute /> },
];

export const Routing = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    return isAuthenticated ? (
      children
    ) : (
      <Navigate to={`/signup?redirect=${encodeURIComponent(location.pathname)}`} replace />
    );
  };

  const AuthRoute = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get("redirect") || "/";

    if (isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Spinner isLoading={true} />}>
          <Layout>
            <Outlet />
          </Layout>
        </Suspense>
      ),
      children: USER_ROUTES.map((route) => ({
        ...route,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
      })),
    },
    {
      path: "/signup",
      element: (
        <AuthRoute>
          <SignUp />
        </AuthRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AuthRoute>
          <SignIn />
        </AuthRoute>
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
