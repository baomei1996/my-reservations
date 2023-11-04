import React, { useContext } from "react";
import HomeHeader from "@components/HomeHeader";
import { ReservationContext } from "@contexts/ReservationContext";
import styled from "styled-components";
import ReservationCard from "@components/ReservationCard";

export default function HomeScreen() {
    const { reservations } = useContext(ReservationContext);

    return (
        <>
            <HomeHeader />
            <ContentsContainer>
                {reservations.map((reservation) => (
                    <ReservationCard
                        key={reservation.id}
                        reservation={reservation}
                    />
                ))}
            </ContentsContainer>
        </>
    );
}

const ContentsContainer = styled.div`
    width: 100%;
    height: calc(100% - 96px);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 340px;
    gap: 10px;
`;
