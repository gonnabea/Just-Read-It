import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const BookImage = styled.img`
    width:10vh;
    height:10vh;
`;

const ProfileImage = styled.img`
width:10vh;
    height:10vh;
    border-radius: 100%;
`

const Div = styled.div`
    position:relative;
    width:100%;
    height:100vh;
    align-self: center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-repeat:repeat;
    background-size:cover;
    background-color:#F9F7D6;
    /*background-image:url("https://cdn.pixabay.com/photo/2017/07/26/17/41/watercolour-2542465_960_720.jpg"); */
`;

const Book = styled.a`
    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin-top:0.6rem;
    color:${props => props.color || "black"};
    width:15vh;
    overflow:hidden;
    text-overflow:ellipsis;
    transform-style: preserve-3d;
    perspective: 650vh;
    font-size:1rem;
    color:blue;
    &>span:nth-child(2){
        overflow:hidden;
        text-overflow:ellipsis;
        font-size: 2.5vh;
        opacity:0.5;
        width:100%;
        height:56px;
    }
    &>span:nth-child(3){
        font-size: 2vh;
        opacity:0.5;
        width:100%;
        height:54.5px;
    }
    &:hover{
        &>span:nth-child(2){
        opacity:1;
        }
        &>span:nth-child(3){
        opacity:1;
        }
    }
    /*
    &>img:first-child{
        
        &:hover{
            animation: image_hover_turn 1.2s linear forwards

        }
        
        @keyframes image_hover_turn{
            0%{
                transform: rotateX(0turn) ;
            }
            50%{
                transform: rotateX(0.5turn); 
                
            }
            100%{
                transform: rotateX(1turn)  translateZ(30vh) translateY(0.5vh) ;
            }
        }
    }
    */

    @media screen and (max-width: 700px)
    { 
        &>span:nth-child(2){
            font-size:1rem;
        }
        &>span:nth-child(3){
            font-size:1rem;
        }
    }

    @media screen and (max-device-width: 420px)
    {
        &>span:nth-child(2){
            font-size:1.5rem;
        }
        &>span:nth-child(3){
            font-size:1.5rem;
        }
    }
`

const BookList = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
`;

const Background_image = styled.div`
    position:relative;
    z-index:-1;
    width:100%;
    height:100%;
    top:10;
    background-size:cover;
    background-image:url("https://cdn.pixabay.com/photo/2017/07/26/17/41/watercolour-2542465_960_720.jpg"); 
    
    @media screen and (min-height: 100vh)
    {
        height:100vh;
    }
`;
const Flex_div = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:${props => props.marginTop || "0"};
    color:grey;
    
`;

const Review_box = styled.div`
    position:relative;
    bottom:0;
    width:100%;
    display:flex;
    text-align:center;
    flex-wrap:wrap;
    margin:0 auto;
    justify-content:center;
    align-items:center;
`;

const MyComments = styled.div`
    margin:15px;
    border:1px solid #F6B93B;
    box-shadow: 0px 3.5px 7px 5px rgba(0,0,0,0.75);
    border-radius:5px;

    :hover{
        cursor:pointer;

    }

    @keyframes myComment{
        0%{

        }
        100%{
            transform:translateZ(100px);
        }
    }
`;

const UploadedBookInfo = styled.div`
display:flex;
`

const UploadedNum = styled.div`
width:20px;
height:20px;
background-color:white;
border-radius:100%;
color:yellowgreen;
display:flex;
justify-content:center;
align-items:center;
`

const EditProfileBtn = styled.a`

border-radius:20px;
background-color:#F7C04E;
color:white;
width: 15vh;
height: 4vh;
display:flex;
align-items:center;
justify-content:center;
:hover{
box-shadow: 3px 3px 3px #F7C04E;

}
`
const Username = styled.span`

`

const Email = styled.span`

`


const UploadedBookTitle = styled.span`

`
const ProfileArea = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    height:60vh;
`;

class profile extends React.Component {
    render() {
        let translated
        function translateTime(createdAt){
            translated = `${createdAt.getYear()+1900}년 ${createdAt.getMonth()+1}월 ${createdAt.getDate()}일`;
        }
        
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Div>
                    <Flex_div marginTop="10vh">
                        <ProfileArea>
                        <ProfileImage src={this.props.currentUser.profilePhoto} />
                        <Username>{this.props.currentUser.username}</Username>
                        <Email>{this.props.currentUser.email}</Email>
                        <EditProfileBtn href={this.props.routes.editUser}>
                            프로필 수정
                        </EditProfileBtn>
                        <UploadedBookInfo>
                        <UploadedBookTitle>
                            등록하신 책 
                        </UploadedBookTitle>
                        <UploadedNum>
                            {this.props.currentUser.uploadedBooks.length}
                        </UploadedNum>
                        </UploadedBookInfo>
                        <BookList>
                            {this.props.currentUser.uploadedBooks.map(book => {
                                return (
                                    <Book href={`/${this.props.routes.bookDetail(book.id)}`}>
                                        <BookImage src={book.imageUrl} />
                                        <span>{book.title}</span>
                                        <span>{book.author}</span>
                                        {/* <h4 style={{height:"20vh"}}>{book.description}</h4> */}
                                    </Book>
                                )
                            })}
                        </BookList>
                    </ProfileArea>
                        <h1>
                            {this.props.currentUser.username}
                            님이 작성하신 리뷰
                        </h1>
                        <Review_box>
                            {this.props.currentUser.reviews.map(review => {
                                return (
                                        <MyComments className="MyComments">
                                            <h3>
                                                {review.content}
                                            </h3>
                                            <h3>
                                                {review.rate}
                                            </h3>
                                            <h3>
                                                {translateTime(review.createdAt)}
                                                {translated}
                                            </h3>
                                        </MyComments>
                                        )
                            })}
                        </Review_box>
                    </Flex_div>
                </Div>
                
                <script src="/vanilla/profile.js"></script>

            </BaseLayout>
        )
    }

}

export default profile