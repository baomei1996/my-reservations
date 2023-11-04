import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface ITextInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string | React.ReactNode;
}

export default function Textarea({ label, value, ...props }: ITextInputProps) {
    return (
        <Container>
            <StyledTextarea {...props} rows={8} />
            {!value && label && <Label>{label}</Label>}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgb(226, 224, 223);
    padding: 16px 10px 16px 20px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 24px;
    outline: 0;
    color: rgb(70, 65, 61);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Label = styled.label`
    position: absolute;
    left: 21px;
    top: 16px;
    user-select: none;
    pointer-events: none;
`;
