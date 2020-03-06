import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Div = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

`;

const Back_ground = styled.div`
    display:flex;
    width:30rem;
    height:20rem;
    flex-direction:column;
    background-color:rgba(229, 224, 149, 0.582);
    box-shadow: 0px 10px 5px 1px rgba(0,0,0,0.75);
    justify-content:center;
    align-items:center;
    &>form>*{
        display:flex;
        flex-direction:column;
        margin:0.4rem;
    }
`;

class editProfile extends React.Component {
    render() {
        return (
            <BaseLayout>
                <GlobalStyle />
                    {Header(this.props)}
                <Div className="user_edit proile">
                    <Back_ground>
                        <form action={this.props.routes.editUser(this.props.user.id)}>
                            <input type="text" name="username" placeholder="닉네임" />
                            <input style={{color:"red"}} type="file" name="profilePhoto" placeholder="프로필 사진" />
                            <input type="password" name="password" placeholder="변경할 비밀번호" />
                            <input type="password" name="password2" placeholder="비밀번호 확인" />
                            <input type="submit" value="프로필 수정" />
                        </form>
                    </Back_ground>
                </Div>
            </BaseLayout>
        )
    }
}

export default editProfile;