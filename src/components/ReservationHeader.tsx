import styled from "styled-components";
import Button from "@components/Button";
import GoBackIconSrc from "@icons/keyboard_backspace.svg";
import CloseIconSrc from "@icons/close.svg";
import { useNavigate } from "react-router-dom";

interface IReservationHeaderProps {
    isEditMode?: boolean;
}

export default function ReservationHeader({
    isEditMode = false,
}: IReservationHeaderProps) {
    const navigate = useNavigate();
    const onClickGoBack = (): void => {
        navigate(-1);
    };

    return (
        <Container>
            <LeftContainer>
                <GoBackButton onClick={onClickGoBack}>
                    <IconImg src={GoBackIconSrc} />
                </GoBackButton>
            </LeftContainer>
            <CenterContainer>
                <TitleText>
                    {isEditMode ? "Edit Reservation" : "New Reservation"}
                </TitleText>
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
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`;

const CenterContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`;

const GoBackButton = styled(Button)`
    padding: 10px;
    display: flex;
    align-items: center;
`;

const IconImg = styled.img``;

const TitleText = styled.p`
    margin: 0;
    font-size: 28px;
    line-height: 32px;
    color: rgb(70, 65, 61);
    white-space: nowrap;
`;

const CloseIcon = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 130px;
`;
