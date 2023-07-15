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

function App() {
  return (
    <Router>
      <Outlet />
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} errorElement={<ErrorPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
