import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Layout Component
import Layout from "./Layout";

// Shared Components
import VideoCarousel from "./components/VideoCarousel/VideoCarousel";
import DestinationsCarousel from "./components/DestinationsCarousel/DestinationsCarousel";
import TravelThemes from "./components/TravelThemes/TravelThemes";
import HiddenGems from "./components/HiddenGems/HiddenGems";
import TravelTabs from "./components/TravelTabs/TravelTabs";
import Login from "./components/Navbar/Login";
import GoogleAuth from "./components/LoginPopup/GoogleAuth";
import FacebookAuth from "./components/LoginPopup/FacebookAuth";
import Callback from "./components/LoginPopup/auth/Callback";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NorthIndia from "./pages/regions/NorthIndia";
import WestIndia from "./pages/regions/WestIndia";
import SouthIndia from "./pages/regions/SouthIndia";
import EastIndia from "./pages/regions/EastIndia";
import Contact from "./pages/About/Contact";
import Blogs from "./pages/About/Blogs";
import Gallery from "./pages/About/Gallery";
import Attractions from "./pages/Attractions";
import Experiences from "./pages/Experiences";
import Festival from "./pages/Festival";
import FAQs from "./pages/FAQs";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Signout from "./components/LoginPopup/Signout";
import Update from "./pages/Update";
import Password from "./pages/Password";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
// import NotFound from "./pages/NotFound";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Homepage with special components */}
      <Route
        path="/"
        element={
          <Layout>
            <VideoCarousel />
            <Home />
            <DestinationsCarousel />
            <TravelThemes />
            <HiddenGems />
            <TravelTabs />
            <About />
          </Layout>
        }
      />

      {<Route path="/auth/callback" element={<Callback />} />}

      {/* About Page */}
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route path="/Password" element={<Password />} />

      <Route path="/AdminLogin" element={<AdminLogin />} />

      <Route path="/AdminPanel" element={<AdminPanel />} />

      {/* Regional Pages */}
      <Route
        path="/south-india"
        element={
          <Layout>
            <SouthIndia />
          </Layout>
        }
      />
      <Route
        path="/north-india"
        element={
          <Layout>
            <NorthIndia />
          </Layout>
        }
      />
      <Route
        path="/west-india"
        element={
          <Layout>
            <WestIndia />
          </Layout>
        }
      />
      <Route
        path="/Login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/east-india"
        element={
          <Layout>
            <EastIndia />
          </Layout>
        }
      />
      {/* Contact Page */}
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      {/* Blogs Page */}
      <Route
        path="/blogs"
        element={
          <Layout>
            <Blogs />
          </Layout>
        }
      />
      {/* Gallery Page */}
      <Route
        path="/gallery"
        element={
          <Layout>
            <Gallery />
          </Layout>
        }
      />

      <Route path="/Signout" element={<Signout />} />

      <Route path="/Update" element={<Update />} />

      <Route
        path="/"
        element={
          <Layout>
            <VideoCarousel />
            <DestinationsCarousel />
            <TravelThemes />
            <HiddenGems />
            <TravelTabs />
            <Home />
          </Layout>
        }
      />

      {/* Other Pages */}
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/attractions"
        element={
          <Layout>
            <Attractions />
          </Layout>
        }
      />
      <Route
        path="/experiences"
        element={
          <Layout>
            <Experiences />
          </Layout>
        }
      />
      <Route
        path="/festivals"
        element={
          <Layout>
            <Festival />
          </Layout>
        }
      />
      <Route
        path="/faqs"
        element={
          <Layout>
            <FAQs />
          </Layout>
        }
      />
      <Route
        path="/terms"
        element={
          <Layout>
            <TermsOfUse />
          </Layout>
        }
      />
      <Route
        path="/privacy"
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />

      {/* 404 Page
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />*/}
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
};

export default App;
