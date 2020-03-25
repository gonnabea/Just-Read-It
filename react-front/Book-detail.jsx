 import React from "react";
import { BaseLayout } from "./globalStyles/layout";
import Title from "./title";
import Header from "./globalStyles/Header";
import GlobalStyle from "./globalStyles/ResetCss";
import styled, { keyframes } from "styled-components";

class bookDetail extends React.Component {

    render() {
        const user = this.props.user;
        const book = this.props.book;
        const routes = this.props.routes;
        function CheckUser() {

            if (user && user.id == book.enrolledBy[0]._id) {
                return (
                    <>
                        <form action={routes.editBook(book.id)} method="post">
                            <input type="text" name="title" placeholder="수정할 이름" value={book.title} />
                            <textarea name="description" placeholder="상세내용" value={book.description} />
                            <input type="text" name="author" placeholder="작가 이름" value={book.author} />
                            <input type="submit" value="수정하기" />
                        </form>
                        <form action={routes.deleteBook(book.id)} method="post">
                            <input type="submit" value="책 삭제" />
                        </form>
                    </>
                )

            } else if (user) {
                
                return (
                    <>
                        <form action={`/${routes.myBookList(book.id)}`} method="post">
                            <input type="submit" value="내 서재에 놓기" />
                        </form>
                    </>
                )
            }

            else {
                return ""
            }
        }

        function ActivateReview() {
            if (user) {
                return (
                    <form action={routes.postReview(book.id)} method="post">
                        <InputReview type="textarea" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!"  rows="1" />
                        <InputRate type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={0} step={.1} />
                        <ReviewSubmit type="submit" value="등록" />
                    </form>
                )
            }
            return "";
        }

        function UserWhoRated(review) {
            if (user && review.email == user.email) {
                return (
                    <form action={routes.deleteRate(review.id)} method="post">
                        <input type="submit" value="삭제" />
                    </form>
                )
            }
        }

        let totalStar = "";

        let totalPoint = () => {

            if (this.props.totalRate) {

                if (this.props.totalRate / parseInt(this.props.totalRate) >= 1.1) {
                    for (let i = 0; i < this.props.totalRate; i += 2) {
                        totalStar += "★";
                    }
                }
                else {
                    for (let i = 0; i < parseInt(this.props.totalRate); i += 2) {
                        totalStar += "★";
                    }
                }
            }
        }
        totalPoint();


        return (
            <BaseLayout>
            {console.log(this.props.coverColor)}
                <GlobalStyle />
                <Background>
               { Header(this.props)}
                    <BookInfos>
                        <Middle>
                            <Book id="book" coverColor={this.props.coverColor}>
                                <div id="frontCover">
                                    <img id="coverImg"src={`/${book.imageUrl}`} width="100%" height="100%" />
                                    </div>
                                    <section><p>{book.description}</p></section>
                                <div></div>
                                <div></div>
                                <div>
                                    <span>
                                        <h1>{book.title} {totalStar} ({this.props.totalRate} / 10)</h1>
                                        <h5>{book.author}</h5>
                                        <h4>{book.likeFigure}명이 서재에 보관 중</h4>
                                        <h3>{JSON.stringify(book.createdAt)}</h3>
                                        <h3> 조회수 {book.viewsFigure}회 </h3>
                                    </span>
                                </div>
                                <div ><bdi id="bookSpine1">{book.author}</bdi><bdi id="bookSpine2">{book.title}</bdi></div>
                                <div></div>
                            </Book>
                            
                            <CommentSpace>
                                <Comments>
                                    {book.review.map((item) => {

                                        let star = "";


                                        const starPoint = () => {

                                            if (item.rate) {
                                                if (item.rate / parseInt(item.rate) >= 1.1) {
                                                    for (let i = 0; i < item.rate; i += 2) {
                                                        star += "★";
                                                    }
                                                }
                                                else {
                                                    for (let i = 0; i < parseInt(item.rate); i += 2) {
                                                        star += "★";
                                                    }
                                                }
                                            }
                                        }
                                        starPoint();
                                        return (
                                            <Comment>
                                                <Avatar>
                                                <img src={item.creatorPhoto} width="50vh" />
                                                <h3>{item.creator}</h3>
                                                </Avatar>
                                                <Review>
                                                <Content>{item.content}</Content>
                                                <Star>{star}({item.rate})</Star>
                                                
                                                <h3>{JSON.stringify(item.createdAt)}</h3>
                                                {UserWhoRated(item)}
                                                </Review>
                                            </Comment>
                                        )
                                    })}
                                </Comments>
                                <ActivateReview />
                            </CommentSpace>
                        </Middle>
                     {/*   <BookIntroduce>
                            <h1>{book.title} {totalStar} ({this.props.totalRate})</h1>
                            <h5>{book.author}</h5>
                            <h4>{book.likeFigure}명이 서재에 보관 중</h4>
                            <h3>{JSON.stringify(book.createdAt)}</h3>
                            <h5>{book.description}</h5>
                        </BookIntroduce>
                     */}
                    </BookInfos>
                    <ControlBook>
                            <ControlBtn id="rotateBtn"><i class="fas fa-undo"></i>책 돌리기</ControlBtn>
                            <ControlBtn id="openBtn"><i class="fas fa-book-open"></i>책 펼치기</ControlBtn>
                            </ControlBook>
                    <CheckUser />
                </Background>
                <script src="/vanilla/bookDetail.js"></script>
            </BaseLayout>
        )
    }
}

