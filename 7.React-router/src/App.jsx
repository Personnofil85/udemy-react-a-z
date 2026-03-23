import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
import Error404 from "./components/Error404";
import Navbar from "./components/Navbar";
import Analytics from "./pages/analytics/Analytics";
import Development from "./pages/analytics/Development.jsx";
import CyberSecurity from "./pages/analytics/CyberSecurity.jsx";
import UIUX from "./pages/analytics/UIUX.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />}>
            <Route path="/analytics/development" element={<Development />} />
            <Route path="/analytics/cybersecurity" element={<CyberSecurity />} />
            <Route path="/analytics/uiux" element={<UIUX />} />
          </Route>
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
