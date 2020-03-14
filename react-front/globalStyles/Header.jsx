import React from "react";
import ReactDOM from 'react-dom';

import routes from "../../routes"
import Title from "../title";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./ResetCss";

const Div = styled.div`
  width:100%;
  height:10vh;
  position:fixed;

  display:flex;
  background-color:rgba(255, 255, 255, 0.233);
  justify-content:space-between;
  /*position:fixed;*/
  z-index:5;
  scroll-behavior: smooth;
  :hover{
    animation:hovers 0.5s;
    animation-fill-mode:forwards;
    @keyframes hovers {
      0%{
        background-color:rgba(255, 255, 255, 0.233);
      }
      100%{
        background-color:rgba(255, 255, 255, 1);
      }
    }
  }
`;

const Imag_styles = styled.img`
position: relative;
width:8rem;
height:10vh;
/* 15% */
display:inline-block;
/* filter: grayscale(20%); */
color:blue;
z-index:2;
&:hover{
  animation: hover_turn 2s linear infinite forwards;
}
  @keyframes hover_turn{
    0%{
      transform: rotateY(0turn);
    }
    50%{
      transform: rotateY(0.5turn);
    }
    100%{
      transform: rotateY(1turn);
    }
  }
`;

const Logo_a = styled.a`


&:hover{
  animation: hover_turn 1s linear infinite forwards;
}
  @keyframes hover_turn{
    0%{

    }
    50%{
      transform:rotateY(0.5);
      
    }
    100%{
      transform:rotateY(1);

    }
  }
`;

const A = styled.a`
  margin:0.7rem;
  text-decoration:none;
  color:${props => props.color || "white"};
  font-size:${props => props.font_size || "15px"};
  :hover{
    color:#9ACD32;
  }
  
`;




const Search_box = styled.div`
  width:100%;
  position:absolute;
  top:3%;
  right:0;
  display:flex;
  justify-content: center;
  
  align-items:center;
  /* right:-30%; */
  

`;

const Input = styled.input`
float:left;
align-items:center;
margin:0.6rem;
width:${props => props.width || "35px"};
height:${props => props.height || "25px"};
margin-left:${props => props.margin_left || "0px"}; 

border-radius: 20px;
&:hover{
  cursor: pointer;
 
}

@media screen and (max-width: 900px)
{ 
  width:15rem;
  display:flex;

}

`;

const handles = () => {
  alert("nao deu erro");
}

const handleClick = () => {
  const b = ReactDOM.document.querySelector(".button");
  b.innerWidth = "5vh";
  a.addEventListener("click", handles);
}


const Sinput = styled.input`
  align-items:center;
  width:${props => props.width || "20vh"};
  height:${props => props.height || "3vh"};
  margin-left:${props => props.margin_left || "0px"}; 
  border-radius: 20px;
  border: solid 2px black;
  text-align:center;
   
  @keyframes hover_animation {
    0% {
      box-shadow: 0 30px 60px -12px rgba(70, 70, 209, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }
 
    50% {
        box-shadow: 0px 60px 17px -38px rgba(73,62,224,1);
    }
    100% {
        box-shadow: 1px 20px 10px -20px rgba(73,62,224,1);
    }
  }

  :hover{
    animation: hover_animation 1.5s linear infinite forwards;
  } 

  &:focus{
    outline:none;
    cursor: pointer;
    animation: search_width 0.4s linear forwards;
  }
 
  @keyframes search_width{
    0%{
      margin-left:0;
      width:20vh;
    }
    100%{
      width:50%;
    }
  }

  @media screen and (max-width: 900px)
  { 
    width:15rem;
    display:flex;
  }

`;

const Log = styled.div`
  position:absolute;
  right:0;
  margin:1.3rem;
  
  @media screen and (max-width: 900px)
  { 
    display:none;
  }
`;

const Binput = styled.input`
  margin:0.6rem;
  width:${props => props.width || "35px"};
  height:${props => props.height || "25px"};
  margin-left:${props => props.margin_left || "0px"}; 
  border-radius: 5px;
  background-color: black;
  color:white;
  border:none;

  &:hover{
  cursor: pointer;
  } 

  @media screen and (max-width: 900px)
  { 
  position:absolute;
  right:0;
  top:0;
  margin-right:-3rem;
  margin-top:1rem;

  }

`;

const Prifile_img = styled.img`
  width:7vh;
  height:7vh;
  position:absolute;
  right:0;
  top:0;
  border-radius:100%;
  cursor:pointer;
`;

