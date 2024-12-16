import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

const LOADINGTIME = 200;

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, LOADINGTIME);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col relative select-none w-full mb-6 mx-auto container min-w-[880px]">
          <ReduxProvider store={store}>
            <Header />
            <div className="overflow-y-auto h-full">
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/txns" element={<Transactions />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/signin" element={<Signin />} />
              </Routes>
            </div>
          </ReduxProvider>
        </div>
      )}
    </Router>
  );
}

export default App;
