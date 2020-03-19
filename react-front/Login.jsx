import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Divs = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-size:cover;
    background-position:center center;
    background-image:url("https://cdn.pixabay.com/photo/2020/02/06/08/49/water-4823433_960_720.jpg");
    &>*>span{
        color:yellow;
    }
`;
const Asns = styled.a`
    margin:0.7rem;

    &>span{
        display:none;
    }

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

const Box_img = styled.div`
    display:flex;
    width:30rem;
    height:20rem;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    border-bottom-right-radius:10px;
    background-color:#4983ca;
    box-shadow: -1px 0px 21px 0px rgba(0,0,0,0.75);
    border-radius:10px;
    &:hover{
        animation: box_hover 1s linear forwards;
    }

    @keyframes box_hover{
        0%{

        }
        100%{
            box-shadow: 0px 10px 5px 1px rgba(0,0,0,0.75);

        }
    }
`;

const Input = styled.input`
    margin:0.4rem;
    &:hover{
        cursor:pointer;
    }
    :focus{
    autocomplete:off;
    background-color:#fffa65;
    color:#2bcbba;
    }
`;
const Bottom_box = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0.7rem;
    border-top:1px solid white;
    padding:0.3rem;
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
const Label = styled.label`
`;

function Login(props) {
    const Auths = () => {

        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(props)}
                <Divs >
                    <Box_img>
                        <form autoComplete="off" style={{display:"flex",flexDirection:"column", alignItems:"space-around"}} action={props.routes.login}  method="post"  >
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                            <Label className="email_label" for="login_email">Email:</Label>
                            <Input id="login_email" type="email" name="email" placeholder="이메일" ></Input>
                            </div>
                            <div>
                            <Label className="email_label" for="login_password">password:</Label>
                            <Input id="login_password" type="password" name="password" placeholder="패스워드"></Input>
                            </div>
                            <Input type="submit" value="로그인"></Input>
                        </form>
                        <p>{props.message}</p>
                        <div>
                            <input type="checkbox" name="user_check" />
                            <span style={{ color: "red" }}>Remember me</span>
                        </div>
                        <div>
                            <Asns href={props.routes.googleAuth}>
                                <span>구글 로그인</span>
                                <Image src="https://p7.hiclipart.com/preview/249/19/631/google-logo-g-suite-google-guava-google-plus.jpg" alt="" />
                            </Asns>
                            <Asns href={props.routes.naverAuth}>
                                <span>네이버 로그인</span>
                                <Image src="https://img.utdstc.com/icons/naver-android.png:l" />
                            </Asns>
                            <Asns href={props.routes.slackAuth}>
                                <span>슬랙 로그인</span>
                                <Image src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
                            </Asns>
                        </div>
                        <Bottom_box>
                            <a href={props.routes.home}>
                                <Span_line>
                                    비밀번호를 잊으셨나요?
                                </Span_line>
                            </a>
                            <a href={props.routes.join}>
                                <Span_line>
                                    회원가입
                                </Span_line>
                            </a>

                        </Bottom_box>
                    </Box_img>
                </Divs>
            </BaseLayout>
        )
    }


    return (
        Auths()
    );
}



export default Login;