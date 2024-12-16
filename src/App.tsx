import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { isMobile } from "react-device-detect";
import "./App.css";
import { useState, useEffect } from "react";
import Home from "./page/Home";
import Loading from "./components/Loading/Loading";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
const LOADINGTIME = 2000;
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
        <div className="App w-[750px] flex flex-col relative select-none">
          <ReduxProvider store={store}>
            <div className="overflow-y-auto h-full">
              <Routes>
                <Route index element={<Home />} />
              </Routes>
            </div>
          </ReduxProvider>
        </div>
      )}
    </Router>
  );
}

export default App;
