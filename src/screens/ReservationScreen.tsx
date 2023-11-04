import styled from "styled-components";
import ReservationHeader from "@components/ReservationHeader";
import ReservationForm from "@components/ReservationForm";

export default function ReservationScreen() {
    return (
        <Container>
            <ReservationHeader />
            <ReservationForm />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
`;
