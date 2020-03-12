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
  :hover{
    color:#9ACD32;
  }
`;




const Search_box = styled.div`
  width:100%;
  position:absolute;
  display:flex;
  right:-30%;
  &:hover{
    
    /* animation:search_width 1s linear;
    animation-fill-mode: forwards;   */
    
  }

  @keyframes search_width{
    0%{
      &>input:first-child{
        
        margin-left:0;
        width:25vh;
      }
    }
    100%{
      &>input:first-child{
      margin-left:-10vh;

      width:60%;
      }

    }
  }
  

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

const handles = ()=>{
  alert("nao deu erro");
}

const handleClick = ()=>{
  const b = ReactDOM.document.querySelector(".button");
  b.innerWidth="5vh";
  a.addEventListener("click",handles);
}


const Sinput = styled.input`
  align-items:center;
  margin:0.6rem auto;
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
     animation: search_width 0.5s linear;
      animation-fill-mode: forwards;   

  }

  @keyframes search_width{
    0%{
      margin-left:0;
      width:25vh;
    }
    100%{
      margin-left:-10vh;

    width:60%;

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
  display:block;
  width:40px;
  height:40px;
  border-radius:100%;
  margin-top:0.3rem;
  margin-left:0.3rem;
`;

const Icon_box = styled.div`
    position:absolute;
    right:1.5%;
    top:5%;
    opacity:1;
    width:35px;
    height:35px;

    :hover
    {
      opacity:0.7;
      cursor:pointer;
      width:50vh;
      height:40vh;
      background:black;
      background-color:black;
      color:white;
      ul:nth-child(2){
        visibility:visible;
        
    }

    img:first-child
    {
      position:absolute;
      right:0;
      top:0;
    }

    i:first-child
    {
      position:absolute;
      right:0;
      top:0;
    }
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
     width:80%;
     /* display:flex;
    justify-content:center;
    align-items:center; */
  margin-top:0.8rem;

`;
const User_none = styled.div`
    position:absolute;
    top:0;
    right:10%;
`;

const Menu_img = styled.img`
  display:block;
  width:40px;
  height:40px;
  border-radius:100%;
  margin-top:0.3rem;
  margin-left:0.3rem;
`;

function Header(props) {

  function ProfileLink() {
    if (props.user) {
      return (
        <>
          <A href={`/${props.routes.profile(props.user.id)}`}>
              <Prifile_img src={props.user.profilePhoto} />
              <span>
                프로필
              </span>
          </A>
        </>

      )
    } else {
      return (
        <div>
            <h4 style={{ color: "red" }}>로그인 된 유저가 없습니다.</h4>
        </div>
      )
    }
  }
  function ProfileImage() {
    if(props.user)
    {

      return(
        <Prifile_img src={props.user.profilePhoto} />  
      )
    }
    else{
      return(
        <i class="fas fa-bars fa-2x"></i>
      )
    }
  }
  
  function CheckLogin() {
    if (props.user) {
      return (
        <>
        <Prifile_img src={props.user.profilePhoto} /> 
          <A href={routes.logout}> 로그아웃</A>
          <A href={routes.addBook}>새로운 책 등록</A>
          <A href={`/${routes.myBookList(props.user.id)}`}>내 서재</A>
        </>)
    } else {
      return (
        <>
          <A color="blue" href={routes.login}>
            로그인
          </A>
          <A color="blue" href={routes.join}>
            가입
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
          <Form  action={routes.search} method="post">
            <Sinput margin_left="8rem" height="2.3rem"  type="text" name="search" required={true} placeholder="제목,작가,소개글 ..." className="button"/>
            <Binput margin_left="0.5rem" type="submit" value="검색" />
          </Form>
        </Search_box>

          <Icon_box>
          
            <ProfileImage/>
            <ul>
              <li>
                <ProfileLink />
              </li>
              <li>
                <CheckLogin />
              </li>
            </ul>

          </Icon_box>

      </Div>
    </BaseLayout>

  );
}


export default Header;
