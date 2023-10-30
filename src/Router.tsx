import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@screens/HomeScreen";
import ReservationScreen from "./screens/ReservationScreen";
import Layout from "@components/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomeScreen />
                        </Layout>
                    }
                />
                <Route
                    path="/reservation"
                    element={
                        <Layout>
                            <ReservationScreen />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
