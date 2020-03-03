import React from "react";
import routes from "../routes"
import Title from "./title";
import { BaseLayout } from "./layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Div = styled.div`
  width:100%;
  height:10vh;
  position:sticky;
  display:flex;
  background-color:rgba(255, 235, 205, 0.233);
  justify-content:space-between;
`;
const RightDiv = styled.div`
  margin:0;
  justify-content:space-between;
  width:80%;
  text-align:end;
   
@media screen and (max-width: 1000px)
{ 
    display:none;
}
`;

const A = styled.a`
  margin:0.7rem;
  text-decoration:none;
  color:${props => props.color || "red"};
  
@media screen and (max-width: 900px)
{ 
    display:none;
}
`;
const Box_right = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
`;
const Search_box = styled.div`
  position:absolute;
  margin:0 auto;
  display:flex;

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
const Sinput= styled.input`
width:100%;
align-items:center;
margin:0.6rem auto;
width:${props => props.width || "35px"};
height:${props => props.height || "25px"};
margin-left:${props => props.margin_left || "0px"}; 

border-radius: 20px;
&:hover{
  cursor: pointer;
}

@media screen and (max-width: 900px)
{ 
  html 1rem = 16px
  html 1rem = 10px

  width:15rem;
  display:flex;

}

`;
const Log=styled.div`
  position:absolute;
  right:0;
  margin:1.3rem;
  
@media screen and (max-width: 900px)
{ 
  display:none;
}
`;
const Binput= styled.input`
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
 position:absolute;
 right:0;
 top:0;
 margin-right:-3rem;
 margin-top:1rem;

}

`;

function Header(props) {

  function ProfileLink() {
    if (props.user) {
      return (
        <RightDiv>
          <A href={`/${props.routes.profile(props.user.id)}`}>
            <Log>
              프로필
              </Log>
            {/* <img src={user.profile} width="10rem" /> */}
          </A>
        </RightDiv>

      )
    } else {
      return (
        <RightDiv>
          <Log>
          <h4 style={{color:"red"}}>로그인 된 유저가 없습니다.</h4>
          </Log>
        </RightDiv>
      )
    }
  }
  function CheckLogin() {
    if (props.user) {
      return (
        <RightDiv>
          <A href={routes.logout}> 로그아웃</A>
          <A href={routes.addBook}>새로운 책 등록</A>
          <A href={`/${routes.myBookList(props.user.id)}`}>즐겨찾기 목록</A>
        </RightDiv>)
    } else {
      return (
        <RightDiv>
            <A color="blue" href={routes.login}>로그인</A>
            <A color="blue" href={routes.join}>가입</A>
        </RightDiv>
      )
    }
  }

  return (
    <BaseLayout>
      <GlobalStyle />
      <Div className="class_name_header" >
        <Title />
        <Box_right>
          <ProfileLink />
          <Search_box>
            {/*<a href={routes.profile(props.user.id)}>
      <img src={props.user.profilePhoto} alt="Profile photo." width="50vh"></img>
    </a>
    {<a href={routes.myBookList(user.id)} >내 서재</a>}*/}
            {/* <a href={routes.addBook}> 새로운 책 등록</a>, */}
            <form action={routes.search} method="post">
              <Sinput margin_left="8rem" height="2.3rem" width="30rem" type="text" name="search" required={true} placeholder="책 검색하기 ..." />
              <Binput margin_left="0.5rem" type="submit" value="검색" />
              {/* <i className="fa fas-search fa-2x"></i> */}
            </form>
          </Search_box>
          <CheckLogin />
        </Box_right>
      </Div>
    </BaseLayout>

  );
}


export default Header;