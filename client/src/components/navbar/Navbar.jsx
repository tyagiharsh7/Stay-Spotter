import React from "react";
import StaySpotterLogo from "../../images/StaySpotterLogo.png";
import HotelSearch from "../hotelSearch/HotelSearch";
import { Link } from "react-router-dom";
import Login from "../../views/login/login";
import Home from "../../views/home/Home";
import { useRecoilValue } from "recoil";
import { authState } from "../../store/auth/atoms/authState";

const Navbar = ({ includeSearch }) => {
    const {user} = useRecoilValue(authState);

    return (
        <nav className={`bg-gray-100 p-2 ${includeSearch ? "border-b-2" : ""}`}>
            <div className={`flex items-center justify-between mx-10`}>
                <Link to={"/"} element={<Home />}>
                    <img
                        src={StaySpotterLogo}
                        alt="Logo"
                        className="h-20 w-20"
                    />
                </Link>
                {includeSearch ? (
                    <HotelSearch />
                ) : (
                    <ul className="flex space-x-4 text-xl">
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
                )}
                {user ? (
                    // If user is logged in, show the username
                    <span className="text-black px-4">Hi, {user.username}</span>
                ) : (
                    // If user is not logged in, show the Login button
                    <Link to={"/login"} element={<Login />}>
                        <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
