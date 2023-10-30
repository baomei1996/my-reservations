import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@screens/HomeScreen";
import ReservationScreen from "./screens/ReservationScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/reservation" element={<ReservationScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
