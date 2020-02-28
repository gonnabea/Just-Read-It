import React from "react";
import Title from "./title";


const styles = {
    dispay: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    height: "70vh",

}
const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2.5rem",
}

// const redColor = styled.div`
//     color: blue;

// `;


const inputStyle = {
    display: "block",
    margin: "0.5rem",
    width: "20%",

}
const margin = {
    margin: "1.4rem",

}
class editProfile extends React.Component {
    render() {
        return (

            <div className="user_edit proile" style={styles}>
                <Title style={margin} />
                <form action={this.props.routes.editUser(this.props.user.id)} style={formStyle}>
                    <input type="text" name="username" placeholder="닉네임" style={inputStyle} />
                    <input type="file" name="profilePhoto" placeholder="프로필 사진" style={inputStyle} />
                    <input type="password" name="password" placeholder="변경할 비밀번호" style={inputStyle} />
                    <input type="password" name="password2" placeholder="비밀번호 확인" style={inputStyle} />
                    <input type="submit" value="프로필 수정" style={inputStyle} />
                </form>
                <style jsx>{`
            html, body {
              margin: 0;
              padding:0;
            }
          `}</style>
            </div>

        )
    }
}

export default editProfile;