import React from "react";
import routes from "../routes";

//const joins = pug.complieFile("join.pug");

function Login(){
    return(
        <form action={routes.login} method="post">
    <input type="email" name="email" placeholder="이메일"></input>
    <input type="password" name="password" placeholder="패스워드"></input>
    <input type="submit" value="로그인" ></input>
    </form>
    );
}

class Join extends React.Component{

    render(){ return Login();
    }
}

 export default Join;