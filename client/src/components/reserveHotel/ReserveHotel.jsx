import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import bookingDateState from "../../store/hotelSearch/atoms/bookingDateState";
import axios from "axios";
import { useRecoilValue } from "recoil";
import getDatesInRange from "../../utils/getDatesInRange.js";

const ReserveHotel = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const { data, error } = useFetch(
        `${import.meta.env.VITE_BASE_API_URI}/api/hotel/find/room/${hotelId}`
    );
    const dates = useRecoilValue(bookingDateState);

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            alldates.includes(new Date(date).setHours(0, 0, 0, 0))
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value)
        );
    };

    const handleClick = async () => {
        try {
            setLoading(true);
            await Promise.all(
                selectedRooms.map(async (roomNumberId) => {
                    const roomId = data.find((item) =>
                        item.roomNumbers.some(
                            (roomNumber) => roomNumber._id === roomNumberId
                        )
                    )?._id;

                    if (roomId) {
                        const res = await axios.put(
                            `${import.meta.env.VITE_BASE_API_URI}/api/room/availability/${roomId}`,
                            {
                                roomId: roomId,
                                roomNumberId: roomNumberId,
                                dates: alldates,
                            }
                        );
                        // console.log('allDates: ', alldates);
                        // console.log('allDates types: ', typeof(alldates));
                        return res.data;
                    }
                })
            );
            setOpen(false);
        } catch (err) {
            console.error("Error during reservation:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-8 relative">
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    size={"lg"}
                    className="absolute top-0 right-0 cursor-pointer p-4"
                    onClick={() => setOpen(false)}
                />
                <span className="text-lg font-bold">Select your rooms:</span>
                {data && data.length > 0 ? (
                    <>
                        {data.map((item) => (
                            <div
                                key={item._id}
                                className="flex items-center gap-8 p-4"
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="font-semibold">
                                        {item.title}
                                    </div>
                                    <div className="font-light">
                                        {item.desc}
                                    </div>
                                    <div className="text-sm">
                                        Max people:{" "}
                                        <span className="font-bold">
                                            {item.maxPeople}
                                        </span>
                                    </div>
                                    <div className="font-semibold">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                    {item.roomNumbers.map((roomNumber) => (
                                        <div
                                            key={roomNumber._id}
                                            className="flex flex-col"
                                        >
                                            <label>{roomNumber.number}</label>
                                            <input
                                                type="checkbox"
                                                value={roomNumber._id}
                                                onChange={handleSelect}
                                                disabled={
                                                    !isAvailable(roomNumber)
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={handleClick}
                            disabled={loading}
                            className={`bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 mt-4 ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                            {loading ? "Reserving..." : "Reserve Now!"}
                        </button>
                    </>
                ) : (
                    <div>Error loading rooms. Please try again.</div>
                )}
            </div>
        </div>
    );
};

export default ReserveHotel;
