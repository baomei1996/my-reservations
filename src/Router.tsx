import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@screens/HomeScreen";
import ReservationScreen from "./screens/ReservationScreen";
import EditReservationScreen from "./screens/EditReservationScreen";
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
                <Route
                    path="/edit/:id"
                    element={
                        <Layout>
                            <EditReservationScreen />
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
