import React from "react";
import Title from "../react-front/title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Main_box = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
`;

const Image = styled.img`
    margin:1.5rem;
    width:4rem;
    border-radius:100%;
    padding:0.1rem;
    opacity:0.7;
    background-color: rgba(151, 150, 150, 0.164); 
    &:hover{
        border:0.5px solid rgba(21, 21, 22, 0.37); 
        background-color:white;
        opacity:1;
    }
`;
const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    position:absolute;
    top:40%;
    border: 1px solid red;
    border-radius:7px;
    background-color: #55efc4;
    box-shadow: 0px 0px 17px 4px rgba(0,0,0,0.75);
    padding:2rem;
    background-image:url("https://cdn.pixabay.com/photo/2020/03/09/15/52/nature-4916153__340.jpg");
    background-size:cover;
    background-position:center center;
    &:hover{
        animation: box_hover 1s linear forwards;
    }

    @keyframes box_hover{
        0%{
            box-shadow: -1px 0px 21px 0px rgba(0,0,0,0.75);

        }
        100%{
            box-shadow: 0px 10px 5px 1px rgba(0,0,0,0.75);

        }
    }
`;


const A = styled.a`

&>span{
    display:none;
}
`;


const Input = styled.input`
    margin: 0.4rem;
    font-size:0.8rem;
    @media screen and (max-width: 1000px)
    { 
        display:flex;
        justify-content:center;
        text-align:center;
    }
`;

const Span_line = styled.span`
    width:100%;
    margin: 0 2rem;
    color:white;
    font-size:1rem;
    font-weight:300;
    :hover{
        font-weight:500;
        text-decoration:underline;
    }
`;
const Bottom_box = styled.div`
    display:flex;
    flex-direction:column;
    &>div:first-child{
        margin-bottom:0.7rem;
    }

`;
const Check_span = styled.span`
color:white;
font-size:14px;
text-decoration:underline;
`;

function Join(props) {
    return (
        <BaseLayout>
            <GlobalStyle />
            <Header />
            <Main_box  >
                <Div>
                    {/* {Header(this.props)} */}
                    <form action={props.routes.join} method="post" >
                        <Input type="text" name="username" required={true} placeholder="닉네임" />
                        <Input type="text" name="email" required={true} placeholder="이메일" />
                        <Input type="password" name="password" required={true} placeholder="비밀번호" />
                        <Input type="password" name="password2" required={true} placeholder="비밀번호 확인" />
                        <Input type="submit" value="가입하기" />
                    </form>
                    <div>
                        <A href={props.routes.googleAuth}>
                            <span>구글 로그인</span>
                            <Image src="https://p7.hiclipart.com/preview/249/19/631/google-logo-g-suite-google-guava-google-plus.jpg" alt="" />
                        </A>
                        <A href={props.routes.naverAuth}>
                            <span >네이버 로그인</span>
                            <Image src="https://img.utdstc.com/icons/naver-android.png:l" />
                        </A>
                        <A href={props.routes.slackAuth}>
                            <span>슬랙 로그인</span>
                            <Image src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
                        </A>
                    </div>
                    <Bottom_box>
                        <div>
                            <input type="checkbox" name="news_check" />
                            <Check_span >최신 소식을 이메일로 받겠습니다.</Check_span>
                        </div>
                        <div>
                            <Span_line>
                                계정이 이미 있으신가요
                            </Span_line>
                            <a href={props.routes.login}>
                                <Span_line>
                                    로그인
                                </Span_line>
                            </a>
                        </div>
                    </Bottom_box>
                </Div>
            </Main_box>
        </BaseLayout>
    );
}



export default Join;