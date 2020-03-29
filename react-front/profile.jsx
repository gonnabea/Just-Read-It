import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Image = styled.img`
    width:10vh;
    height:10vh;
    border-radius:100%;
    
`;

const Div = styled.div`
    position:relative;
    width:100%;
    height:100%;
    align-self: center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-repeat:repeat;
    background-size:cover;
    background-image:url("https://cdn.pixabay.com/photo/2017/07/26/17/41/watercolour-2542465_960_720.jpg"); 
`;

const A = styled.a`
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
    font-size:1.5rem
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
`;

const Grid_area = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    @media screen and (min-width: 300px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1000px){
        grid-template-columns: repeat(5, 1fr);
    }
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

class profile extends React.Component {
    render() {

        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Div>
                    <Flex_div marginTop="10vh">
                        <Image src={this.props.currentUser.profilePhoto} />
                        <A href={this.props.routes.editUser}>
                            프로필 수정
                        </A>
                        <h2 >{this.props.currentUser.username}
                            님이 등록한 책 리스트
                        </h2>
                       
                        <Grid_area>
                            {this.props.currentUser.uploadedBooks.map(book => {
                                return (
                                    <A href={`/${this.props.routes.bookDetail(book.id)}`}>
                                        <Image src={book.imageUrl} />
                                        <span>{book.title}</span>
                                        <span>{book.author}</span>
                                        {/* <h4 style={{height:"20vh"}}>{book.description}</h4> */}
                                    </A>
                                )
                            })}
                        </Grid_area>
                        <h1 style={{marginTop:"10rem"}}>
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
                                                {JSON.stringify(review.createdAt)}
                                            </h3>
                                        </MyComments>
                                        )
                            })}
                        </Review_box>
                    </Flex_div>
                </Div>
                <Background_image>

                </Background_image>
                <script src="/vanilla/profile.js"></script>

            </BaseLayout>
        )
    }

}

export default profile