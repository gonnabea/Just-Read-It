import React from "react";
import Title from "./title";



// const redColor = styled.div`
//     color: blue;

// `;


class editProfile extends React.Component {
    render() {
        return (

            <div className="user_edit proile">
                <Title style={margin} />
                <form action={this.props.routes.editUser(this.props.user.id)}>
                    <input type="text" name="username" placeholder="닉네임"/>
                    <input type="file" name="profilePhoto" placeholder="프로필 사진" />
                    <input type="password" name="password" placeholder="변경할 비밀번호" />
                    <input type="password" name="password2" placeholder="비밀번호 확인" />
                    <input type="submit" value="프로필 수정" />
                </form>
            </div>

        )
    }
}

export default editProfile;