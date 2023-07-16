import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./Navbar";
import { Search } from "./Pages/Search";
import ErrorPage from "./Pages/ErrorPage";
import { Favourites } from "./Pages/Favourites";
import { useEffect, useState } from "react";
import LoadingOverlay from "./Components/LoadingOverlay";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let interval = setInterval(() => {
      document.body.style.overflow = "auto";
      setIsLoading(false);
    }, 1950);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <>
      {isLoading && <LoadingOverlay />}
      <Router>
        <Outlet />
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} errorElement={<ErrorPage />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
