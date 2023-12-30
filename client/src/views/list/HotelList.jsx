import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import HotelListItem from "../../components/hotelListItem/HotelListItem";
import EmailSubscription from "../../components/emailSubscription/EmailSubscription";
import Footer from "../../components/footer/Footer";
import { BsFilterSquare } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchDataSelector } from "../../store/hotelSearch/selectors/searchDataSelector";
import bookingDateState from "../../store/hotelSearch/atoms/bookingDateState";
import { refetchSearchState } from "../../store/hotelSearch/atoms/refetchSearchState";
import getDatesInRange from "../../utils/getDatesInRange.js";

const List = () => {
    const [refetchSearch, setRefetchSearch] = useRecoilState(refetchSearchState);

    const searchData = useRecoilValue(searchDataSelector);

    const dates = useRecoilValue(bookingDateState);

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const { data, loading, error, reFetch } = useFetch(
        `${import.meta.env.VITE_BASE_API_URI}/hotel/availability`,
        {
            params: {
                city: searchData.location,
            },
        }
    );

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        if (data && data) {
            setHotels(data);
        }
    }, [data]);

    useEffect(() => {
        reFetch(`${import.meta.env.VITE_BASE_API_URI}/hotel/availability`, {
            params: {
                city: searchData.location,
            },
        });
        setRefetchSearch(false);
    }, [refetchSearch]);

    // const hotels = [
    //     {
    //         name: "Tower Street Villa",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "Connought Place, Delhi",
    //         price: "$100",
    //         rating: 4.5,
    //         reviews: 30,
    //         description:
    //             "Experience the epitome of hospitality at Tower Street Villa. Book your stay with us and create lasting memories in the heart of Delhi.",
    //         type: "Villa",
    //     },
    //     {
    //         name: "Sunset Beach Resort",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "Malibu, California",
    //         price: "$250",
    //         rating: 4.8,
    //         reviews: 120,
    //         description:
    //             "Unwind at our beachfront resort with breathtaking sunset views. Relax by the pool or take a stroll along the sandy shores.",
    //         type: "Resort",
    //     },
    //     {
    //         name: "Mountain View Lodge",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "Aspen, Colorado",
    //         price: "$180",
    //         rating: 4.2,
    //         reviews: 50,
    //         description:
    //             "Nestled in the Rockies, our lodge offers cozy rooms, stunning mountain vistas, and easy access to hiking trails.",
    //         type: "Lodge",
    //     },
    //     {
    //         name: "Urban Oasis Hotel",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "New York City, New York",
    //         price: "$300",
    //         rating: 4.7,
    //         reviews: 90,
    //         description:
    //             "Discover tranquility in the heart of the city. Our rooftop garden and spa provide an oasis amidst the urban hustle.",
    //         type: "Boutique Hotel",
    //     },
    //     {
    //         name: "Historic Manor Inn",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "Charleston, South Carolina",
    //         price: "$220",
    //         rating: 4.6,
    //         reviews: 70,
    //         description:
    //             "Step back in time at our beautifully restored manor. Enjoy Southern hospitality and explore nearby historic sites.",
    //         type: "Bed and Breakfast",
    //     },
    //     {
    //         name: "Seaside Retreat",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "Cape Cod, Massachusetts",
    //         price: "$190",
    //         rating: 4.4,
    //         reviews: 40,
    //         description:
    //             "Wake up to ocean views and salty breezes. Our cozy cottages offer the perfect coastal escape.",
    //         type: "Beachfront Cottage",
    //     },
    //     {
    //         name: "Alpine Chalet",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "Zermatt, Switzerland",
    //         price: "$400",
    //         rating: 4.9,
    //         reviews: 150,
    //         description:
    //             "Experience Swiss luxury in our charming chalet. Ski-in, ski-out access and stunning Matterhorn views await.",
    //         type: "Chalet",
    //     },
    //     {
    //         name: "Tropical Paradise Resort",
    //         image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404995121.jpg?k=26b957c5a2ba64cfe2119444b2e23074cc5b45ae5e915b03f55f24c9ad62da39&o=&hp=1",
    //         address: "Bali, Indonesia",
    //         price: "$280",
    //         rating: 4.5,
    //         reviews: 100,
    //         description:
    //             "Immerse yourself in lush gardens, infinity pools, and beachfront bliss. Indulge in island life at our resort.",
    //         type: "Resort",
    //     },
    // ];

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar includeSearch={true} />
            <div className="flex justify-between pl-10 pt-4 pb-0">
                <h2 className="text-2xl font-bold">
                    Search Results{" "}
                    <span className="text-xl font-normal text-gray-500">
                        ({data?.length} search results)
                    </span>
                    {/* TODO: Create a filter for search results */}
                </h2>
            </div>
            {loading ? (
                "Loading"
            ) : (
                <>
                    {data.map((hotel) => (
                        <HotelListItem item={hotel} key={hotel._id} />
                    ))}
                </>
            )}
            {/* {hotels.map((hotel, index) => (
                <HotelListItem key={index} {...hotel} />
            ))} */}
            <div className="flex-1"></div>{" "}
            {/* Empty space to push EmailSubscription and Footer to the bottom */}
            <EmailSubscription />
            <Footer />
        </div>
    );
};

export default List;
