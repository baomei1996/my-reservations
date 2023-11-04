import React, { useContext } from "react";
import styled from "styled-components";
import ReservationHeader from "@components/ReservationHeader";
import ReservationForm from "@components/ReservationForm";
import { useParams } from "react-router-dom";
import { ReservationContext } from "@contexts/ReservationContext";

export default function EditReservationScreen() {
    const { id } = useParams();
    const { getReservation } = useContext(ReservationContext);
    const reservation = getReservation(id ?? "");

    if (!reservation) {
        return <h3>Oops something went wrong.</h3>;
    }

    return (
        <Container>
            <ReservationHeader isEditMode />
            <ReservationForm isEditMode reservation={reservation} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
`;
