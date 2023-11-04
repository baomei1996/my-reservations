import styled from "styled-components";
import Button from "@components/Button";
import PlusIconSrc from "@icons/math-plus.svg";
import MinusIconSrc from "@icons/math-minus.svg";

interface ICounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    min?: number;
    max?: number;
}

export default function GuestCounter({
    count,
    setCount,
    min = 1,
    max = 10,
    ...props
}: ICounterProps) {
    const onClickPlus = (): void => {
        setCount((prev) => prev + 1);
    };

    const onClickMinus = (): void => {
        setCount((prev) => prev - 1);
    };

    return (
        <Container {...props}>
            <MinusButton
                type="button"
                onClick={onClickMinus}
                disabled={count <= min}
            >
                <IconImg src={MinusIconSrc} />
            </MinusButton>
            <CounterText>{count}</CounterText>
            <PlusButton
                type="button"
                onClick={onClickPlus}
                disabled={count >= max}
            >
                <IconImg src={PlusIconSrc} />
            </PlusButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const CommonButtonStyle = styled(Button)`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const PlusButton = styled(CommonButtonStyle)``;

const MinusButton = styled(CommonButtonStyle)``;

const CounterText = styled.h2`
    font-size: 28px;
    font-weight: 700;
    padding: 10px;
    margin: 0;
    width: 50px;
    text-align: center;
`;

const IconImg = styled.img``;
