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
`;
