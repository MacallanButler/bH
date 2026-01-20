import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import DiveSites from "@/pages/DiveSites";
import DiveSiteDetails from "@/pages/DiveSiteDetails";
import Booking from "@/pages/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dive-sites" element={<DiveSites />} />
          <Route path="dive-sites/:id" element={<DiveSiteDetails />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
