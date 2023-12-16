import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white p-8 pt-4">
                <nav className="mt-8">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Popular Destinations
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Featured Hotels
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Travel Guides
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Customer Reviews
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white"
                            >
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
            <div className="border-t-4 border-green-500 w-full"></div>
        </>
    );
};

export default Footer;
