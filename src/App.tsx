import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Search } from "./Pages/Search";
import ErrorPage from "./Pages/ErrorPage";
import { Favourites } from "./Pages/Favourites";
import { useEffect, useState } from "react";
import LoadingOverlay from "./Components/LoadingOverlay";

export default function App() {
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
    <Router>
      {isLoading && <LoadingOverlay />}
      <Navbar />
      <Routes>
        <Route path="" element={<Search />} errorElement={<ErrorPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
