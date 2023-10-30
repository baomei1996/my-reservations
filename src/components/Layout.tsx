import React from "react";
import styled from "styled-components";

interface ILayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
    return <Container>{children}</Container>;
}

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    height: 90vh;
    margin-top: calc(10vh / 2);
    background-color: rgb(242, 242, 241);
    border-radius: 10px;
`;
