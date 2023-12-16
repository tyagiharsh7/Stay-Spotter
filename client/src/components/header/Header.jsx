import React from "react";
import HotelSearch from "../hotelSearch/HotelSearch";

const Header = () => {
    return (
        <div className="p-8">
            <div
                className="bg-cover rounded-3xl bg-center relative"
                style={{
                    height: "44rem",
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1605538032404-d7f061325b90?q=80&w=2582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            >
                <div className="absolute rounded-3xl top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="relative z-10 h-full text-white p-8">
                    <h1 className="text-8xl px-5 mb-4 text-center">
                        Secure Your Dream Vacation <br /> with a Reservation
                    </h1>
                    <div className="pt-20 flex items-center justify-center">
                        <HotelSearch />
                    </div>
                    <div className="absolute bottom-5 w-full pr-10">
                        <div className="flex justify-between mb-4">
                            <div className="pr-96">
                                <p>
                                    We believe in the power of the great
                                    outdoors. We think that everyone deserves
                                    the chance to explore the world and to find
                                    their very own adventure.
                                </p>
                            </div>
                            <div className="flex space-x-4 pr-5">
                                <span>121+ Countries</span>
                                <span>80k+ Happy Customers</span>
                                <span>10K+ Property Options</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
