import "./App.css";
import Router from "./Router";
import { ReservationProvider } from "@contexts/ReservationContext";

function App() {
    return (
        <>
            <ReservationProvider>
                <Router />
            </ReservationProvider>
        </>
    );
}

export default App;
