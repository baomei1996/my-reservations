import React from "react";
import styled from "styled-components";

interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Button({ children, ...props }: IButtonProps) {
    return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
    border-radius: 10px;
    background-color: rgb(252, 252, 252);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    cursor: pointer;
`;
