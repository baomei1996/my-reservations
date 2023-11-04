import { useState } from "react";
import { createContext } from "react";
import { ReservationItemType } from "@/types";

interface IReservationContext {
    reservations: ReservationItemType[];
    addReservation: (reservation: ReservationItemType) => void;
    removeReservation: (id: string) => void;
    updateReservation: (updatedReservation: ReservationItemType) => void;
    seatedReservation: (id: string) => void;
    getReservation: (id: string) => ReservationItemType | undefined;
}

const ReservationContext = createContext<IReservationContext>({
    reservations: [],
    addReservation: () => {},
    removeReservation: () => {},
    updateReservation: () => {},
    seatedReservation: () => {},
    getReservation: () => undefined,
});

function ReservationProvider({ children }: { children: React.ReactNode }) {
    const [reservations, setReservations] = useState<ReservationItemType[]>([]);

    const addReservation = (reservation: ReservationItemType) => {
        setReservations([...reservations, reservation]);
    };

    const removeReservation = (id: string) => {
        setReservations(
            reservations.filter(
                (reservation: ReservationItemType) => reservation.id !== id
            )
        );
    };

    const updateReservation = (updatedReservation: ReservationItemType) => {
        setReservations(
            reservations.map((reservation: ReservationItemType) =>
                reservation.id === updatedReservation.id
                    ? updatedReservation
                    : reservation
            )
        );
    };

    const seatedReservation = (id: string) => {
        setReservations(
            reservations.map((reservation: ReservationItemType) =>
                reservation.id === id
                    ? { ...reservation, isSeated: true }
                    : reservation
            )
        );
    };

    const getReservation = (id: string) => {
        return reservations.find(
            (reservation: ReservationItemType) => reservation.id === id
        );
    };

    return (
        <ReservationContext.Provider
            value={{
                reservations,
                addReservation,
                removeReservation,
                updateReservation,
                seatedReservation,
                getReservation,
            }}
        >
            {children}
        </ReservationContext.Provider>
    );
}

export { ReservationProvider, ReservationContext };
