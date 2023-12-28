import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const roomsState = atom({
    key: "roomsState",
    default: 1,
    effects_UNSTABLE: [persistAtom],
});

export default roomsState;