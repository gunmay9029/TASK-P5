
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewPost from "./pages/NewPost";

import "./App.css";

// Retain the existing DEV@Deakin home page.
function Home() {
  return (
    <main>
      <Hero />
      <PortfolioSection />
      <FeaturedArticles />
      <FeaturedTutorials />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
