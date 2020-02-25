
import React from "react";
import routes from "../routes"
import Title from "./title";

function Header(props){

  const style={
    postion:"absolute",
    color:"red",
  }
      
  const pstyle={
    position:"absolute",
    color:"red",
    fontSize: "1rem",
    right:"10px",
    top:"10px",
    padding:"10px",
    textDecoration: "none",

  }
  const amrgin={
    margin:"7px",
    textDecoration: "none",

  }


  function ProfileLink(){  
  if(props.user){
    return(
      <a href={props.routes.profile(props.user.id)} style={pstyle}>프로필</a>
    )
    }else {
      return(
        <h2>로그인 된 유저가 없습니다.</h2>
      )
    }  
  }
  function CheckLogin() {
  if(props.user){
    return ( 
      <>
    <a href={routes.logout} style={amrgin}> 로그아웃</a>
    <a href={routes.addBook} style={amrgin}>새로운 책 등록</a>
    </>)
  }else{
    return ( 
    <>
    <a href={routes.login} style={amrgin}>로그인</a>
    <a href={routes.join} style={amrgin}>가입</a> 
    </>
    )
  }
}

    return( 
      <div className="header">
          <Title/>
          <div className="flex_box"style={pstyle} >
      
        
        <ProfileLink/>
      {/*<a href={routes.profile(props.user.id)}>
      <img src={props.user.profilePhoto} alt="Profile photo." width="50vh"></img>
    </a>
    {<a href={routes.myBookList(user.id)} >내 서재</a>}*/}
      {/* <a href={routes.addBook}> 새로운 책 등록</a>, */}
      <form action={routes.search} method="post">
          <input type="text" name="search"  required={true} placeholder="검색" style={amrgin}/>
          <input type="submit" value="검색" style={amrgin}/>
          {/* <i className="fa fas-search fa-2x"></i> */}
      </form>
      <CheckLogin/>
      </div>
      </div>      
    );
}


export default Header;