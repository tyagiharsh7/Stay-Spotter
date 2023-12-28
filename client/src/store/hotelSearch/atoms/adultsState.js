import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const adultsState = atom({
    key: "adultsState",
    default: 1,
    effects_UNSTABLE: [persistAtom],
});

export default adultsState;