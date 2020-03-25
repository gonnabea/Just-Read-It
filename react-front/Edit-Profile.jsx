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

    background: rgb(2,79,55);
    background: linear-gradient(128deg, rgba(2,79,55,1) 0%, rgba(5,140,205,0.9752275910364145) 51%, rgba(3,19,29,1) 99%);
    &>div:first-child{

    }

    &>div>form>input:last-child{
        &:active {
            #test{
                visibility: visible; 

            }

        }
    }

`;

const Back_ground = styled.div`
    display:flex;
    width:30rem;
    height:20rem;
    flex-direction:column;
    background-color:rgba(229, 224, 149, 0.582);
    justify-content:center;
    align-items:center;
    border-radius:6px;
    box-shadow: 0px 10px 5px 1px rgba(0,0,0,0.75);

    &>form>*{
        display:flex;
         flex-direction:column;
        margin:0.4rem;
    }
`;

const Change_img = styled.img`
    width:15rem;
    display:flex;
    /* visibility: hidden;  */
    position:absolute;
    margin:0 auto;
    z-index:2;
    border-bottom:3px solid red;

`;

/** <Change_img id="text" src="https://cdn.pixabay.com/photo/2018/03/15/16/17/sign-3228713_960_720.png"/> */
class editProfile extends React.Component {
    render() {
        return (
            <BaseLayout>
                <GlobalStyle />
                    {Header(this.props)}
                <Div className="user_edit proile">
                    <Back_ground>
                        <form action={this.props.routes.editUser} method="post" enctype="multipart/form-data">
                            <input type="text" name="username" placeholder="변경하실 닉네임" />
                            <input type="file" name="profilePhoto"  />
                            <input type="submit" value="프로필 수정" />
                        </form>
                   
                    </Back_ground>

                </Div>
            </BaseLayout>
        )
    }
}

export default editProfile;