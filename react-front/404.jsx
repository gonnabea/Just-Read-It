import React from "react";
import { BaseLayout } from "./globalStyles/layout";
import Header from "./globalStyles/Header";
import GlobalStyle from "./globalStyles/ResetCss";
import styled, { createGlobalStyle } from "styled-components";


const Main_box = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    text-align:center;
    align-items:center;
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
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
    animation: gradient 15s ease infinite;
        
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

`;

const Div = styled.div`
    display:flex;
    flex-direction:column;
    color:red;
    margin-top:5vh;
`;


const Change_img = styled.img`
    width:15rem;
    /* visibility: hidden;  */
    z-index:2;
    border-bottom:3px solid red;

`;
const H_button = styled.button`
    border-radius:10px;
    font-size: 7rem;
    outline:none;
    box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.75);
    :active{
        transform:translateY(1vh);
        box-shadow: 3px 2px 5px 0px rgba(0,0,0,0.75);
    }
`;

function ErrorPage(props) {
    return (
        <BaseLayout>
            <GlobalStyle />
            {Header(props)}
            <Main_box>
                <Div>
                    <h1>404 Can Not Found</h1>
                    <h3>찾으시는 책이 삭제되었거나 일시적으로 오류가 있을 수 있습니다.</h3>
                </Div>
                <Change_img id="text" src="https://cdn.pixabay.com/photo/2018/03/15/16/17/sign-3228713_960_720.png" />
                <div>
                    <a href={props.routes.home} >
                        <H_button >
                            HOME
                       </H_button>
                    </a>
                </div>
               
                <Bakcground id="background_target"></Bakcground>
            </Main_box>
            <script src="/vanilla/home.js"></script>

        </BaseLayout>
    )
}

export default ErrorPage;