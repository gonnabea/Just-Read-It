import React from "react";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";



const Imag_styles = styled.img`
    position: relative;
    width:10rem;
    height:10vh;
    /* 15% */
    display:inline-block;
`;

export default function title() {
    return (
        <BaseLayout>
            <GlobalStyle/>
                <a href="/">
                    <Imag_styles src="/images/Long_Story.png" />
                </a>
        </BaseLayout>
    );

}
// /images/Long_Story.png