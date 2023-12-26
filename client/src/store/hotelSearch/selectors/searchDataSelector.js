import { selector } from "recoil";
import bookingDateState from "../atoms/bookingDateState.js"
import locationState from "../atoms/locationState.js"
import adultsState from "../atoms/adultsState.js"
import childrenState from "../atoms/childrenState.js"
import roomsState from "../atoms/roomsState.js"

export const searchDataSelector = selector({
    key: "searchDataSelector",
    get: ({ get }) => {
        const location = get(locationState);
        const bookingDate = get(bookingDateState);
        const adults = get(adultsState);
        const children = get(childrenState);
        const rooms = get(roomsState);

        return {
            location,
            bookingDate,
            guests: {
                adults,
                children,
                rooms,
            },
        };
    },
});
