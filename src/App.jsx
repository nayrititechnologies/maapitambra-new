import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Mandir from "./pages/Mandir";
import Pooja from "./pages/Pooja";
import VisheshPooja from "./pages/VisheshPooja";
import MandirDetails from "./pages/MandirDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/mandir" element={<Mandir />} />
        <Route path="/pooja" element={<Pooja />} />
        <Route path="/vishesh-pooja" element={<VisheshPooja />} />
        <Route path="/mandir/:templeName" element={<MandirDetails />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-cream">
              <div className="text-center">
                <h1 className="font-heading text-6xl text-maroon mb-4">404</h1>
                <p className="font-body text-maroon/70 text-xl">
                  Page Not Found
                </p>
              </div>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
