import React from "react";
class profile extends React.Component{
    render(){
        return(
            
    <>
    <form action={this.props.routes.editUser(this.props.user.id)}>
    <input type="text" name="username" placeholder="닉네임"/>
    <input type="file" name="profilePhoto" placeholder="프로필 사진"/>
    <input type="password" name="password" placeholder="변경할 비밀번호"/>
    <input type="password" name="password2" placeholder="비밀번호 확인"/>
    <input type="submit" value="프로필 수정"/>
    </form>
    </>
        )
    }
}

export default profile;