import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

function FeaturedHotels() {
    const hotels = [
        {
            name: "Hotel A",
            rating: 4,
            url: "https://cache.marriott.com/is/image/marriotts7prod/wi-dpswr-resort-surrounding-23218:Classic-Hor?output-quality=90&interpolation=progressive-bilinear",
        },
        {
            name: "Hotel B",
            rating: 5,
            url: "https://cache.marriott.com/marriottassets/marriott/DPSWR/dpswr-villa-king-bedroom-6427-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear",
        },
        {
            name: "Hotel C",
            rating: 3,
            url: "https://cache.marriott.com/content/dam/marriott-renditions/DPSSM/dpssm-courtyard-0094-hor-clsc.jpg?output-quality=90&interpolation=progressive-bilinear",
        },
        {
            name: "Hotel D",
            rating: 4.5,
            url: "https://cache.marriott.com/content/dam/marriott-renditions/DPSMV/dpsmv-exterior-5844-hor-clsc.jpg?output-quality=90&interpolation=progressive-bilinear",
        },
        {
            name: "Hotel E",
            rating: 5,
            url: "https://cache.marriott.com/is/image/marriotts7prod/mv-dpsvc-entrance-39164:Classic-Hor?output-quality=90&interpolation=progressive-bilinear",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevHotel = () => {
        const isFirstHotel = currentIndex === 0;
        const newIndex = isFirstHotel ? hotels.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextHotel = () => {
        const isLastHotel = currentIndex === hotels.length - 1;
        const newIndex = isLastHotel ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToHotel = (hotelIndex) => {
        setCurrentIndex(hotelIndex);
    };

    const handleHotelClick = () => {
        // Implement navigation to the hotel's product page
        const selectedHotel = hotels[currentIndex];
        console.log(`Navigating to ${selectedHotel.name}'s product page`);
    };

    return (
        <div className="p-8">
            <div className=" bg-white rounded-3xl p-10">
                <div className="flex justify-around mb-10">
                    <h1 className="text-6xl mr-10 ml-4">
                        Our top-rated and highly visited hotels
                    </h1>
                    <p className="mt-10">
                        Discover our handpicked selection of the year's finest
                        hotels, curated based on feedback from our delighted
                        visitors
                    </p>
                </div>
                <div className="h-[530px] w-full m-auto relative group">
                    <div
                        style={{
                            backgroundImage: `url(${hotels[currentIndex].url})`,
                        }}
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 cursor-pointer"
                        onClick={handleHotelClick}
                    >
                        <div className="absolute inset-0 flex items-end justify-between p-6 bg-gradient-to-b from-transparent to-black">
                            <div>
                                <h2 className="text-white text-3xl font-bold">
                                    {hotels[currentIndex].name}
                                </h2>
                                <div className="flex items-center">
                                    <p className="text-white text-lg mr-2">
                                        Rating:
                                    </p>
                                    {[
                                        ...Array(
                                            Math.floor(
                                                hotels[currentIndex].rating
                                            )
                                        ),
                                    ].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className="text-yellow-500"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevHotel} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextHotel} size={30} />
                    </div>
                    <div className="flex top-4 justify-center py-2">
                        {hotels.map((hotel, hotelIndex) => (
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
        </div>
    );
}

export default FeaturedHotels;
