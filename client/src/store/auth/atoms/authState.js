import { atom, useRecoilState } from "recoil";

export const authState = atom({
    key: "authState",
    default: {
        user: JSON.parse(localStorage.getItem("user")) || null,
        loading: false,
        error: null,
    },
});

export const useAuth = () => {
    return useRecoilState(authState);
};
