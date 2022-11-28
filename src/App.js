import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { ThemifyContext } from "./context/themifyContext";

import Navbar from "./components/Navbar/Navbar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {

  const { theme } = useContext(ThemifyContext);

  const currentUser = true;

  const Layout = () => {
    return (
      <section className={`theme-${theme ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
        </div>
      </section>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    };

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
};

export default App;
