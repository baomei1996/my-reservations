import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactNode;
}

export default function TextInput({
    label,
    value,
    required = false,
    ...props
}: ITextInputProps) {
    return (
        <Container>
            <StyledInput type="text" {...props} />
            {!value && label && <Label>{label}</Label>}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgb(226, 224, 223);
    padding: 16px 10px 16px 20px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
    outline: 0;
    color: rgb(70, 65, 61);
`;

const Label = styled.label`
    position: absolute;
    left: 21px;
    top: 16px;
    user-select: none;
    pointer-events: none;
`;
