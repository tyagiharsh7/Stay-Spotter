import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const locationState = atom({
    key: "locationState",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export default locationState;