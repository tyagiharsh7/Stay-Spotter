import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import FeaturedHotels from "../../components/featured/FeaturedHotels";
import HotelCategorySelector from "../../components/hotelCategory/HotelCategory";
import EmailSubscription from "../../components/emailSubscription/EmailSubscription";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <Header />
            <FeaturedHotels />
            <HotelCategorySelector />
            <div className="flex-1"></div> {/* Empty space to push EmailSubscription and Footer to the bottom */}
            <EmailSubscription />
            <Footer />
        </div>
    );
};

export default Home;
