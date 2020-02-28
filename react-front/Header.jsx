
import React from "react";
import routes from "../routes"
import Title from "./title";

function Header(props) {
  const style = {
    postion: "absolute",
    color: "red",
  }
  const headerStyle = {
    width: "100%",
    backgroundColor: "rgba(203, 202, 204, 0.281)",
    top: "0",
    left: "0",
  }
  const pstyle = {
    width: "35%",
    position: "absolute",
    color: "red",
    fontSize: "1rem",
    right: "2rem",
    top: "0.7rem",
    textDecoration: "none",
    textAlign: "end",
  }
  const amrgin = {
    margin: "7px",
    textDecoration: "none",
    color: "blue",
    cursor: "pointer",
  }
  const nouser = {
    color: "red",
    display: "inline-block",
    margin: "0.4rem",
    padding: "0",

  }
  const profilt = {
    postion: "relative",
    color: "red",
    textDecoration: "none",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "0.6rem",
  }
  function ProfileLink() {
    if (props.user) {
      return (
        <a href={props.routes.profile(props.user.id)} style={profilt}>프로필</a>
      )
    } else {
      return (
        <h4 style={nouser}>로그인 된 유저가 없습니다.</h4>
      )
    }
  }
  function CheckLogin() {
    if (props.user) {
      return (
        <>
          <a href={routes.logout} style={amrgin}> 로그아웃</a>
          <a href={routes.addBook} style={amrgin}>새로운 책 등록</a>
          <a href={routes.myBookList(props.user.id)} style={amrgin}>즐겨찾기 목록</a>
        </>)
    } else {
      return (
        <>
          <a href={routes.login} style={amrgin}>로그인</a>
          <a href={routes.join} style={amrgin}>가입</a>
        </>
      )
    }
  }

  return (
    <div className="header" style={headerStyle}>
      <Title />
      <div className="flex_box" style={pstyle} >


        <ProfileLink />
        {/*<a href={routes.profile(props.user.id)}>
      <img src={props.user.profilePhoto} alt="Profile photo." width="50vh"></img>
    </a>
    {<a href={routes.myBookList(user.id)} >내 서재</a>}*/}
        {/* <a href={routes.addBook}> 새로운 책 등록</a>, */}
        <form action={routes.search} method="post">
          <input type="text" name="search" required={true} placeholder="검색" style={amrgin} />
          <input type="submit" value="검색" style={amrgin} />
          {/* <i className="fa fas-search fa-2x"></i> */}
        </form>
        <CheckLogin />
      </div>
      <style jsx>{`
        html, body {
          margin: 0;
          padding:0;
        }
      `}</style>
    </div>
  );
}


export default Header;