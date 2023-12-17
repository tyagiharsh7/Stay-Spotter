import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";

const HotelListItem = ({
    image,
    name,
    address,
    price,
    rating,
    reviews,
    description,
    type,
}) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="flex justify-center p-8 pt-3">
            <div className="flex bg-white rounded-3xl shadow-md overflow-hidden p-4 min-h-fit min-w-full">
                <img
                    src={image}
                    alt={name}
                    className=" w-2/6 object-cover rounded-xl"
                />
                <div className="flex flex-col justify-between w-full">
                    <div className="flex-grow p-2 px-4">
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <span className="text-yellow-400 mr-2">
                                    {Array(Math.floor(rating)).fill("⭐")}
                                </span>
                                <span className="font-semibold">
                                    {rating.toFixed(1)}
                                </span>
                                <span className="ml-2 text-sm text-gray-500">
                                    ({reviews} reviews)
                                </span>
                            </div>
                            <div>
                                <button
                                    className={`text-red-500 pr-4 pt-4 ${
                                        isFavorited
                                            ? "opacity-100"
                                            : "opacity-50"
                                    }`}
                                    onClick={toggleFavorite}
                                >
                                    <FaHeart size={25} />
                                </button>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{address}</p>
                        <p className="text-sm font-semibold mb-2">{type}</p>
                        <p className="text-sm mb-2 w-2/4">{description}</p>
                    </div>
                    <div className="flex justify-between items-end p-2 px-4">
                        <p className="font-semibold text-3xl">{price}/ Night</p>
                        <button className=" text-black border-2 border-black px-4 py-2 rounded-full hover:bg-gray-700 hover:text-white">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

HotelListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default HotelListItem;
