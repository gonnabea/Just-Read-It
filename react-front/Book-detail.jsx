import React from "react";
import Title from "./title";
import { BaseLayout } from "./layout";
import Header from "./Header";
import GlobalStyle from "./globalStyles/ResetCss";
import styled, { keyframes } from "styled-components";

const Background = styled.section`
background-image: url("https://wallpaperset.com/w/full/d/d/8/488615.jpg");
background-size: cover;
`

const Book = styled.div`
margin-left: 50px;

:hover{
    animation: book-rotate 2s ease-in-out;
    animation-fill-mode: forwards;
}
    transform-style: preserve-3d;
    transform-origin: 100px 100px 0;
    div:nth-child(n+1){
        position: absolute;
        width: 200px;
        height: 200px;
        line-height: 200px;
        border: solid 2px black;
    }
    div:nth-child(1){
        position: absolute;
        width: 200px;
        height: 200px;
        line-height: 200px;
        border: solid 2px black;
        background-color: red;
        background-size: cover;
        background-position: center center;
        transform: translateZ(50px);
    }
    div:nth-child(2){
        position: absolute;
        width: 100px;
        height: 200px;
        line-height: 200px;
        border: solid 2px black;
        background-color: white;
        background-size: cover;
        background-position: center center;
        transform: rotateY(90deg) translateZ(150px);
    }
    div:nth-child(3){
        background-color: yellow;
        background-size: cover;
        background-position: center center;
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
    }
    div:nth-child(4){
        position: absolute;
        width: 200px;
        height: 200px;
        line-height: 200px;
        background-color: black;
        color: white;
        background-size: cover;
        background-position: center center;
        transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
        span:nth-child(1){
            background-color: black;
        }
    }
    div:nth-child(5){
        position: absolute;
        width: 200px;
        height: 100px;
        line-height: 100px;
        border: solid 2px black;
        background-color: black;
        background-size: cover;
        background-position: center center;
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px) translateX(50px);
    }
    div:nth-child(6){
        background-color: white;
        background-size: cover;
        background-position: center center;
        transform: rotateX(-90deg) translateZ(100px);
    }
@keyframes book-rotate {
    from,to{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%{
        transform: rotateY(180deg);
    }
}
`



const BookInfos = styled.div`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Middle = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 70%;
`

const CommentSpace = styled.section`
    display: flex;
    flex-direction: column;
    box-shadow: 10px 5px 20px #00c8eb;
    width: 30%;
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
border-radius: 20px;
`

const Comment = styled.li`
display:flex;
flex-direction: column;
align-items: center;
color:black;
background-color: rgba(255,255,255,0.3);
`

const BookIntroduce = styled.section`
background-color:rgba(255,255,255,0.3);
`

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
                            <input type="text" name="title" placeholder="수정할 이름" value={book.title}/>
                            <input type="textarea" name="description" placeholder="상세내용" value={book.description}/>
                            <input type="text" name="author" placeholder="작가 이름" value={book.author}/>
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
                            <input type="submit" value="즐겨찾기 등록" />
                        </form>
                    </>
                )
            }

            else {
                return ""
            }
        }
        
        function ActivateReview(){
            if (user) {
                return (
                    <form action={routes.postReview(book.id)} method="post">
                            <input type="text" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!" />
                            <input type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={5} step={.1} />
                            <input type="submit" value="등록" />
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
                    for (let i = 0; i < this.props.totalRate; i+=2) {
                        totalStar += "★";
                    }
                }
                else {
                    for (let i = 0; i < parseInt(this.props.totalRate); i+=2) {
                        totalStar += "★";
                    }
                }
            }
        }
        totalPoint();


        return (
            <BaseLayout>
                <GlobalStyle/>
                <Background>
                {Header(this.props)}
                    <BookInfos>
                    <Middle>
                    <Book>
                    <div><img src={`/${book.imageUrl}`} width="200px" height="200px"/></div>
                    <div></div>
                    <div></div>
                    <div><span>{book.description}</span></div>
                    <div></div>
                    <div></div>
                    </Book>
                     
                    <CommentSpace>
                    <Comments>
                    {book.review.map((item) => {

                        let star = "";


                        const starPoint = () => {

                            if (item.rate) {
                                if (item.rate / parseInt(item.rate) >= 1.1) {
                                    for (let i = 0; i < item.rate; i+=2) {
                                        star += "★";
                                    }
                                }
                                else {
                                    for (let i = 0; i < parseInt(item.rate); i+=2) {
                                        star += "★";
                                    }
                                }
                            }
                        }
                        starPoint();
                        return (
                            <Comment>
                                <img src={item.creatorPhoto} width="50vh" />
                                <h3>{item.creator}</h3>
                                <h3>{item.content}</h3>
                                <h3>{star}</h3>
                                <h3>{item.rate}점</h3>
                                <h3>{JSON.stringify(item.createdAt)}</h3>
                                {UserWhoRated(item)}
                            </Comment>
                        )
                    })}
                    </Comments>
                    <ActivateReview/>
                    </CommentSpace>
                    </Middle>
                    <BookIntroduce>
                    <h1>{book.title} {totalStar} ({this.props.totalRate})</h1>
                    
                    
                    <h5>{book.author}</h5>
                    <h4>{book.likeFigure}명이 즐겨찾기에 등록</h4>
                    <h3>{JSON.stringify(book.createdAt)}</h3>
                    <h5>{book.description}</h5>
                    </BookIntroduce>
                    </BookInfos>
                    <CheckUser />
                </Background>
            </BaseLayout>
        )
    }
}

export default bookDetail