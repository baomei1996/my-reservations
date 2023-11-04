import styled from "styled-components";
import Button from "@components/Button";
import TextInput from "@components/TextInput";
import SelectDate from "@components/SelectDate";
import Counter from "@components/Counter";
import Textarea from "@components/Textarea";
import PencilIconSrc from "@icons/edit.svg";
import { useMemo, useState } from "react";
import { SELECT_TABLE_OPTIONS } from "@/static/constants";
import { MultiSelect } from "primereact/multiselect";

export default function ReservationForm() {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [guestCount, setGuestCount] = useState<number>(1);
    const [reservedTables, setReservedTables] = useState<number[]>([
        SELECT_TABLE_OPTIONS[0].value as number,
    ]);
    const [reservationDate, setReservationDate] = useState<Date>(new Date());
    const [note, setNote] = useState<string>("");

    const canSave = useMemo(() => {
        return name && phone;
    }, [name, phone]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={onSubmit}>
            <InputContainer>
                <InputTop>
                    <NameInput
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
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
                        value={reservedTables}
                        onChange={(e) => setReservedTables(e.value)}
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
