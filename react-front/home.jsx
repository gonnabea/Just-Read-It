import React from "react";
import Header from "./globalStyles/Header";
import ReactDOM from "react-dom";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";
import sortNav from "./globalStyles/sortNav";

const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
  
const Recom_div = styled.div`
    overflow:auto;
    overflow-x:hidden;
    grid-area: span 1/ span 6;
    background-image:url("https://cdn.pixabay.com/photo/2013/03/02/02/40/portrayal-89193_1280.jpg");
    grid-gap: 10px;

    @media screen and (max-width: 1300px)
    { 
        height:100%;
        grid-area: span 1/ span 3;
    }
`;

const Recom_a = styled.a`
    width:100%;
    display:flex;
    color:white;
    /* justify-content:space-between; */
    &>img{
        width:350px;
        height:450px;
    }
    &>span{
        overflow: hidden;
        text-overflow: ellipsis;   
    }
    span:nth-child(4){
        color:white;
        overflow: hidden;
        text-overflow: ellipsis;    
    }
`;
const Ul = styled.ul`
    display:flex;
    background-color: rgba(255,255,255,0.3);
    width:1000%;
`;

const Li = styled.li`
    display:flex;
    border:1px solid red;
    width:100vw;
    @keyframes recomment_slid{
        0%{

        }
        100%{
           transform: translateX(-100%);
        }
    }
    @keyframes revers_recomment_slid{
        0%{
           transform: translateX(-100%);

        }
        100%{
           transform: translateX(0%);
        }
    }
`;

const Button = styled.button`
    margin:0.6rem;
    font-size:2vh;
    width:6vh;
    justify-self:center;
    cursor:pointer;
`;

const Image = styled.img`
    width:${props => props.width || "13.5rem"};
    height:${props => props.width || "100%"};
    border-radius:5px;
    :hover{
         /* animation: hover_shadow 0.1s linear forwards;  */
         box-shadow: 0px 13px 21px 3px rgba(0,0,0,0.75);
    }
    @keyframes hover_shadow{
        0%{
            box-shadow: 0px 13px 40px -9px rgba(0,0,0,0.75);
        }
        100%{
            box-shadow: 0px 13px 21px 3px rgba(0,0,0,0.75);
        }
    }
   
`;
const Reco_span = styled.span`
    display:flex;
    text-align:center;
    overflow: hidden;
    text-overflow: ellipsis;    
    flex-direction:column;
    margin-top:1rem;
    margin-right:5rem;
    width:500px;
`;

const A = styled.a`
    margin-right:1rem; 
    display:flex;
    flex-direction:column;
    text-overflow: ellipsis;
`;
const Reflex = styled.div`
    display:flex;
    flex-direction:column-reverse;
`;

const Grid_box = styled.div`
    display:grid;
    height:100%;
    grid-template-columns: repeat(6,1fr);
    text-align:center;
     background-color:#F6F6F6;
    @media screen and (max-width: 1450px)
    { 
        text-align:center;
        grid-template-columns: repeat(5,1fr);
    }
    @media screen and (max-width: 1300px)
    { 
        text-align:center;
        grid-template-columns: repeat(3,1fr);
    }

`;

const Text_box = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    overflow:hidden;
    text-overflow:ellipsis;

    &>h1:first-child:hover, &>h2:nth-child(2):hover{
        text-decoration:underline;
       
    }
    @media screen and (max-device-width: 420px)
    {
        &>*{
            margin:0.1rem;
        }
        &>h1, h2{
         font-size:1.5rem;
        }
        &>div{
         font-size:1.2rem;
        }
    }

`;

const Spantwo = styled.span`
    width:100%;
    overflow: hidden;
    text-overflow: ellipsis;    
`;

const H_one = styled.h1`
    font-size: 1rem;
  
`;

const H_two = styled.h2`
    font-size: 0.7rem;

`;

const Header_line = styled.div`
    display:flex;
    flex-direction:column;
    align-items:space-between;
`;

const Book = styled.a`
    transform-style: preserve-3d;
    animation-fill-mode: forwards;
    color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;

`;
const Button_Next = styled.button`
    position:absolute;
    bottom:0;
    z-index:3;
    font-size:2vh;
    width:6vh;
    justify-self:center;
    cursor:pointer;

`;

const Background_img = styled.div`
    position:absolute;
    top:0; 
    width:100%;
    height:100vh;
    z-index:-2;
    background-color:rgba(243, 239, 177, 0.521);
    background-repeat:repeat;
    background-position:center center;
    background-size:100% 100%;
   
`;
const Re_book_pos = styled.div`
    display:flex;
    color:#74b9ff;
    font-size:3px;
    &>i{
        font-size:3px;
        margin:1vh;
    }
    &>i:hover{
        font-size:15px;
        cursor:pointer;
    }
`;

const SlideContainer = styled.section`


`;

const GenreSort = styled.nav`
    margin-top:-5vh;
    background-color:rgba(0,0,0,0.3);
    width: 10rem;
    height: 90vh;
    z-index: 100;
    position:fixed;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    display:none;
    color: white;

  
