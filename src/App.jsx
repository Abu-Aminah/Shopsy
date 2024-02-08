import React, { useState } from "react";
import Navbar from "./Components/NAvbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./Components/TopProducts/TopProducts";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/Subscription/Subscribe";
import Testimonials from "./Components/Testimonial/Testimonials";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import Cart from "./Components/Cart";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Cart />
      <Popup orderPopup={orderPopup}
       setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
