import { atom } from "recoil";

export const refetchSearchState = atom({
    key: "refetchSearchState",
    default: false,
});
