import React from "react";
import { BaseLayout } from "./globalStyles/layout";
import Header from "./globalStyles/Header";
import GlobalStyle from "./globalStyles/ResetCss";
import styled, { keyframes } from "styled-components";

const Check_user_div = styled.div`
    display:none;
    flex-direction:column;
    height:100%;
    width:100%;
    margin: 0.3rem;
    background-color:#E7E3DC;
    justify-content: center;
    align-items: center;
 
    &>form{
        width:500px; 
        display:flex;
        flex-direction:column;
        align-items:center;

        &>input{
            margin-top:0.3rem;
            float:left;
            resize:none;
            margin-top:0.3rem;
            border: solid orange 1px;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            border-radius:10px;
            overflow:hidden;
            outline: none;
            color:orange;
            font-weight:700;
        }

        &>textarea{
            width:500px; 
            height:200px; 
            resize:none;
            margin-top:0.3rem;
            border: solid orange 1px;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            border-radius:10px;
            overflow:hidden;
            outline: none;
            font-weight:700;

        }

        input[type=submit]
        {
            width:150px;
            font-size:1rem;
        }

        &>input:last-child{
            border-radius: 4px;
            background-color: #F6BF4C;
            border: none;
            color: #FFFFFF;
            text-align: center;
            transition: all 0.5s;
            cursor: pointer;
            &:hover{
                background-color: #FFFFFF;
                color: #F6BF4C;
            }
        }
       
    }
    @media screen and (max-device-width: 420px)
    {
        font-size:1.5rem;
    }
`;

const Self_position  = styled.input`
    position:absolute;
    display:flex;
    justify-content:center;
    align-self:flex-start;
    width:100%;
    margin-left: 3rem;
`;

const Submit = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
`;

const EditBtn = styled.button`
    border-radius: 4px;
    font-size:1rem;
    background-color: #F6BF4C;
    border: none;
    color: #FFFFFF;
    text-align: center;
    transition: all 0.5s;
    margin-left:30px;
    cursor: pointer;
    
    &:hover{
        background-color: #FFFFFF;
        color: #F6BF4C;
    }
`;

const PutToBookmark = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:100%;
    margin: 0.3rem;
    background-color:#E7E3DC;

    &>form{
        width:500px; 
        display:flex;
        flex-direction:column;
        align-items:center;

        &>input{
            margin-top:0.3rem;
            float:left;
            resize:none;
            margin-top:0.3rem;
            border: solid orange 1px;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            border-radius:10px;
            overflow:hidden;
            outline: none;
            color:orange;
            font-weight:700;
        }

        &>textarea{
            width:500px; 
            height:200px; 
            resize:none;
            margin-top:0.3rem;
            border: solid orange 1px;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            border-radius:10px;
            overflow:hidden;
            outline: none;
            font-weight:700;

        }

        input[type=submit]
        {
            width:150px;
            font-size:1rem;
        }

        &>input:last-child{
            border-radius: 4px;
            background-color: #F6BF4C;
            border: none;
            color: #FFFFFF;
            text-align: center;
            transition: all 0.5s;
            cursor: pointer;
            &:hover{
                background-color: #FFFFFF;
                color: #F6BF4C;
            }
        }
       
    }
    @media screen and (max-device-width: 420px)
    {
        font-size:1.5rem;
    }
`;

class bookDetail extends React.Component {

