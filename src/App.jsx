import GlobalStyle from "./GlobalStyles.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout.jsx";

// Components (for homepage sections)
import HeroSection from "./components/HeroSection";
import HubLocator from "./components/HubLocator.jsx";
import AboutUs from "./components/AboutUs.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import UserRolesSection from "./components/UserRolesSection.jsx";
import Insights from "./components/Insights.jsx";
import TestimonialsSlider from "./components/TestimonialsSlider.jsx";
import NewsArticles from "./components/NewsArticles.jsx";

// Pages
import ContactPage from "./pages/ContactPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import OurServicesPage from "./pages/OurServicesPage.jsx";
import LogisticsPage from "./pages/LogisticsPage.jsx";
import WalletPage from "./pages/WalletPage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import NewsBlogPage from "./pages/NewsBlogPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import Shop from "./pages/Shop.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
// import CareerPage from "./pages/CareerPage.jsx";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        {/* Wrap all routes with Layout */}
        <Route element={<Layout />}>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HubLocator />
                <AboutUs />
                <OurServicesPage />
                <FeaturesSection />
                <UserRolesSection />
                <Insights />
                <TestimonialsSlider />
                <NewsArticles />
              </>
            }
          />

          {/* Static Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<OurServicesPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/news" element={<NewsBlogPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          {/* <Route path="/careers" element={<CareerPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
