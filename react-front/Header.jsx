
import React from "react";
import routes from "../routes"

function Header(props){
    
    return( 
        <div className="home">
        <a href={props.routes.home}>
        <img src="images\Book-Worm.jpg" alt="" width="100vh"/>
        </a>
        <a href={props.routes.profile(props.user.id)}>프로필</a>
      {/*<a href={routes.profile(props.user.id)}>
      <img src={props.user.profilePhoto} alt="Profile photo." width="50vh"></img>
    </a>
    {<a href={routes.myBookList(user.id)} >내 서재</a>}*/}
      {/* <a href={routes.addBook}> 새로운 책 등록</a>, */}
      <form action={routes.search} method="post">
          <input type="text" name="search"  required={true} placeholder="검색"/>
          <input type="submit" value="검색"/>
          {/* <i className="fa fas-search fa-2x"></i> */}
      </form>
      <a href={routes.login}>로그인</a>
      <a href={routes.logout}> 로그아웃</a>
      <a href={routes.join}>가입</a>
      <a href={routes.addBook}>새로운 책 등록</a>
      </div>    
    );
}


export default Header;