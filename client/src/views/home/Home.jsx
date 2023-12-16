import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import FeaturedHotels from "../../components/featured/featuredHotels";
import HotelCategorySelector from "../../components/hotelCategory/HotelCategory";
import EmailSubscription from "../../components/emailSubscription/EmailSubscription";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Header />
            <FeaturedHotels />
            <HotelCategorySelector />
            <EmailSubscription />
            <Footer />
        </div>
    );
};

export default Home;