const Icon_box = styled.div`
    position:absolute;
    right:1.5%;
    top:5%;
    width:35px;
    height:35px;
    border-radius:10px;
    &>i{
      position:absolute;
      right:0;
      top:0;
    }


  ul:nth-child(2)
  {
    visibility:hidden;
   
    &>li{
    display:flex;
    flex-direction:column;
    /* align-items: flex-end; */
    }
  }


`;
const Form = styled.form`
     width:100%;
     display:flex;
    justify-content:center;
    align-items:center; 
    margin-top:0.8rem;

`;
const User_none = styled.div`
    position:absolute;
    top:0;
    right:10%;
`;

const Menu_img = styled.img`
  display:block;
  width:10vh;
  height:10vh;
  border-radius:100%;
  margin-top:0.3rem;
  margin-left:0.3rem;
`;
const Span_size = styled.span`
  font-size:2.6vh;
  border-bottom: 1px solid white;
  :hover{
    color:#9ACD32;
  }
  
`;
function Header(props) {

  function ProfileLink() {
    if (props.user) {
      return (
        <>
          <A href={`/${props.routes.profile(props.user.id)}`}>
            <Prifile_img className="header_icon_img" src={props.user.profilePhoto} />
            <Span_size>
              프로필
              </Span_size>
          </A>
        </>

      )
    } else {
      return (
        <>
          <span style={{ color: "red", fontSize: "1rem" }}>
            로그인 된 유저가 없습니다.
            </span>
        </>
      )
    }
  }
  function ProfileImage() {
    if (props.user) {

      return (
        <Prifile_img src={props.user.profilePhoto} />
      )
    }
    else {
      return (
        <i style={{ cursor: "pointer" }} class="fas fa-bars fa-3x" id="header_icon_bars"></i>
      )
    }
  }

  function CheckLogin() {
    if (props.user) {
      return (
        <>
          <Prifile_img className="header_icon_img" src={props.user.profilePhoto} />
          <A href={routes.logout}>
            <Span_size>
              로그아웃
              </Span_size>
          </A>
          <A href={routes.addBook}>
            <Span_size>
              새로운 책 등록
            </Span_size>
          </A>
          <A href={`/${routes.myBookList(props.user.id)}`}>
            <Span_size>
              내 서재
            </Span_size>
          </A>
        </>)
    } else {
      return (
        <>
          <A color="blue" href={routes.login}>
            <Span_size>
              로그인
          </Span_size>

          </A>
          <A color="blue" href={routes.join}>
            <Span_size>
              가입
          </Span_size>

          </A>
        </>
      )
    }
  }

  return (
    <BaseLayout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />

      <GlobalStyle />
      <Div className="class_name_header" >
        <a href={routes.home}>
          {/* <Imag_styles src="/images/Long_Story.png" /> */}
          {/* <Imag_styles src="https://cdn.pixabay.com/photo/2017/07/28/20/14/ribbon-2549692_960_720.png" /> */}

          {/* book↓*/}
          {/* <Imag_styles src="https://cdn.pixabay.com/photo/2017/05/27/13/33/logo-2348459_960_720.jpg" /> */}

          {/* 팬더↓*/}
          {/* <Imag_styles src="https://cdn.pixabay.com/photo/2014/04/03/10/00/panda-309548_960_720.png" /> */}

          {/* 오리↓*/}
          {/* <Imag_styles src="https://cdn.pixabay.com/photo/2017/02/01/09/57/animal-2029283_960_720.png" /> */}

          <Imag_styles src="https://cdn.pixabay.com/photo/2016/12/08/15/45/panda-1892023_960_720.png" />
        </a>

        <Search_box>
          <Form action={routes.search} method="post">
            <i class="fas fa-search"></i>
            <Sinput  height="2.3rem" type="text" name="search" required={true} placeholder="제목,작가,소개글 ..." className="button" />
            <Binput margin_left="0.5rem" type="submit" value="검색" />
          </Form>
        </Search_box>

        <Icon_box id="header_icon_box">

          <ProfileImage />
          <ul id="header_icon_ul">
            <li>
              <ProfileLink />
            </li>
            <li>
              <CheckLogin />
            </li>
          </ul>

        </Icon_box>

      </Div>
      <script src="/vanilla/header.js"></script>

    </BaseLayout>

  );
}


export default Header;
