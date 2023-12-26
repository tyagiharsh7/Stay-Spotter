import { atom } from "recoil";

const roomsState = atom({
    key: "roomsState",
    default: 1,
});

export default roomsState;