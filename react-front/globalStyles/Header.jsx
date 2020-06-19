import React from "react";
import ReactDOM from 'react-dom';
import routes from "../../routes"
import Title from "../title";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./ResetCss";

const Div = styled.div`
  width:100%;
  height:60px;
  position:fixed;
  
  display:flex;
  /* background:linear-gradient(180deg, rgba(27,234,100,0.25) 0%, rgba(0,255,192,0.25) 50%, rgba(16,193,255,0.25) 100%); */
  background: linear-gradient(180deg, rgba(246,154,59,0.25) 0%, rgba(246,186,59,0.25) 50%, rgba(246,185,59,1) 100%);
  justify-content:space-between;
  /*position:fixed;*/
  z-index:5;
  scroll-behavior: smooth;
  align-items:center;
  :hover{
    animation:hovers1 0.3s linear;
    animation-fill-mode:forwards;
    /* #10abff, #1beabd */
    @keyframes hovers1 {
      0%{
        background-color:rgba(255, 255, 255, 0.103);
      }
      100%{
        background-color:white;

      }
    }

    @keyframes hovers2 {
      0%{
        background: linear-gradient(82deg, rgba(255,33,33,0) 0%, rgba(255,219,80,0) 51%, rgba(29,62,255,0) 100%);
      }
      10%{
        background:linear-gradient(82deg, rgba(255,33,33,0.1) 0%, rgba(255,219,80,0.1) 51%, rgba(29,62,255,0.1) 100%);
      }
      20%{
        background:linear-gradient(82deg, rgba(255,33,33,0.2) 0%, rgba(255,219,80,0.2) 51%, rgba(29,62,255,0.2) 100%);
      }
      30%{
        background:linear-gradient(82deg, rgba(255,33,33,0.3) 0%, rgba(255,219,80,0.3) 51%, rgba(29,62,255,0.3) 100%);
      }
      40%{
        background:linear-gradient(82deg, rgba(255,33,33,0.4) 0%, rgba(255,219,80,0.4) 51%, rgba(29,62,255,0.4) 100%);
      }
      50%{
        background:linear-gradient(82deg, rgba(255,33,33,0.5) 0%, rgba(255,219,80,0.5) 51%, rgba(29,62,255,0.5) 100%);
      }
      60%{
        background:linear-gradient(82deg, rgba(255,33,33,0.6) 0%, rgba(255,219,80,0.6) 51%, rgba(29,62,255,0.6) 100%);
      }
      70%{
        background:linear-gradient(82deg, rgba(255,33,33,0.7) 0%, rgba(255,219,80,0.7) 51%, rgba(29,62,255,0.7) 100%);
      }
      80%{
        background:linear-gradient(82deg, rgba(255,33,33,0.8) 0%, rgba(255,219,80,0.8) 51%, rgba(29,62,255,0.8) 100%);
      }
      90%{
        background:linear-gradient(82deg, rgba(255,33,33,0.9) 0%, rgba(255,219,80,0.9) 51%, rgba(29,62,255,0.9) 100%);
      }
      100%{
        background:linear-gradient(82deg, rgba(255,33,33,0.9) 0%, rgba(255,219,80,0.9) 51%, rgba(29,62,255,0.9) 100%);
      }
    }
  }
`;

const Imag_styles = styled.img`
  position: relative;
  width:8rem;
  height:63px;
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
  display:flex;
  margin:0.7rem;
  text-decoration:none;
  align-items:center;
  color:${props => props.color || "white"};
  font-size:${props => props.font_size || "15px"};

  :hover{
    &>i:nth-child(1){
      color:#F6B93B;
    }
  }

  &>i:nth-child(1){
    align-self:center;
    margin-right:1vw;
    color:#f6b93b;
    position:relative;
    &:hover{
      color:black;
    }
    @media screen and (max-device-width: 420px)
    {
    transform:scale(1.4);
    }
  }
`;

