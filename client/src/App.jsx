import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import List from "./views/list/HotelList";
import HotelPage from "./views/hotel/HotelPage";
import Login from "./views/login/login";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotels" element={<List />} />
                    <Route path="/hotel/:id" element={<HotelPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
