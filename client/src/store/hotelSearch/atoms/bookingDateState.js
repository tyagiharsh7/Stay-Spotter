import { atom } from "recoil";

const bookingDateState = atom({
    key: "bookingDateState",
    default: [
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ],
});

export default bookingDateState;
