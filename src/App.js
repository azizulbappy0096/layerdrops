import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Article from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";

function Home() {
  return (
    <>
    <Banner />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <Article />
    </>
  );
}




function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={   <Blogs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
