import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function FeaturedHotels() {
    const { data, loading, error } = useFetch(`${import.meta.env.VITE_BASE_API_URI}/api/hotel?featured=true&limit=5`);
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevHotel = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.hotels.length - 1 : prevIndex - 1
        );
    };

    const nextHotel = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.hotels.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToHotel = (hotelIndex) => {
        setCurrentIndex(hotelIndex);
    };

    const handleHotelClick = () => {
        const selectedHotel = data.hotels[currentIndex];
        if (selectedHotel) {
            navigate(`/hotel/${selectedHotel._id}`);
        }
    };

    return (
        <div className="p-8">
            {loading ? (
                "Loading..."
            ) : !error.success ? (
                <div>Error fetching data</div>
            ) : (
                <div className="bg-white rounded-3xl p-10">
                    <div className="flex justify-around mb-10">
                        <h1 className="text-6xl mr-10 ml-4">
                            Our top-rated and highly visited hotels
                        </h1>
                        <p className="mt-10">
                            Discover our handpicked selection of the year's
                            finest hotels, curated based on feedback from our
                            delighted visitors
                        </p>
                    </div>
                    <div className="h-[530px] w-full m-auto relative group">
                        {data && data.hotels && data.hotels.length > 0 && (
                            <div
                                style={{
                                    backgroundImage: `url(${data.hotels[currentIndex].photos[0]})`,
                                }}
                                className="w-full h-full rounded-2xl bg-center bg-cover duration-500 cursor-pointer"
                                onClick={handleHotelClick}
                            >
                                <div className="absolute inset-0 flex items-end justify-between p-6 bg-gradient-to-b from-transparent to-black">
                                    <div>
                                        <h2 className="text-white text-3xl font-bold">
                                            {data.hotels[currentIndex].name}
                                        </h2>
                                        <div className="flex items-center">
                                            <p className="text-white text-lg mr-2">
                                                Rating:
                                            </p>
                                            {Array.from({
                                                length: Math.floor(
                                                    data.hotels[currentIndex]
                                                        .rating
                                                ),
                                            }).map((_, index) => (
                                                <FaStar
                                                    key={index}
                                                    className="text-yellow-500"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Left Arrow */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
                            <BsChevronCompactLeft
                                onClick={prevHotel}
                                size={30}
                            />
                        </div>
                        {/* Right Arrow */}
                        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
                            <BsChevronCompactRight
                                onClick={nextHotel}
                                size={30}
                            />
                        </div>
                        <div className="flex top-4 justify-center py-2">
                            {data &&
                                data.hotels &&
                                data.hotels.length > 0 &&
                                data.hotels.map((hotel, hotelIndex) => (
                                    <div
                                        key={hotelIndex}
                                        onClick={() => goToHotel(hotelIndex)}
                                        className="text-2xl cursor-pointer"
                                    >
                                        <RxDotFilled />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeaturedHotels;