const Avatar = styled.section`
display:flex;
flex-direction:column;
`
const Content = styled.span`
font-weight:700;
width:15vw;
overflow:hidden;
`

const Review = styled.section`
display:flex;
flex-direction:column;
background-color:#F6B93B;
border-radius:0px 20px 20px 20px;
text-align:center;
`
const Star = styled.span`
color:blue;
display:flex;
justify-content:center;
`

const Background = styled.section`
background-image: url("https://cdn.pixabay.com/photo/2017/10/16/02/49/teddy-bear-2855982_1280.jpg");
background-size: cover;
padding-bottom: 20vh;
`

const Book = styled.section`
   
    width: 25vw;
    height: 70vh;
    
    :hover{
    animation: book-rotate 0.5s ;
    animation-fill-mode: forwards;
}
    /*:active{
    animation: book-rotate2 .5s ;
    animation-fill-mode: forwards;
    }*/
    /*:active{
    animation: moveBook 0.5s ease-in-out;
    animation-fill-mode: forwards;
    perspective: 130vw;
    }*/
    transform-style: preserve-3d;

    
    div:nth-child(1){
        position: absolute;
        width: 25vw;
        height: 70vh;
        
        border-left:0;
        text-overflow:hidden;
        background-color: ${props => props.coverColor ? props.coverColor : "black"};
        background-size: cover;
        background-position: center center;
        box-shadow: 10px 10px 10px 0.5px;
        transform: translateZ(2vw);
        transform-origin: 0 0;
        
        
        
    }
    section:nth-child(2){
        margin-top:1vw;
        margin-left:0.2vw;
        position: absolute;
        width: 23vw;
        height: 66vh;
        background-color:white;
        text-overflow:hidden;
        z-index:-1;
        border-left:solid 2px black;
        p:nth-child(1){
            margin: 3vw;
        }
    }

 
    div:nth-child(5){
        position: absolute;
        width: 25vw;
        height: 70vh;
        
        background-color: ${props => props.coverColor ? props.coverColor : "black"};
        font-size: 2vh;
        display:flex;
        background-size: cover;
        text-overflow:hidden;
        background-position: center center;
        transform: rotateY(180deg) rotateZ(0deg) translateZ(2vw);
        border-right: 0;
        span:nth-child(1){
            position:absolute;
            font-family: 'Gugi', cursive;
            margin: 6vh 6vh 0 6vh;
            color: ${props => props.coverColor ? props.coverColor : "black"};
            -webkit-filter: invert(100%);
            filter: invert(100%);
        }
    }
    div:nth-child(6){
        position: absolute;
        width: 4vw;
        height: 70vh;
        
        background-color: ${props => props.coverColor ? props.coverColor : "black"};
        background-size: cover;
        background-position: center center;
        transform: rotateY(-90deg) rotateZ(0deg) translateZ(2vw) ;
        display:flex;
        flex-direction:column;
        align-items:center;
        writing-mode: tb-rl ;

        bdi:nth-child(1){
            
            width:2vw;
            font-size:1.5vw;
            color: ${props => props.coverColor ? props.coverColor : "black"};
            -webkit-filter: invert(100%);
            filter: invert(100%);
            overflow:hidden;
        }
        bdi:nth-child(2){
            
            color: ${props => props.coverColor ? props.coverColor : "black"};
            -webkit-filter: invert(100%);
            font-size:1.5vw;
            filter: invert(100%);
            font-weight:700;
            overflow:hidden;
        }
    }
    
@keyframes book-rotate {
    0%{
        transform: rotateY(0deg);
    }
    70%{    
        box-shadow: 0px 0px 0px;
    }
    100%{
        transform: rotateY(30deg);
        
    }
}

@keyframes revert-rotate2{
    0%{
        transform: rotateY(30deg);
    }
    70%{    
        box-shadow: 0px 0px 0px;
    }
    100%{
        transform: rotateY(0deg);
        
    }
}

@keyframes book-rotate2 {
    from,to{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        
    }
    100%{
        transform: rotateY(180deg)
        
    }
}

@keyframes revert-rotate {
    from,to{
        transform: rotateX(0deg) rotateY(180deg) rotateZ(0deg)
        
    }
    100%{
        transform: rotateY(0deg)
        
    }
}

@keyframes moveBook {
            0%{
                
                transform: translateX(0vw) ;
            }100%{
                
                transform: translateX(40vw);
            }
        }

@keyframes openBook {
        0%{
            transform: rotateY(0deg);
            box-shadow: 0px 0px 0px;
            
        }
        100%{
            transform: rotateY(-150deg);
            box-shadow: 10px 10px 10px;
        }
    }
@keyframes fadeImage {
                0%{
                    opacity:1;
                }
                100%{
                    opacity:0;
                }
            }      
@keyframes revertBook {
    0%{  
        transform: translateX(40vw) ;
    }100%{
        
        transform: translateX(0vw);
    }
}

@keyframes closeBook {
    0%{
        transform: rotateY(-150deg);
            box-shadow: 0px 0px 0px;
    }
    100%{
        transform: rotateY(0);
            box-shadow: 10px 10px 10px;
    }
}  
@keyframes showImage {
    0%{
        opacity:0;
    }
    50%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}

`



