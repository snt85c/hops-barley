import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Search } from "./Pages/Search";
import ErrorPage from "./Pages/ErrorPage";
import { Favourites } from "./Pages/Favourites";
import LoadingOverlay from "./Components/LoadingOverlay";

export default function App() {
  return (
    <Router>
      <LoadingOverlay />
      <Navbar />
      <Routes>
        <Route path="" element={<Search />} errorElement={<ErrorPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
