
import React from "react";
import routes from "../routes"
import Title from "./title";
import { BaseLayout } from "./layout";
import styled from "styled-components";

const HeaderStyle = styled.header`
height: 10vh;
width: 100%;
display: flex;
`

function Header(props) {
  
  function ProfileLink() {
    if (props.user) {
      return (
        <a href={props.routes.profile(props.user.id)}>프로필</a>
      )
    } else {
      return (
        <h4>로그인 된 유저가 없습니다.</h4>
      )
    }
  }
  function CheckLogin() {
    if (props.user) {
      return (
        <>
          <a href={routes.logout}> 로그아웃</a>
          <a href={routes.addBook}>새로운 책 등록</a>
          <a href={routes.myBookList(props.user.id)}>즐겨찾기 목록</a>
        </>)
    } else {
      return (
        <>
          <a href={routes.login}>로그인</a>
          <a href={routes.join}>가입</a>
        </>
      )
    }
  }

  return (
      <BaseLayout>
      <HeaderStyle>
      <Title />
      


        <ProfileLink />
        <form action={routes.search} method="post">
          <input type="text" name="search" required={true} placeholder="검색" />
          <input type="submit" value="검색" />
        </form>
        <CheckLogin />
        </HeaderStyle>
        </BaseLayout>
  );
}


export default Header;