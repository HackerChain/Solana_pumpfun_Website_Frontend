import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { Transactions } from "./page/Transactions";
import { Assets } from "./page/Assets";
import { Settings } from "./page/Settings";
import { Dashboard } from "./page/Dashboard";
import { Signin } from "./page/Signin";
import Header from "./components/Header";
import { TxHistory } from "./page/TxHistroy";
import { AuthProvider, useAuth } from "./context/Auth";

const LOADINGTIME = 200;

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, LOADINGTIME);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const ProtectedRouteArray = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
    {
      path: "/assets",
      element: <Assets />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/assets/:ca",
      element: <TxHistory />,
    },
  ];

  return (
    <div className="flex flex-col relative select-none w-full mb-6 min-w-[880px]">
      <ReduxProvider store={store}>
        {isAuthenticated && <Header />}
        <div className="overflow-y-auto h-full">
          <Routes>
            <Route
              path="/signin"
              element={
                isAuthenticated ? <Navigate to="/" replace /> : <Signin />
              }
            />

            {ProtectedRouteArray.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<ProtectedRoute>{route.element}</ProtectedRoute>}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </ReduxProvider>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
