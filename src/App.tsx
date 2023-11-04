import "./App.css";
import Router from "./Router";
import { ReservationProvider } from "@contexts/ReservationContext";
import "primereact/resources/themes/lara-light-indigo/theme.css";

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