const Search_box = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
  align-items:center;
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
  ::placeholder{
    font-weight:normal;
  }
  font-weight:700 ;
   
  @keyframes hover_animation {
    0% {
      box-shadow: 0 30px 60px -12px #F6B93B,
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    }
 
    50% {
        box-shadow: 0px 60px 17px -38px #F6B93B;
    }
    100% {
        box-shadow: 1px 20px 10px -20px #F6B93B;
    }
  }

  &:hover{
    animation: hover_animation 2s ease-in-out infinite forwards;
  } 

    &:focus{
      /*background-color:#b8e994;*/
      color:#F6B93B;

      outline:none;
      cursor: pointer;
      animation: search_width th 0.4s linear forwards;

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

const Profile_img = styled.img`
  width:50px;
  height:45px;
  position: relative;
  right:13px;
  top:0;
  border-radius:100%;
  cursor:pointer;
  z-index: 2;
`; 
 
const Icon_box = styled.div`
  position:absolute;
  right:1.5%;
  top:5%;
  display:flex;
  border-radius:10px;
  color:black;
  height:30vh;
    /* background-color:rgba(255,255,255,1); */
    /* box-shadow: 0px 3.5px 5px 3.5px rgba(0,0,0,0.75); */
  
  &>i{
    position:absolute;
    right:0;
    top:0;
    color:#F6B93B;
  }

  
`;

const Form = styled.form`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center; 

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
  color:#F6B93B;
  :hover{
    /* color:#1B9CFC; */
    color:#F6B93B;
     &::after {
      content: " ";
      animation: hover_border 0.35s linear forwards;
      /* color:#1B9CFC; */
    }
  } 
  position:relative;
  z-index:2;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


  @keyframes hover_border{
    0%{
        border-bottom: 2.5px solid black;
        width: 0%;
        
    }
    100%{
        border-bottom: 2.5px solid black;
        width: 100%;
    }
  }  

`;

const Icon = {
  zIndex: "2",
  marginRight: "-2.5vh"
}

const Log_text = styled.span`
  position:relative; 
  top:25vh;
  height:100%;
  width:100%;
  font-size:1rem;
`;
const Icon_nav_ul = styled.ul`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 25px 0 #aaa4a4;
    width: 200px;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: 20px;
    border: solid 1px black; 
    font-size: 18px;
    @keyframes showPopUp{
      from{
        opacity: 0;
        
      }
      to{
        opacity: 1;
  
      }
    }
    @keyframes hidePopUp{
      from{
        opacity: 1;
      }
      to{
        opacity: 0;
      }
    }
    @media screen and (max-device-width: 450px){
      height: 300px;
    }
`;

const LinkInLogout = styled.a`
  color:black;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 45%;
  font-size: 20px;
`;

const LinkInLogout_text = styled.span`
  color:black;
  margin-left: 10px;
  font-weight: 700;
`
const LinkInLogoutBox = styled.div`
  background-color: rgba(252, 168, 63, 0.5);
  height:100%;
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 40px white;
`;

const MenuLink = styled.a`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  :hover{
    background-color: skyblue;
    
  }

`;

const MenuNav = styled.nav`
  width: 100%;
  position: relative;
  left: 10px;
`

function Header(props) {
  function ProfileLink() {
    if (props.user) {
      return (
        <>
          <MenuLink  href={`/${props.routes.profile(props.user.id)}`}>
            <MenuNav >
              😎 프로필
            </MenuNav>
          </MenuLink>
        </>

      )
    } else{
        return(
          <>
          </>
        )
    }
  }
  function ProfileImage() {
    if (props.user) {
      return (
        <Profile_img id="header_icon_box" src={props.user.profilePhoto} />
      )
    }
    else {
      return (
      <>
        <LinkInLogoutBox>
          <LinkInLogout href={routes.login}>
            <i className="fas fa-key"></i>
            <LinkInLogout_text>
              Login
            </LinkInLogout_text>
          </LinkInLogout>
          <LinkInLogout href={routes.join}>
            <i class="fas fa-sign-in-alt"></i>
            <LinkInLogout_text>
              Join
            </LinkInLogout_text>
          </LinkInLogout>
        </LinkInLogoutBox>
      </>
       
      )
    }
  }

  function CheckLogin() {
    if (props.user) {
      return (
        <>
          {/* <Prifile_img className="header_icon_img" src={props.user.profilePhoto} /> */}
          <MenuLink href={routes.logout}>
            <MenuNav>
              🔑 Logout
            </MenuNav>
          </MenuLink>
          <MenuLink href={routes.addBook}>
            
            <MenuNav>
              📔 새로운 책 등록
            </MenuNav>
          </MenuLink>
          <MenuLink href={`/${routes.myBookList(props.user.id)}`}>
            <MenuNav>
              📚 내 서재
            </MenuNav>
          </MenuLink>
        </>)
    }else{
      return(
        <>
        </>
      )
    }
  }

  return (
    <BaseLayout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
      <script defer src="/vanilla/header.js"></script>
     
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

          {/* <Imag_styles src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKN4UJ5OtVmqJKkhARClcCZO5Btt3rNI5trOE1pHvVbX78g2m-" /> 
          오리진 이미지(?)
          */}
      
          <Imag_styles src="/images/orangeBook.png" />
       
        </a>

        <Search_box>
          <Form id="header_form" action={routes.search} autoComplete="off" method="post">
            <i style={Icon} className="fas fa-search"></i>
            <Sinput id="header_search_input" height="2.3rem" type="text" name="search" required={true} placeholder="제목,작가,소개글 ..." autocomplete="nope" className="button" />
            <Binput margin_left="0.5rem" type="submit" value="검색" />
          </Form>
        </Search_box>

          <ProfileImage />
        <Icon_box >


          <Icon_nav_ul id="header_icon_ul">
              <ProfileLink />
              <CheckLogin />
          </Icon_nav_ul>

        </Icon_box>

      </Div>
    </BaseLayout>

  );
}


export default Header;
