import './App.css';

import Header from './components/Header/Header';
import Banner from "./components/Banner/Banner"
import Services from './components/Services/Services';
import Features from "./components/Features/Features"
import Pricing from "./components/Pricing/Pricing"
import Testimonials from "./components/Testimonials/Testimonials"
import Article from './components/Articles/Articles';
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className='overflow-hidden'>
    <Header />
    <Banner />
    <Services />
    <Features />
    <Pricing />
    <Testimonials />
    <Article />
    <Footer />
    </div>
  );
}

export default App;
