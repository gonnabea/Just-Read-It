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
    z-index:1;
    position:absolute;
    background-image:url("https://cdn.pixabay.com/photo/2020/03/12/13/27/rose-4925102_1280.jpg"); 
    background-color:#ede9b2;
    background-size:100% 100%;
    background-position:center center;
    
`;

const Image = styled.img`
    margin:1.5rem;
    width:4rem;
    border-radius:100%;
    opacity:0.7;
    background-color: rgba(151, 150, 150, 0.164); 
    &:hover{
        border:0.5px solid rgba(21, 21, 22, 0.37); 
        background-color:white;
        opacity:1;
        &:hover
        {
        opacity:1;

        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient1 15s ease infinite;
            
            @keyframes gradient1 
            {
                0% {
                    background-position: 0% 50%;
                    opacity:0.9;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    opacity:1;
                    background-position: 0% 50%;
                }
            }
        }
    }
`;

const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    position:absolute;
    top:30%;
    border: 1px solid red;
    border-radius:7px;
    /* background-color: #55efc4; */
    background-color:rgba(229, 224, 149, 0.7);
    box-shadow: 0px 0px 17px 4px rgba(0,0,0,0.75);
    padding:2rem;

    &:hover{
        animation: box_hover 1s linear forwards;
        opacity:1;
    }

    /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
	/* background-size: 400% 400%; */
    /* animation: gradient1 15s ease infinite; */

    @keyframes gradient1 {
        0% {
            background-position: 0% 50%;
            opacity:0.9;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            opacity:1;
            background-position: 0% 50%;
        }
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
    display:flex;
    flex-direction:column;

    &>img{
    }
    &>span{
        display:none;
        /* color:black; */
    }
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Input = styled.input`
    margin: 1.2vh;
    font-size: 2vh;
    padding: 10px;
    width:100%;
    background:none;
    border: solid 0px;
    border-bottom: solid 0.15vh white; 
    font-weight:700;
    :last-child{
        cursor:pointer;
    }
    ::placeholder{
        color: black;
        text-align:center;
    }
    :focus{
        color:black;
        outline: none;
        animation: makeBorder 0.4s linear forwards;
        ::placeholder{
        color:#DD275B;
        text-align:center;
        
        }
        @keyframes makeBorder {
            0%{
                background:none;
            }
            100%{
                border-bottom: solid 0.2vh #F6B93B;
                background-color:white;
            }
        }
    }

    &:nth-child(5)
    {
        background-color:white;
        text-align: center;
        font-weight:700;
        font-size:2vh;
        border: solid .3vh black;
        :hover{
            
            color:white;
            animation: button-color 0.3s linear forwards;
            @keyframes button-color {
                0%{
                    background-color: white;
                }
                100%{
                    background-color: orange;
                }
            }
        }
    }
`;

const Span_line = styled.span`
    width:100%;
    margin: 0 2vh;
    color:white;
    font-size:1rem;;
    font-weight:700;
    :hover{
        text-decoration:underline;
    }
    
    @media screen and (max-width: 700px)
    {
        font-size:1.5rem;
    } 
    @media screen and (max-device-width: 420px)
    {
        font-size:2rem;
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
            <Main_box >
                <Div>
                    {/* {Header(this.props)} */}
                    <Form action={props.routes.join} autoComplete="off"  method="post" >
                        <Input  type="text" autocomplete="off" name="username" required={true} placeholder="닉네임" />
                        <Input  type="text" name="email" required={true} placeholder="이메일" />                
                        <Input  type="password" name="password" required={true} placeholder="비밀번호" />
                        <Input  type="password" name="password2" required={true} placeholder="비밀번호 확인" />
                        <Input type="submit" value="가입하기" />
                    </Form>
                    <div>{props.msg}</div>
                    <div style={{ display: "flex" }}>
                        <A href={props.routes.googleAuth}>
                            <Image src="https://img.utdstc.com/icons/google-search-android.png:l" alt="" />
                            <span>구글 로그인</span>
                        </A>
                        <A href={props.routes.naverAuth}>
                            <Image src="https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png" />
                            <span >네이버 로그인</span>
                        </A>
                        <A href={props.routes.slackAuth}>
                            <Image src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
                            <span>슬랙 로그인</span>
                        </A>
                    </div>
                    <Bottom_box>
                        <div>
                            <Span_line>
                                계정이 이미 있으신가요?
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
