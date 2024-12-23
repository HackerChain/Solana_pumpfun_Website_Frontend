import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { MainSettingContent } from "./components/Settings/MainSettingContent";
import { BuySettingContent } from "./components/Settings/BuySettingContent";
import { SellSettingContent } from "./components/Settings/SellSettingContent";
import { AuditSettingContent } from "./components/Settings/AuditSettingContent";
import { AccountSettingContent } from "./components/Settings/AccountSettingContent";

const LOADINGTIME = 20;

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
      path: "/dashboard",
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
      path: "/settings/*",
      element: <Settings />,
      children: [
        {
          path: "main",
          element: <MainSettingContent />,
        },
        {
          path: "buy",
          element: <BuySettingContent />,
        },
        {
          path: "sell",
          element: <SellSettingContent />,
        },
        {
          path: "audit",
          element: <AuditSettingContent />,
        },
        {
          path: "account",
          element: <AccountSettingContent />,
        },
        {
          path: "",
          element: <Navigate to="main" replace />,
        },
      ],
    },
    {
      path: "/assets/:ca",
      element: <TxHistory />,
    },
  ];

  return (
    <div className="flex flex-col relative select-none w-full pb-6 px-[30px] bg-bg_black text-[#acb5bb]">
      <ReduxProvider store={store}>
        {isAuthenticated && <Header />}
        <div
          className={`w-full h-full ${
            isAuthenticated
              ? "rounded-2xl border-[1px] border-bg_gray_light overflow-y-auto"
              : ""
          }`}
        >
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
              >
                {route.children?.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            ))}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </ReduxProvider>
    </div>
  );
}

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
