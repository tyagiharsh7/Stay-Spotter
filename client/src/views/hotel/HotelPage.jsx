import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import EmailSubscription from "../../components/emailSubscription/EmailSubscription";
import Footer from "../../components/footer/Footer";
import { FaHeart } from "react-icons/fa";

const HotelPage = () => {
    const location = useLocation();
    const [isFavorited, setIsFavorited] = useState(false);
    const shareHotel = () => {
        if (navigator.share) {
            navigator.share({
                title: "Sapa Jade Hill Resort",
                text: "Check out this amazing resort!",
                url: window.location.href,
            });
        }
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <>
            <Navbar includeSearch={true} initialData={location.state} />
            <div className="bg-gray-100 p-4">
                <div className="bg-white rounded-3xl shadow-md p-6">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold mb-2">
                                Sapa Jade Hill Resort
                            </h1>
                            <div className="flex items-center mb-4">
                                <span className="text-yellow-500 mr-2">
                                    ⭐⭐⭐⭐
                                </span>
                                <span className="text-gray-600">
                                    4.8 (120 reviews)
                                </span>
                            </div>
                        </div>
                        <div className="px-4 flex space-x-4">
                            <button
                                onClick={shareHotel}
                                className="flex flex-row border-2 border-gray-500 text-black px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white focus:outline-none max-h-12"
                            >
                                <FaShareAlt size={20} className="mr-1 mt-1" />
                                <span className="mt-0.5">Share</span>
                            </button>
                            <button
                                className={`text-red-500 flex flex-row px-4 py-1.5 border-2 border-red-500 rounded-full w-24 max-h-12 ${
                                    isFavorited ? "opacity-100" : "opacity-50"
                                }`}
                                onClick={toggleFavorite}
                            >
                                <FaHeart size={20} className="mt-1.5 mr-1" />
                                <span className="mt-1">Save</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-8 grid-rows-4 gap-4 max-h-96">
                        <div className="col-span-4 row-span-4 overflow-hidden">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1"
                                alt="Tropical Resort"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="col-span-4 row-span-2 col-start-5 overflow-hidden">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1"
                                alt="Tropical Resort"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="col-span-2 row-span-2 col-start-5 row-start-3 overflow-hidden">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1"
                                alt="Tropical Resort"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="col-span-2 row-span-2 col-start-7 row-start-3 overflow-hidden">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1"
                                alt="Tropical Resort"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between mt-10">
                        <div className="w-3/5">
                            <p className="text-gray-700 mb-4">
                                Overlooking the greenery of the surrounding
                                mountains, Sapa Jade Hill Resort is located in
                                Sa Pa, Vietnam. Experience the epitome of
                                hospitality at our resort. Book your stay with
                                us and create lasting memories in the heart of
                                nature. Overlooking hence the epitome of
                                hospitality at our resort. Book your stay with
                                us and create lasting memories in the heart of
                                nature.
                                Overlooking the greenery of the surrounding
                                mountains, Sapa Jade Hill Resort is located in
                                Sa Pa, Vietnam. Book your stay with
                                us and create lasting memories in the heart of
                                nature.
                            </p>
                            <p className="text-gray-600 mb-2">
                                Address: Connought Place, Delhi
                            </p>
                            <p className="text-gray-600 mb-2">Type: Villa</p>
                            <p className="text-gray-600 mb-2">
                                Price: $100 per night
                            </p>
                        </div>
                        <div className="px-1">
                            <div className="p-4 w-96 bg-white rounded-lg border-gray-100 border-2 shadow-lg">
                                <h2 className="text-xl ">
                                    Reviews and Ratings
                                </h2>
                                <div className="flex items-center my-3">
                                    <span className="text-5xl mr-4">
                                        4.8
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex">
                                        {Array.from(
                                            { length: 4.5 },
                                            (_, index) => (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="#FFD700"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                    key={`${index}`}
                                                >
                                                    <path d="M9 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8L5 14l-6-4.8h7.6z"></path>
                                                </svg>
                                            )
                                        )}
                                        </div>
                                        <div className="ml-auto text-gray-600">
                                            Based on 120 reviewers
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3 space-y-1">
                                    <div className="flex justify-between"><p>Comfortable</p> <span>4.7</span></div>
                                    <div className="relative h-3 bg-gray-300 rounded-full overflow-hidden">
                                        <div
                                            style={{ width: "94%" }}
                                            className="absolute h-full bg-green-500"
                                        ></div>
                                    </div>
                                </div>
                                <div className="my-3 space-y-1">
                                    <div className="flex justify-between"><p>Hospitality</p> <span>4.5</span></div>
                                    <div className="relative h-3 bg-gray-300 rounded-full overflow-hidden">
                                        <div
                                            style={{ width: "90%" }}
                                            className="absolute h-full bg-green-500"
                                        ></div>
                                    </div>
                                </div>
                                <div className="my-3 space-y-1">
                                    <div className="flex justify-between"><p>Food and Beverages</p> <span>4</span></div>
                                    <div className="relative h-3 bg-gray-300 rounded-full overflow-hidden">
                                        <div
                                            style={{ width: "80%" }}
                                            className="absolute h-full bg-green-500"
                                        ></div>
                                    </div>
                                </div>
                                <div className="mb-2 mt-7">
                                    <button type="submit" className="w-full py-2 px-4 border-2 border-green-500 text-green-500 rounded-full shadow-sm text-lg font-medium text-white hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EmailSubscription />
            <Footer />
        </>
    );
};

export default HotelPage;