    render() {
        const user = this.props.user;
        const book = this.props.book;
        const routes = this.props.routes;

        function CheckUser() {

            if (user && user.id == book.enrolledBy[0]._id) {
                return (
                    <>
                    <EditBtn id="editBtn">책 정보 수정</EditBtn>
                    <Check_user_div id="editContent">
                        <form action={routes.editBook(book.id)} method="post">
                            <input type="text" name="title" placeholder="수정할 이름" value={book.title} />
                            <textarea name="description" placeholder="상세내용" value={book.description} />
                            <input type="text" name="author" placeholder="작가 이름" value={book.author} />
                            <input type="submit" value="수정하기" />
                        </form>
                        <form action={routes.deleteBook(book.id)} method="post">
                            <input type="submit" value="책 삭제" />
                        </form>
                    </Check_user_div>
                    </>
                )

            } else if (user) {
                
                return (
                    <PutToBookmark>
                        <form action={`/${routes.myBookList(book.id)}`} method="post">
                            <Self_position type="submit" value="내 서재에 놓기" />
                        </form>
                    </PutToBookmark>
                )
            }

            else {
                return ""
            }
        }

        function ActivateReview() {
            if (user) {
                return (
                    <form action={routes.postReview(book.id)} id="postReview" method="post">
                        <input type="text" id="yourName" name={user.username} style={{display:"none"}}/>
                        <input type="text" id="profileUrl" name={user.profilePhoto} style={{display:"none"}}/>
                        <InputReview type="textarea" autoComplete="off" name="reviewContent" id="reviewContent" placeholder="책에 대한 평가를 남겨주세요!(150자 제한)"  rows="1" />
                
                        <InputRate type="number" name="rate" placeholder="평점" id="reviewRate" min={0} max={10} value={"평점"} step={.1} />
                        <ReviewSubmit id="postReviewBtn" type="submit" value="등록" />
                        
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
        let translated
        
        function translateTime(createdAt){
            translated = `${createdAt.getYear()+1900}년 ${createdAt.getMonth()+1}월 ${createdAt.getDate()}일`;
        }
        translateTime(book.createdAt);
        
        function handleNaN(totalRate){
            if(totalRate == "NaN"){
                return 0;
            }
            else{
                return totalRate
            }
        }
        function publishedAt(){
           if( book.publishedAt)
           {
              return "출판일: "+book.publishedAt.split("T")[0]
           }
           return "";
        }
        function publisher(){
            if(book.publisher)
            {
                return "출판사: "+book.publisher
            }
            return "";
        }
        function price()
        {
            if(book.price)
            {
                return "가격: " + book.price+"원";
            }
            return "";
        }
        return (
            <BaseLayout>
            {/* {console.log(this.props.coverColor)} */}
                <GlobalStyle />
                {Header(this.props)}
                <link href="https://fonts.googleapis.com/css2?family=Gaegu&family=Open+Sans&display=swap" rel="stylesheet"/>
                    <BookInfos>
                        <Middle>
                            <Book id="book" coverColor={this.props.coverColor}>
                                <div id="frontCover">
                                    <img id="coverImg"src={`${book.imageUrl}`} width="100%" height="100%" />
                                </div>
                                <BookContent>
                                    <BookContentP id="book_description">
                                        {book.description}
                                        <div id="book_page">0</div>
                                    </BookContentP>
                                    <PageController>
                                        <BackPage id="prev_btn">{`<`}</BackPage>
                                        <NextPage id="next_btn"> {`>`} </NextPage>
                                    </PageController>
                                </BookContent>
                                <div></div>
                                <div></div>
                                <div>
                                    <BackCoverContent>
                                        <h1>{book.title}</h1>
                                        <h3>{totalStar} ({handleNaN(this.props.totalRate)} / 10)</h3>
                                        <h5>{book.author}</h5>
                                        <h4>{book.likeFigure}명이 서재에 보관 중</h4>
                                        <h3> 등록일: {translated}</h3>
                                        <h3> 조회수: {book.viewsFigure}회 </h3>
                                        <h3>{price()}</h3>
                                        <h3>{publisher()} </h3>
                                        <h3>{publishedAt()} </h3>
                                    </BackCoverContent>
                                    <a href={book.buyLink} target="_blank"> 
                                        <LogoImage src="/images/orangeBook.png">
                                        </LogoImage>
                                    <span style={{position:"absolute",right:"35%",
                                bottom:"16%", fontSize:"10px", zIndex:"100", fontWeight:"700"}}>Link</span>
                                    </a> 
                                </div>
                                <div ><bdi id="bookSpine1">{book.author}</bdi>
                                <bdi id="bookSpine2">{book.title}</bdi></div>
                                <div></div>
                            </Book>
                            
                            <CommentSpace>
                                <Comments id="commentList">
                                    {book.review.map((item) => {
                                        
                                        let star = "";
                                        let vacantStar=0;
                                        translateTime(item.createdAt)
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
                                            vacantStar = 5-star.length;
                                                   for(let j=0; j<vacantStar; j++){
                                                        star+="☆"} 
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
                                                
                                                <h3>{translated}</h3>
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
                        <ControlBook>
                            <ControlBtn id="rotateBtn">
                                <i class="fas fa-undo"></i>  책 돌리기
                            </ControlBtn>
                            <ControlBtn id="openBtn">
                                <i class="fas fa-book-open"></i>  책 펼치기
                            </ControlBtn>
                            <CheckUser />
                        </ControlBook>
                    </BookInfos>
                <script src="/vanilla/bookDetail.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
            </BaseLayout>
        )
    }
}

const PageController = styled.div`
    width:100%;
    display:flex;
    position:absolute;
    bottom:-23px;
    box-sizing: border-box;
`

const NextPage = styled.button`
    outline:none;
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
    width:100%;
    flex:1;
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
        left: -35%;
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
`;

const BackPage = styled.button`
    outline:none;
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
    width:100%;
    flex:1;

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
        right: -35%;
        top: 0;
        transform: skew(50deg);
        transition-duration: 0.6s;
        transform-origin: top right;
        width: 0;
    }

   :hover:after {
        height: 100%;
        width: 135%;
    }
`

const BookContent = styled.section`
    margin:0;
    &>div{
        display:flex;
        text-align:center;
        justify-content:center;
    }
    height: 100%;
    /* overflow:hidden;
    text-overflow:hidden; */
`

const BookContentP  = styled.p`
    font-family: 'Gaegu', cursive;
    font-weight:600;
    line-height:1.5;
`;

const LogoImage = styled.img`
  width:8rem;
  height:63px;
  position:absolute;
  top:80%;
  left:50%;
  display:inline-block;
  z-index:2;
`;

const BackCoverContent = styled.span`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:60%;
    font-size:1rem;

    @media scrren and (max-device-width: 420px)
    {
        &>*{
            font-size:2rem;
        }
    }
  
`;

const Avatar = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    flex:1;
    &>img{
        width:60px;
        height:55px;
        border-radius:100%;
        @media screen and (max-device-width: 420px)
        {
            width:100%;
            height:100%;
        }
    }
`
const Content = styled.span`
    display:flex;
    font-weight:700;
    width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align:center;
    align-self:center;
    justify-content:center;
`;

const Review = styled.section`
    margin:0.6rem;
    padding:0.3rem;
    display:flex;
    flex-direction:column;
    background-color:#F6B93B;
    border-radius:0px 20px 20px 20px;
    text-align:center;
    justify-content:center;
    width:100%;
    flex:2;
`
const Star = styled.span`
    color:white;
    display:flex;
    justify-content:center;
`

const Background = styled.section`
   
`

const Book = styled.section`
   
    width: 25vw;
    height: 70vh;
    transform-style: preserve-3d;
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
    @media screen and (max-device-width: 420px) 
    {
        position:relative;
        width: 100%;
        height:100%;
        top:15vh;
    } 
    
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
            
        @media screen and (max-width: 1200px){
            width: 33vw;
        }

        @media screen and (max-width: 700px){
            width: 55vw;
        }
     
        @media screen and (max-device-width: 420px) 
        {
            width: 500px;
            height: 700px;
        }
    }

    section:nth-child(2){
        justify-content:center;
        margin-top:10px;
        margin-left:5px;
        position: absolute;
        width: 23vw;
        height: 64vh;
        background-color:white;
        text-overflow:hidden;
        z-index:-1;
        border-left:solid 2px black;
        text-overflow:hidden;
        /* overflow:hidden;  */
        
        p:nth-child(1){
            /* margin: 2vw; */
            margin: 40px 50px 0px 50px;
            
        }
        
        div:nth-child(2)
        {
            z-index:10;
        }   
        @media screen and (max-width: 1200px){
            width: 30vw;
        }

        @media screen and (max-width: 700px){
            width: 52vw;
        }
     
        @media screen and (max-device-width: 420px) 
        {
            width: 500px;
            height: 650px
        }
    }

 
    div:nth-child(5){
        position: absolute;
        width: 25vw;
        height: 70vh;
   
        background-color: ${props => props.coverColor ? props.coverColor : "black"};
        /* font-size: 2vh; */
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
            
        @media screen and (max-width: 1200px){
            width: 33vw;
        }

        @media screen and (max-width: 700px){
            width: 56vw;
        }
     
        @media screen and (max-device-width: 420px) 
        {
            width: 500px;
            height: 700px
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
      
        @media screen and (max-device-width: 420px) 
        {
            width: 4vw;
            height: 700px
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
        0%{
            transform: rotateY(0deg);
        }
        100%{
            transform: rotateY(180deg);
            
        }
    }

    @keyframes revert-rotate {
        0%{
            transform: rotateY(180deg); 
            
        }
        100%{
            transform: rotateY(0deg);
            
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
            transform: rotateY(0) translateZ(2vw);
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
`;



const BookInfos = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("https://cdn.pixabay.com/photo/2017/10/16/02/49/teddy-bear-2855982_1280.jpg");
    background-size: cover;
    overflow:auto;
    overflow-x:hidden;
`;
const Middle = styled.div`

    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    height: 100%;

`;

const CommentSpace = styled.section`
    display: flex;
    flex-direction: column;
    box-shadow: 10px 5px 20px #00c8eb;
    width: 25vw;
    height: 70vh;
    border-radius: 20px;
    align-items: center;
    /* background-color:black; */
    background-image:url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
    z-index:3;
    @media screen and (max-device-width: 450px) 
    {
        position:absolute;
        bottom:-15vh;
        width:100%;
        height:30rem;
        &>form:nth-child(2){
            justify-self:center;
            display:flex;
            input{
                width:50%;
                font-size:2rem;
            }
        }
    }
    @media screen and (max-width: 700px){
        position:relative;
        bottom:-56rem;
        width:100%;
        height:20rem;  
        &>form:nth-child(2){
            justify-self:center;
            display:flex;
            input{
                width:50%;
                font-size:2rem;
            }
        }
    }
`;
const Comments = styled.ul`
    overflow: auto;
    overflow-x: hidden;
    width: 100%;
    height:100%;
    background-color:#E7E3DC;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 20px 20px 20px;
    >newcomment{
        display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color:black;
    margin-top:0.3rem;
    background-color: rgba(255,255,255,0.3);
    width:25vw;
    >newavatar{
        display:flex;
    flex-direction:column;
        >profileimg{

        }
        >username{

        }
    }
    >newreview{
        display:flex;
        flex-direction:column;
        background-color:#F6B93B;
        border-radius:0px 20px 20px 20px;
        text-align:center;
        >newcontent{
            font-weight:700;
            width:15vw;
            overflow:hidden;
        }
        >newstar{
            color:blue;
            display:flex;
            justify-content:center;
        }
        >newDate{

        }
        }
    }
`;

const Comment = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    color:black;
    margin-top:0.3rem;
    background-color: rgba(255,255,255,0.3);
    width:25vw;
    text-align:center;

    @media screen and (max-device-width: 450px) 
    {
      width:100%;
      justify-content:space-between;
      &>section:first-child{
          &>img{
              width:10rem;
          }
          font-size:2rem;
          justify-content:center;
          padding:10px;
      }
      &>section:last-child{
          width:100%;
          &>*{
              font-size:2rem;
            }
            &>form>input{
                font-size:2rem;
          }
      }
    }
    
    @media screen and (max-width: 700px){
        width:100%;
        justify-content:space-between;
        &>section:first-child{
            &>img{
                width:10rem;
            }
            font-size:1.25rem;
            justify-content:center;
            padding:10px;
        }
        &>section:last-child{
            width:100%;
            &>*{
                font-size:1.25rem;
                }
                &>form>input{
                    font-size:1.25rem;
            }
        }
    }

`;

const InputReview = styled.textarea`
    margin-top:10px;
    border: solid orange 1px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    width: 20vw;
    height:3.5vh;
    border-radius:10px;
    resize:none;
    overflow:hidden;
    outline: none;
    
    color:orange;
    font-weight:700;
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
            box-shadow: 0;
        }
        100%{
            height:20vh;
            box-shadow: 2px 2px 10px;
            border: none;
        }
    }

    @media screen and (max-device-width: 450px) 
    {
        width: 500px;
        height:5vh;
        font-size:2rem;
    }
    
    @media screen and (max-width: 700px){
        width: 500px;
        height:5vh;
        font-size:1.25rem;
    }
`
const InputRate = styled.input`
    border: solid 1px orange;
    text-align:center;
    border-radius: 10px;
    outline: none;
`
const ReviewSubmit = styled.input`
    text-align:center;
    font-size:1rem;
    margin: 1rem auto;
    padding:2px;
    border-radius:5px;
    margin-left: 60px;
    background:#F6BD47;
    color:#fff;
    border:none;
    position:relative;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
    
    &:active{
        margin-top:20px;
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
    }
    &:hover{
        background:#fff;
        color:#F6BD47;
    }
    &:before,&:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: #F6BD47;
        transition:400ms ease all;
    }

    &:after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    &:hover:before,&:hover:after{
        width:100%;
        transition:800ms ease all;
    }

    @media screen and (max-device-width: 420px)
    {
        font-size:1.3rem;
    } 
`

const BookIntroduce = styled.section`
    margin-bottom: -15vw;
    background-color:rgba(255,255,255,0.3);
`

const User_img = styled.img`
    border-radius:100%;
`;

const ControlBook = styled.div`
    position:relative;
    bottom:90px;
    @media screen and (max-device-width: 420px)
    {
        bottom:43vh;
        &>*{
            font-size:2rem;
            margin:0.3rem;
        }
        &>form>*{
            display:flex;
            flex-wrap:wrap;
            font-size:2rem;
            margin:0.3rem;
            float:left;
        }
        &>form:nth-child(3){
            &>textarea:nth-child(2){
                width:100%;
                height:15rem;
                font-size:2rem;
            }
        }
    }
    @media screen and (max-width: 700px)
    {
        &>*{
            font-size:1.25rem;
            margin:0.3rem;
        }
        &>form>*{
            display:flex;
            flex-wrap:wrap;
            font-size:1.25rem;
            margin:0.3rem;
            float:left;
        }
        &>form:nth-child(3){
            &>textarea:nth-child(2){
                width:100%;
                height:10rem;
                font-size:1.25rem;
            }
        }
    }
`

const ControlBtn = styled.button`

    left: 100px;
    background-color:white;
    font-weight:700;
    color:black;
    margin-left:20px;
    width:100px;
    height:50px;
    border-radius:20px;
    font-size:15px;
    border: solid 2px black;
    outline:none;
    cursor:pointer;
    :hover{
        background-color:#F6B93B;
        color:white;
    }
`

export default bookDetail
