import React from "react";
import routes from "../routes"


function Join(props) {

    return (
        <div className="join_box">
            <form action={props.routes.join} method="post">
                <input type="text" name="username" required={true} placeholder="닉네임" />
                <input type="text" name="email" required={true} placeholder="이메일" />
                <input type="password" name="password" required={true} placeholder="비밀번호" />
                <input type="password" name="password2" required={true} placeholder="비밀번호 확인"/>
                <input type="submit" value="검색" />
            </form>
        </div>
    );

}


export default Join;