const BookInfos = styled.div`
width: 100%;
height: 100vh;

`
const Middle = styled.div`

display: flex;
justify-content: space-between;
align-items:center;
width: 100%;
height: 100%;

`

const CommentSpace = styled.section`

    display: flex;
    flex-direction: column;
    box-shadow: 10px 5px 20px #00c8eb;
    width: 25vw;
        height: 70vh;
    border-radius: 20px;
    align-items: center;
    background-color:black;
    `
const Comments = styled.ul`
    
    
overflow: auto;
width: 100%;
height:100%;
background-image: url('https://neilpatel.com/wp-content/uploads/2015/03/comments.jpg');
background-size: cover;
background-position: center center;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 20px 20px 20px 20px;
`

const Comment = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
color:black;
margin-top:0.3rem;
background-color: rgba(255,255,255,0.3);
width:25vw;
`

const InputReview = styled.textarea`
border: solid 2px black;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width: 20vw;
height:2.5vh;
border-radius:15px;
:focus{
    
    animation: focus 0.5s;
    animation-fill-mode:forwards;
    ::placeholder{
            opacity:0;
        }
}

@keyframes focus {
    0%{
        
        height:0vh;
       
    }
    100%{
        height:20vh;
        
        
    }
}
`
const InputRate = styled.input`
border: solid 2px black;
text-align:center;
`
const ReviewSubmit = styled.input`
border: solid 2px black;
text-align:center;
`

const BookIntroduce = styled.section`
margin-bottom: -15vw;
background-color:rgba(255,255,255,0.3);
`

const User_img = styled.img`
    border-radius:100%;
`;

const ControlBook = styled.div`

`

const ControlBtn = styled.button`

`

export default bookDetail