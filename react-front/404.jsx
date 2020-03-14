import React from "react";
import { BaseLayout } from "./globalStyles/layout";
import Header from "./globalStyles/Header";
import GlobalStyle from "./globalStyles/ResetCss";
import styled, { createGlobalStyle } from "styled-components";


const Main_box = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
  
`;
const Bakcground = styled.div`
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background-position: cover;
    background-size: 100% 100%;
    background-image:url("https://cdn.pixabay.com/photo/2016/11/23/14/34/bubbles-1853237_960_720.jpg");
    z-index:-1;

`;

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   color:red;
`;
function ErrorPage() {
    return (
        <BaseLayout>
            <GlobalStyle />
            <Header />
            <Main_box>
                <Div>
                    <h1>404 Page error!</h1>
                    <h3>찾으시는 책이 삭제되었거나 일시적으로 오류가 있을 수 있습니다.</h3>
                    <button id="ssss">Toggle</button>
                    <section class="alpha"></section>
                    <section class="beta"></section>
                    <section class="gamma"></section>
                    <section class="delta"></section>
                </Div>
            <Bakcground id="background_target"></Bakcground>
            </Main_box>
            <script src="/vanilla/home.js"></script>

        </BaseLayout>
    )
}

export default ErrorPage;