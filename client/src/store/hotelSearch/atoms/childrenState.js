import { atom } from "recoil";

const childrenState = atom({
    key: "childrenState",
    default: 0,
});

export default childrenState;