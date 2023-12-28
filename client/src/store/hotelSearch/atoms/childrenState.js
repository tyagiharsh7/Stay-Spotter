import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const childrenState = atom({
    key: "childrenState",
    default: 0,
    effects_UNSTABLE: [persistAtom],
});

export default childrenState;