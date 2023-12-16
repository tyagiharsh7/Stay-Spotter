import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const HotelSearch = () => {
    const [openBookingDateCalender, setOpenBookingDateCalender] =
        useState(false);
    const [openPeopleAndRoomSelection, setOpenPeopleAndRoomSelection] =
        useState(false);
    const [bookingDate, setBookingDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [location, setLocation] = useState("");

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search clicked");
    };

    const closeAllOptionsExcpetThis = (option) => {
        if (option !== openBookingDateCalender)
            setOpenBookingDateCalender(false);
        if (option !== openPeopleAndRoomSelection)
            setOpenPeopleAndRoomSelection(false);
    };

    return (
        <>
            <div className="flex bg-white rounded-full shadow-md relative">
                <form onSubmit={handleSearch}>
                    <div className="flex justify-space-between space-x-1 p-1">
                        <div className="flex text-black bg-gray-100 w-3/4 px-3 py-2 border rounded-full">
                            <div className="pt-2 pr-0 mr-0">
                                <GrLocation />
                            </div>
                            <input
                                type="text"
                                id="location"
                                className="bg-gray-100 w-3/4 px-3 focus:outline-none text-black"
                                placeholder="Enter city, landmark, or address"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                onClick={() => closeAllOptionsExcpetThis()}
                            />
                        </div>
                        <div className="bg-gray-100 w-full pl-10 pr-20 pt-3 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-green-500 text-black overflow-hidden whitespace-nowrap relative">
                            <span
                                onClick={async () => {
                                    await closeAllOptionsExcpetThis(
                                        openBookingDateCalender
                                    );
                                    setOpenBookingDateCalender(
                                        !openBookingDateCalender
                                    );
                                }}
                            >{`${format(
                                bookingDate[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(
                                bookingDate[0].endDate,
                                "MM/dd/yyyy"
                            )}`}</span>
                        </div>
                        <div
                            className="bg-gray-100 w-3/4 px-3 py-2 pt-3 border rounded-full focus:outline-none focus:ring-1 focus:ring-green-500 text-black"
                            onClick={async () => {
                                await closeAllOptionsExcpetThis(
                                    openPeopleAndRoomSelection
                                );
                                setOpenPeopleAndRoomSelection(
                                    !openPeopleAndRoomSelection
                                );
                            }}
                        >
                            {adults + children} people - {rooms} room
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center w-full px-4 py-3 text-lg bg-green-500 text-white rounded-full shadow-sm hover:bg-green-700"
                        >
                            <FaSearch className="mr-2" />
                            Search
                        </button>
                    </div>
                </form>
                <div
                    style={{
                        position: "absolute",
                        top: 60, // Position at the absolute bottom
                        left: 145,
                        zIndex: 999,
                        width: "100%", // Make the width full
                    }}
                >
                    {openBookingDateCalender && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) =>
                                setBookingDate([item.selection])
                            }
                            moveRangeOnFirstSelection={false}
                            ranges={bookingDate}
                            rangeColors={['#22C55E']}
                        />
                    )}
                </div>
                <div
                    className="p-4"
                    style={{
                        position: "absolute",
                        top: 44.5, // Position at the absolute bottom
                        left: 430,
                        zIndex: 999
                    }}
                >
                    {openPeopleAndRoomSelection && (
                        <div className="flex flex-col w-44 bg-white p-2 border-t-0 rounded-b-lg">
                            <div>
                                <div className="text-black">Adult</div>
                                <div className="flex justify-between border rounded-md">
                                    <button
                                        onClick={() =>
                                            setAdults(
                                                adults > 1 ? adults - 1 : adults
                                            )
                                        }
                                        className="bg-gray-300 w-full"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={adults}
                                        readOnly
                                        className="text-center w-8 text-black"
                                    />
                                    <button
                                        onClick={() => setAdults(adults + 1)}
                                        className="bg-green-500  w-full"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="text-black">Children</div>
                                <div className="flex justify-between border rounded-md">
                                    <button
                                        onClick={() =>
                                            setChildren(
                                                children > 0
                                                    ? children - 1
                                                    : children
                                            )
                                        }
                                        className="bg-gray-300 w-full"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={children}
                                        readOnly
                                        className="text-center w-8 text-black"
                                    />
                                    <button
                                        onClick={() =>
                                            setChildren(children + 1)
                                        }
                                        className="bg-green-500 w-full"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="text-black">Room</div>
                                <div className="flex justify-between border rounded-md">
                                    <button
                                        onClick={() =>
                                            setRooms(
                                                rooms > 1 ? rooms - 1 : rooms
                                            )
                                        }
                                        className="bg-gray-300 w-full"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        value={rooms}
                                        readOnly
                                        className="text-center w-8 text-black"
                                    />
                                    <button
                                        onClick={() => setRooms(rooms + 1)}
                                        className="bg-green-500 w-full"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HotelSearch;
