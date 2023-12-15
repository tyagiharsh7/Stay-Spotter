import React from "react";
import StaySpotterLogo from "/images/StaySpotterLogo.png";

const Navbar = () => {
    return (
        <nav className="bg-white p-4">
            <div className="flex items-center justify-between mx-10">
                <img src={StaySpotterLogo} alt="Logo" className="h-20 w-20" />
                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500 px-4"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500 px-4"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500 px-4"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-500 px-4"
                        >
                            More
                        </a>
                    </li>
                </ul>
                <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
