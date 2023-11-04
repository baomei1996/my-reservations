import React, { useContext } from "react";
import { ReservationItemType } from "@/types";
import styled from "styled-components";
import { Card } from "primereact/card";
import Button from "@components/Button";
import DeleteIconSrc from "@icons/trash.svg";
import PhoneIconSrc from "@icons/phone.svg";
import PeopleIconSrc from "@icons/group.svg";
import CalendarIconSrc from "@icons/event_available.svg";
import { getFormattedDate } from "@/utils/dateHelper";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "@contexts/ReservationContext";

interface IReservationCardProps {
    reservation: ReservationItemType;
}

export default function ReservationCard({
    reservation,
}: IReservationCardProps) {
    const navigate = useNavigate();
    const { removeReservation, seatedReservation } =
        useContext(ReservationContext);
    const { name, phone, reservationDate, guestCount, reservedTable, note } =
        reservation;

    const onClickReservationCard = () => {
        navigate(`/edit/${reservation.id}`);
    };

    const onClickDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (window.confirm("해당 예약을 삭제하시겠습니까?")) {
            removeReservation(reservation.id);
        }
    };

    const onClickSeatedButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        if (window.confirm("해당 예약을 입장 처리하시겠습니까?")) {
            seatedReservation(reservation.id);
        }
    };

    return (
        <Container onClick={onClickReservationCard}>
            <TopInfoContainer>
                <StrongText>{name}</StrongText>
                <PhonButton>
                    <IconImg src={PhoneIconSrc} />
                    <Text>{phone}</Text>
                </PhonButton>
            </TopInfoContainer>
            <DateContainer>
                <IconImg src={CalendarIconSrc} />
                <StrongText>
                    {getFormattedDate(new Date(reservationDate))}
                </StrongText>
            </DateContainer>
            <GuestCountContainer>
                <IconImg src={PeopleIconSrc} />
                <StrongText>{guestCount}</StrongText>
            </GuestCountContainer>
            <ReservedTableContainer>
                <Text>Reserved Table</Text>
                <StrongText>{reservedTable?.join(", ")}</StrongText>
                <Text>· Floor</Text>
            </ReservedTableContainer>
            <NoteContainer>
                {reservation.note && <Note>{note}</Note>}
            </NoteContainer>
            <Footer>
                <DeleteButton onClick={onClickDeleteButton}>
                    <IconImg src={DeleteIconSrc} />
                </DeleteButton>
                <SeatedButton onClick={onClickSeatedButton}>
                    <SeatedButtonText>Seated</SeatedButtonText>
                </SeatedButton>
            </Footer>
        </Container>
    );
}

const Container = styled(Card)`
    & .p-card-body {
        padding: 20px;
        height: 100%;
        cursor: pointer;
    }

    & .p-card-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0;
        height: 100%;
    }
`;

const CommonWrapperStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const TopInfoContainer = styled(CommonWrapperStyle)``;

const Text = styled.span`
    font-size: 14px;
    color: rgb(108, 102, 97);
`;

const StrongText = styled(Text)`
    font-size: 18px;
    color: #000;
    font-weight: 6500;
`;

const PhonButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 20px;
`;

const DateContainer = styled(CommonWrapperStyle)``;

const GuestCountContainer = styled(CommonWrapperStyle)``;

const ReservedTableContainer = styled(CommonWrapperStyle)``;

const NoteContainer = styled.div`
    flex-grow: 1;
`;

const Note = styled.p`
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const IconImg = styled.img``;

const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const DeleteButton = styled(Button)`
    padding: 8px 16px;
`;

const SeatedButton = styled(Button)`
    padding: 8px 16px;
    flex-grow: 1;
    background-color: rgb(229, 81, 57);
`;

const SeatedButtonText = styled.span`
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    color: rgb(255, 255, 255);
`;
