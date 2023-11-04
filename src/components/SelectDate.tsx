import React from "react";
import styled from "styled-components";
import Button from "@components/Button";
import CalendarIconSrc from "@icons/event_available.svg";
import TimeIconSrc from "@icons/alarm_on.svg";
import DateIconSrc from "@icons/today.svg";
import DeleteIconSrc from "@icons/trash.svg";
import { Dialog } from "primereact/dialog";
import { Calendar } from "primereact/calendar";

interface ISelectDateProps {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function SelectDate({
    date,
    setDate,
    ...props
}: ISelectDateProps) {
    const [visible, setVisible] = React.useState<boolean>(false);
    const [onlyDate, setOnlyDate] = React.useState<Date>(date);
    const [onlyTime, setOnlyTime] = React.useState<Date>(date);

    const onHide = (): void => {
        setVisible(false);
    };

    const onSave = (): void => {
        const newDate = new Date(
            onlyDate.getFullYear(),
            onlyDate.getMonth(),
            onlyDate.getDate(),
            onlyTime.getHours(),
            onlyTime.getMinutes()
        );

        setDate(newDate);
        onHide();
    };

    return (
        <>
            <SelectDateButton
                {...props}
                onClick={() => setVisible((prev) => !prev)}
            >
                <IconImg src={CalendarIconSrc} />
                <ButtonText>Select Date</ButtonText>
            </SelectDateButton>
            <DateDialog visible={visible} onHide={onHide}>
                <PickerContainer>
                    <IconImg src={TimeIconSrc} />
                    <TimePicker
                        value={onlyTime}
                        onChange={(e) => setOnlyTime(e.value as Date)}
                        timeOnly
                        hourFormat="12"
                    />
                </PickerContainer>
                <PickerContainer>
                    <IconImg src={DateIconSrc} />
                    <DatePicker
                        value={onlyDate}
                        onChange={(e) => setOnlyDate(e.value as Date)}
                        dateFormat="MM dd"
                    />
                </PickerContainer>
                <Footer>
                    <DeleteButton onClick={onHide}>
                        <IconImg src={DeleteIconSrc} />
                    </DeleteButton>
                    <SaveButton onClick={onSave}>
                        <SaveButtonText>Save</SaveButtonText>
                    </SaveButton>
                </Footer>
            </DateDialog>
        </>
    );
}

const SelectDateButton = styled(Button)`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
`;

const IconImg = styled.img``;

const ButtonText = styled.div`
    font-size: 20px;
    line-height: 32px;
    color: rgb(70, 65, 61);
`;

const DateDialog = styled(Dialog)``;

const CommonPickerStyle = styled(Calendar)`
    & > input {
        box-sizing: border-box;
        border: 1px solid rgb(226, 224, 223);
        border-radius: 10px;
        outline: 0;
        padding: 16px 10px 16px 20px;
        color: rgb(70, 65, 61);
        font-size: 16px;
        line-height: 24px;
    }

    & .p-inputtext:enabled:focus {
        box-shadow: none;
    }
`;

const DatePicker = styled(CommonPickerStyle)``;

const TimePicker = styled(CommonPickerStyle)``;

const PickerContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    & > * {
        padding: 8px 16px;
    }
`;

const DeleteButton = styled(Button)``;

const SaveButton = styled(Button)`
    flex-grow: 1;
    background-color: rgb(229, 81, 57);
`;

const SaveButtonText = styled.span`
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    color: rgb(255, 255, 255);
`;
