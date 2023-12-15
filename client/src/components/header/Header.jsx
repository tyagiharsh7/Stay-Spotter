import React from "react";

const Header = () => {
    return (
        <div className="p-4">
            <div
                className="bg-cover rounded-3xl bg-center relative"
                style={{
                    height: "40rem",
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1605538032404-d7f061325b90?q=80&w=2582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            >
                <div className="absolute rounded-3xl top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="relative z-10 h-full text-white p-8">
                    <h1 className="text-8xl px-5 mb-4 text-center">
                        Secure Your Dream Vacation <br/> with a Reservation
                    </h1>
                    <div className="flex space-between space-x-60 absolute bottom-5">
                        <p className="mb-4">
                            We believe in the power of the great outdoors. We
                            think that everyone deserves the chance to explore
                            the world and to find their very own adventure.
                        </p>
                        <div className="flex space-x-4 mb-4">
                            <span>121+ Capital Raised</span>
                            <span>80+ Happy Customers</span>
                            <span>1K+ Property Options</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
