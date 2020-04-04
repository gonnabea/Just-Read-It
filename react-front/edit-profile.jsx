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
  
`;

const Center_box = styled.div`
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
        align-items:center;
    }
    &>form>input{
        margin: 1.2vh;
        font-size: 2vh;
        width:100%;
        background:none;
        border: solid 0px;
        border-bottom: solid 0.15vh white; 
        
        ::placeholder{
            color: white;
            text-align:center;
        }
        :focus{
            color:#F6B93B;
            outline: none;
            animation: makeBorder 0.4s linear forwards;
            ::placeholder{
            color:#F6B93B;
            text-align:center;
            }
            @keyframes makeBorder {
                0%{
                    background:none;
                }
                100%{
                    border-bottom: solid 0.2vh #F6B93B;
                    background-color:white;
                }
            }
        }
    }
`;

const File_box =styled.div`
    margin:0.8rem;
     &>label{
        cursor:pointer;
        overflow: hidden;
        transition: all 0.3s;
        background: none;
        border: 3px solid #F8C152;
        border-radius: 5px;
        color: #fff;
        display: block;
        font-size: 1em;
        font-weight: bold;
        position: relative;
        text-transform: uppercase;

        &::before,
        &::after {
            background: #fff;
            content: '';
            position: absolute;
            z-index: -1;
        }
        :hover {
            color: #F8C152;
        }
        ::after {
            height: 100%;
            left: -20%;
            top: 0;
            transform: skew(-50deg);
            transition-duration: 0.6s;
            transform-origin: top left;
            width: 0;
        }
        :hover:after {
            height: 100%;
            width: 135%;
        }
    }

    input[type=file]
    {
        cursor:pointer;
        color:red;
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    }

`;


const Edit_button = styled.button`
    width:100%;
    font-size:1rem;
    border-radius: 4px;
    background-color: #F6BF4C;
    border: none;
    color: #FFFFFF;
    text-align: center;
    transition: all 0.5s;
    margin-left: 10.5px;
    cursor: pointer;
    &:hover{
        background-color: #FFFFFF;
        color: #F6BF4C;
    }
`;

const EditName = styled.input`
width: 100px;
`

class editProfile extends React.Component {
    render() {
        return (
            <BaseLayout>
                <GlobalStyle />
                    {Header(this.props)}
                <Div className="user_edit proile">
                    <Center_box>
                        <form autoComplete="off" action={this.props.routes.editUser} method="post" enctype="multipart/form-data">
                            <EditName  autoComplete="off" type="text" name="username" placeholder="변경하실 닉네임" />
                            <File_box>
                                <label for="profilePhoto">Profile Photo</label> 
                                <input type="file" name="profilePhoto" id="profilePhoto" />
                            </File_box>
                            <Edit_button>프로필 수정</Edit_button>
                        </form>
                    </Center_box>
                </Div>
            </BaseLayout>
        )
    }
}

export default editProfile;
