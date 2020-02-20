import React from "react";
import routes from "../routes";

//const joins = pug.complieFile("join.pug");


function Login(props){
const Auths = () => {
    return (
    <React.Fragment>
    <a href={props.routes.googleAuth}>구글 로그인</a>
    <a href={props.routes.naverAuth}>네이버 로그인</a>
    <form action={props.routes.login} method="post">
    <input type="email" name="email" placeholder="이메일"></input>
    <input type="password" name="password" placeholder="패스워드"></input>
    <input type="submit" value="로그인" ></input>
    </form>
    </React.Fragment>
    )}


    return (
        Auths()
    );
}



 export default Login;