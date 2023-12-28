import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import EmailSubscription from "../../components/emailSubscription/EmailSubscription";
import Footer from "../../components/footer/Footer";
import { FaHeart } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useRecoilValue } from "recoil";
import { authState } from "../../store/auth/atoms/authState";
import ReserveHotel from "../../components/reserveHotel/ReserveHotel";

const HotelPage = () => {
    const location = useLocation();
    const hotelId = location.pathname.split("/")[2];
    const [randowReviewCount, setRandomReviewCount] = useState(
        Math.floor(Math.random() * (200 - 50) + 50)
    );
    const [isFavorited, setIsFavorited] = useState(false);
    const { data, loading, error } = useFetch(
        `http://localhost:8800/api/hotel/find/${hotelId}`
    );
    const { user } = useRecoilValue(authState);
    const navigate = useNavigate();
    const [openReservationComponent, setOpenReservationComponent] =
        useState(false);

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

    const bookHotel = () => {
        if (user) {
            setOpenReservationComponent(true);
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar includeSearch={true} />
            {loading ? (
                "Loading"
            ) : data && data.hotel ? (
                <div className="bg-gray-100 p-4">
                    <div className="bg-white rounded-3xl shadow-md p-6">
                        <>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-2xl font-semibold mb-2">
                                        {data.hotel?.name}
                                    </h1>
                                    <div className="flex items-center mb-4">
                                        {Array.from(
                                            {
                                                length: Math.floor(
                                                    data.hotel?.rating
                                                ),
                                            },
                                            (_, index) => (
                                                <span
                                                    key={index}
                                                    className="text-yellow-500 mr-2"
                                                >
                                                    ⭐
                                                </span>
                                            )
                                        )}
                                        <span className="text-gray-600">
                                            {data.hotel?.rating} (
                                            {randowReviewCount} reviews)
                                        </span>
                                    </div>
                                </div>
                                <div className="px-4 flex space-x-4">
                                    <button
                                        onClick={shareHotel}
                                        className="flex flex-row border-2 border-gray-500 text-black px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white focus:outline-none max-h-12"
                                    >
                                        <FaShareAlt
                                            size={20}
                                            className="mr-1 mt-1"
                                        />
                                        <span className="mt-0.5">Share</span>
                                    </button>
                                    <button
                                        className={`text-red-500 flex flex-row px-4 py-1.5 border-2 border-red-500 rounded-full w-24 max-h-12 ${
                                            isFavorited
                                                ? "opacity-100"
                                                : "opacity-50"
                                        }`}
                                        onClick={toggleFavorite}
                                    >
                                        <FaHeart
                                            size={20}
                                            className="mt-1.5 mr-1"
                                        />
                                        <span className="mt-1">Save</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 grid-rows-4 gap-4 max-h-96">
                                <div className="col-span-4 row-span-4 overflow-hidden">
                                    <img
                                        src={data.hotel?.photos[0]}
                                        alt={data.hotel?.name || "Hotel Photo"}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="col-span-4 row-span-2 col-start-5 overflow-hidden">
                                    <img
                                        src={
                                            data.hotel?.photos[1] ||
                                            data.hotel?.photos[0]
                                        }
                                        alt={data.hotel?.name || "Hotel Photo"}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="col-span-2 row-span-2 col-start-5 row-start-3 overflow-hidden">
                                    <img
                                        src={
                                            data.hotel?.photos[2] ||
                                            data.hotel?.photos[0]
                                        }
                                        alt={data.hotel?.name || "Hotel Photo"}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="col-span-2 row-span-2 col-start-7 row-start-3 overflow-hidden">
                                    <img
                                        src={
                                            data.hotel?.photos[3] ||
                                            data.hotel?.photos[0]
                                        }
                                        alt={data.hotel?.name || "Hotel Photo"}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mt-10">
                                <div className="w-3/5">
                                    <p className="text-gray-700 mb-4">
                                        {data.hotel?.description}
                                        {data.hotel?.description}
                                        {data.hotet?.description}
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        {data.hotel?.address}
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        {data.hotel?.type}
                                    </p>
                                    <p className="text-gray-600 mb-2">
                                        Price: ${data.hotel?.cheapestPrice} per
                                        night
                                    </p>
                                </div>
                                <div className="px-1">
                                    <div className="p-4 w-96 bg-white rounded-lg border-gray-100 border-2 shadow-lg">
                                        <h2 className="text-xl ">
                                            Reviews and Ratings
                                        </h2>
                                        <div className="flex items-center my-3">
                                            <span className="text-5xl mr-4">
                                                {data.hotel?.rating}
                                            </span>
                                            <div className="flex flex-col">
                                                <div className="flex">
                                                    {Array.from(
                                                        {
                                                            length: Math.floor(
                                                                data.hotel
                                                                    ?.rating
                                                            ),
                                                        },
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
                                                <div className="text-gray-600">
                                                    ({randowReviewCount}{" "}
                                                    reviews)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-3 space-y-1">
                                            <div className="flex justify-between">
                                                <p>Comfortable</p>{" "}
                                                <span>4.7</span>
                                            </div>
                                            <div className="relative h-3 bg-gray-300 rounded-full overflow-hidden">
                                                <div
                                                    style={{ width: "94%" }}
                                                    className="absolute h-full bg-green-500"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="my-3 space-y-1">
                                            <div className="flex justify-between">
                                                <p>Hospitality</p>{" "}
                                                <span>4.5</span>
                                            </div>
                                            <div className="relative h-3 bg-gray-300 rounded-full overflow-hidden">
                                                <div
                                                    style={{ width: "90%" }}
                                                    className="absolute h-full bg-green-500"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="my-3 space-y-1">
                                            <div className="flex justify-between">
                                                <p>Food and Beverages</p>{" "}
                                                <span>4</span>
                                            </div>
                                            <div className="relative h-3 bg-gray-300 rounded-full overflow-hidden">
                                                <div
                                                    style={{ width: "80%" }}
                                                    className="absolute h-full bg-green-500"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="mb-2 mt-7">
                                            <button
                                                type="submit"
                                                className="w-full py-2 px-4 border-2 border-green-500 text-green-500 rounded-full shadow-sm text-lg font-medium hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                onClick={bookHotel}
                                            >
                                                Book
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                        </>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center align-middle">
                    Error loading hotel. Please try again.
                </div>
            )}
            <div className="flex-1"></div>{" "}
            {/* Empty space to push EmailSubscription and Footer to the bottom */}
            <EmailSubscription />
            <Footer />
            {openReservationComponent && (
                <ReserveHotel
                    setOpen={setOpenReservationComponent}
                    hotelId={hotelId}
                />
            )}
        </div>
    );
};

export default HotelPage;
