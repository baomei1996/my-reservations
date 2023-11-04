import styled from "styled-components";
import Button from "@components/Button";
import TextInput from "@components/TextInput";
import SelectDate from "@components/SelectDate";
import Counter from "@components/Counter";
import Textarea from "@components/Textarea";
import PencilIconSrc from "@icons/edit.svg";
import { useMemo, useState, useContext } from "react";
import { SELECT_TABLE_OPTIONS } from "@/static/constants";
import { MultiSelect } from "primereact/multiselect";
import { ReservationContext } from "@contexts/ReservationContext";
import { ReservationItemType } from "@/types";
import { useNavigate } from "react-router-dom";
import useInitializeReservation from "@/hooks/useInitializeReservation";

interface IReservationFormProps {
    isEditMode?: boolean;
    reservation?: ReservationItemType;
}

export default function ReservationForm({
    isEditMode = false,
    reservation = undefined,
}: IReservationFormProps) {
    const initReservation = useInitializeReservation({
        isEditMode,
        reservation,
    });
    const navigate = useNavigate();
    const { addReservation, updateReservation } =
        useContext(ReservationContext);
    const [name, setName] = useState<string>(reservation?.name ?? "");
    const [phone, setPhone] = useState<string>(initReservation.phone);
    const [guestCount, setGuestCount] = useState<number>(
        initReservation.guestCount
    );
    const [reservedTable, setReservedTable] = useState<number[]>(
        initReservation.reservedTable
    );
    const [reservationDate, setReservationDate] = useState<Date>(
        initReservation.reservationDate
    );
    const [note, setNote] = useState<string>(initReservation.note);

    const canSave = useMemo(() => {
        return name && phone;
    }, [name, phone]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const changedReservation = {
            name,
            phone,
            guestCount,
            reservedTable,
            reservationDate: reservationDate.toISOString(),
            note,
        };

        // 수정할 예약일 경우 정보를 업데이트하고, 아닐 경우 새로운 예약을 추가한다.
        if (isEditMode && reservation) {
            const updatedReservation = {
                ...changedReservation,
                id: reservation.id,
                isSeated: reservation.isSeated,
            };
            updateReservation(updatedReservation);
        } else {
            const newReservation = {
                ...changedReservation,
                id: Date.now().toString(),
                isSeated: false,
            };
            addReservation(newReservation);
        }
        navigate("/");
    };

    return (
        <Form onSubmit={onSubmit}>
            <InputContainer>
                <InputTop>
                    <NameInput
                        defaultValue={name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label={
                            <LabelText>
                                Name<Required>*</Required>
                            </LabelText>
                        }
                        required
                    />
                    <PhoneInput
                        defaultValue={phone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        label={
                            <LabelText>
                                Phone<Required>*</Required>
                            </LabelText>
                        }
                        required
                    />
                    <SelectDate
                        date={reservationDate}
                        setDate={setReservationDate}
                    />
                </InputTop>
                <InputCenter>
                    <GuestCounterContainer>
                        <Text>Guests</Text>
                        <GuestCounter
                            count={guestCount}
                            setCount={setGuestCount}
                        />
                    </GuestCounterContainer>
                    <TableSelect
                        value={reservedTable}
                        onChange={(e) => setReservedTable(e.value)}
                        options={SELECT_TABLE_OPTIONS}
                        placeholder="Select Tables"
                        maxSelectedLabels={3}
                        className="w-full md:w-20rem"
                    />
                </InputCenter>
                <InputBottom>
                    <Textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        label={
                            <LabelText>
                                Add Note...
                                <IconImg src={PencilIconSrc} />
                            </LabelText>
                        }
                    />
                </InputBottom>
            </InputContainer>
            <SaveButton type="submit" disabled={!canSave}>
                <ButtonText>Save</ButtonText>
            </SaveButton>
        </Form>
    );
}

const Form = styled.form`
    padding: 10px 30px 30px 30px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const CommonInputContainerStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;

    & > * {
        flex-grow: 1;
        width: 100%;
    }
`;

const LabelText = styled.span`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(157, 152, 148);
    display: flex;
    align-items: center;
    gap: 3px;
`;

const IconImg = styled.img``;

const Required = styled.span`
    color: rgb(229, 81, 57);
`;

const InputTop = styled(CommonInputContainerStyle)``;

const NameInput = styled(TextInput)``;

const PhoneInput = styled(TextInput)``;

const InputCenter = styled(CommonInputContainerStyle)``;

const GuestCounterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Text = styled.span``;

const GuestCounter = styled(Counter)``;

const TableSelect = styled(MultiSelect)`
    box-sizing: border-box;
    border: 1px solid rgb(226, 224, 223);
    border-radius: 10px;
    outline: 0;
    box-shadow: none !important;

    & .p-multiselect-label {
        padding: 16px 10px 16px 20px;
        color: rgb(70, 65, 61);
        font-size: 16px;
        line-height: 24px;
    }
`;

const InputBottom = styled(CommonInputContainerStyle)``;

const SaveButton = styled(Button)`
    width: 100%;
    margin-top: 100px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(229, 81, 57);

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const ButtonText = styled.span`
    color: white;
    font-size: 18px;
`;