`;

const SlideNav = styled.section`
    position:fixed;
    z-index:200;
    display:flex;
    align-items:center;
    height:80%;
    color:#F6B93B;
    margin-top:20vh;

    @keyframes slide {
        0%{
            width:0;
        }100%{
            width:9.5rem;
        }
    }
    
    @keyframes revertSlide {
        0%{
            width:10%;
            display:block;
        }100%{
            width:0;
            display:none;
        }
    }

    @keyframes slideBtn {
        0%{
            margin-left: 0;
        }
        100%{
            margin-left: 10rem;
        }
    }
    @keyframes revertSlideBtn {
        0%{
            margin-left: 10rem;
        }
        100%{
            margin-left: 0;
        }

    }
`


const animations = keyframes`

`;
const Genre = styled.input`
    width:9.5rem;
    height:2.9rem;
    border:none;
    text-align: center;
    font-weight:700;
    font-size:2vh;
    /* background-color:rgba(15, 15, 15, 0.425); */
    background-color:rgba(0,0,0,0.3);
    color:white;
    cursor: pointer;
    :hover{
        color:black;
        background-color:#F6B93B;
    }
    @media screen and (max-device-width: 420px)
    {
        height:100%;
        font-size:1.8rem;
        margin-top:3.75rem;
    }

`;

const SlideBtn = styled.span`
        cursor:pointer;
`;
 
const Recommen = styled.h1`
    margin-top:6rem;
    color:white;
    display:flex;
    justify-content:flex-start;
    @media screen and (max-device-width: 420px)
    {
        margin-top:10rem;
    }
`;

function Home(props) {
    function recommendList() {
        if (props.recomendBooks) {
            return (
                <Recommen>
                    {props.user.username}님만을 위한 추천 리스트 :
                </Recommen>
            )
        }
        else {
            return (
                 <Recommen>
                    로그인 하시면 북마크 기능에 기반한 추천리스트를 받아보실 수 있습니다
                </Recommen>
            )
        }
    }

    function recomSys() {
        // console.log(props.recomendBooks)
        if (props.recomendBooks) {
            // console.log(props.recomendBooks.length)
            return (
                props.recomendBooks.map(argument => {
                    if (argument === null) {
                        return "";
                    }
                    else {
                        return (
                            <Li className="reco_list">
                                <Recom_a href={`/${props.routes.bookDetail(argument.id)}`}>
                                    <Image height="40vh" width="30vh" src={argument.imageUrl} />
                                    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                                        <Reco_span>
                                            제목: {/* <br /> */} {argument.title}
                                        </Reco_span>
                                        <Reco_span>
                                            작가: {/* <br /> */} {argument.author}
                                        </Reco_span>
                                        <Reco_span>
                                            본문: {/* <br /> */} {argument.description}
                                        </Reco_span>
                                    </div>
                                </Recom_a>
                            </Li>
                        )
                    }
                })
            )
        } else {
            return "";
        }
    }

    let sortedBy
    function genre(book){
      if(book.genre == "novel"){
          sortedBy = "소설"
      }
      else if(book.genre == "self-development"){
          sortedBy = "자기계발서"
      }
      else if(book.genre == "programming"){
          sortedBy = "개발관련서적"
      }
      else if(book.genre == "autobiography"){
          sortedBy = "자서전"
      }
      else if(book.genre == "overseas"){
          sortedBy = "해외서적"
      }
      else if(book.genre == "essay"){
          sortedBy = "시/에세이"
      }
      else if(book.genre == "business"){
          sortedBy = "경제/경영"
      }
      else if(book.genre == "history"){
          sortedBy = "역사/문화"
      }
      else if(book.genre == "religion"){
          sortedBy = "종교"
      }
      else if(book.genre == "society"){
          sortedBy = "정치/사회"
      }
      else if(book.genre == "culture"){
          sortedBy = "예술/대중문화"
      }
      else if(book.genre == "science"){
          sortedBy = "과학"
      }
      else if(book.genre == "tech"){
          sortedBy = "기술/공학"
      }
      else if(book.genre == "etc"){
          sortedBy = "기타"
      }
    }

    const bookList =
        props.books.map(book => {
            genre(book)
            return (
                <Header_line>
                    <div>
                        <Book href={props.routes.bookDetail(book.id)}>
                            <Image className="home_main_img" src={book.imageUrl} alt={book.imageUrl} />
                            <Text_box className="text_box" >
                                <H_one>
                                    {book.title}
                                </H_one>
                                <H_two>
                                    작가 : {book.author}
                                </H_two>
                                <div> 조회수 {book.viewsFigure}회 </div>
                                <div>분류 : {sortedBy}</div>
                            </Text_box>
                        </Book>
                        <Spantwo></Spantwo>
                        <Spantwo></Spantwo>
                        {/* <Spantwo>{book.description}</Spantwo> */}
                    </div>
                </Header_line>
            )
        })

    return (
        <BaseLayout>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
            <GlobalStyle />
            {Header(props)}
            {sortNav(props)}
            <Grid_box>

                <Recom_div>
                    {recommendList()}
                    <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        <Button id="btn_prev" >
                            Prev
                        </Button>
                        <Re_book_pos>
                            <i id="icon_1" className="fas fa-circle"></i>
                            <i id="icon_2" className="fas fa-circle"></i>
                            {/* <i id="icon_3" className="fas fa-circle"></i> */}
                        </Re_book_pos>
                        <Button id="btn_next">
                            Next
                        </Button>
                    </div>
                    <Ul>
                        {recomSys()}
                    </Ul>

                </Recom_div>

                {bookList}
              
            </Grid_box>
         
            <script src="/vanilla/home.js"></script>
            <script src="/vanilla/sortNav.js"></script>
        </BaseLayout>
    );
}

export default Home;
