import React from "react";
import styled from "styled-components";
import Button from "@components/Button";
import AddIconSrc from "@icons/add.svg";
import CloseIconSrc from "@icons/close.svg";
import { useNavigate } from "react-router-dom";

export default function HomeHeader() {
    const navigate = useNavigate();
    const onClickNewReservation = (): void => {
        navigate("/reservation");
    };

    return (
        <Container>
            <LeftContainer>
                <NewReservationButton onClick={onClickNewReservation}>
                    <IconImg src={AddIconSrc} />
                    <ButtonText>New Reservation</ButtonText>
                </NewReservationButton>
            </LeftContainer>
            <CenterContainer>
                <TitleText>Reservation</TitleText>
            </CenterContainer>
            <RightContainer>
                <CloseIcon>
                    <IconImg src={CloseIconSrc} />
                </CloseIcon>
            </RightContainer>
        </Container>
    );
}

const Container = styled.div`
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
`;

const CenterContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
`;

const RightContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: end;
`;

const NewReservationButton = styled(Button)`
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const IconImg = styled.img``;

const TitleText = styled.p`
    margin: 0;
    font-size: 28px;
    line-height: 32px;
    color: rgb(70, 65, 61);
`;

const ButtonText = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: rgb(229, 81, 57);
    font-weight: 500;
`;

const CloseIcon = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 130px;
`;
