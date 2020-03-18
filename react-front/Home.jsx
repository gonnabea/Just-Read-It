import React from "react";
import Header from "./globalStyles/Header";
import ReactDOM from "react-dom";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";

const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Recom_div = styled.div`
    width:100%; 
    height:45vh;
    display:grid;
    overflow: auto;
    grid-area: span 1/ span 6;
    /*background: rgba(8, 177, 199, 0.767);*/
    background-image:url("https://cdn.pixabay.com/photo/2013/03/02/02/40/portrayal-89193_1280.jpg");
    /* display:fixed;
    position:absolute;
    right:0;
    top:0; */
    /* margin-right:1rem;
    margin-top:10.5vh; */
    
    @media screen and (max-width: 1300px)
    { 
        height:100%;
        grid-area: span 1/ span 3;
    }
`;
const Recom_a = styled.a`
    width:100%;
    height:100%;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:space-between;
    color:white;
   
  
    &>span{
        width:10vh;
        height:11.5vh;
        overflow: hidden;
        text-overflow: hidden;    
    }
    span:nth-child(4){
        width:30vh;
        height:20vh;
        color:white;
    }

`;




const Ul = styled.ul`
    display:block;
    margin-top:-5rem;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    overflow-x:hidden;
    /* overflow:hidden; */
    &>li{
        margin-top:6rem;
        display:flex;
        flex-direction:column;
    }
    @media screen and (max-width: 1000px)
    { 
        height:20vh;
    }
   
`;

const Li = styled.li`
    display:flex;
    text-align:center;
    align-items:center;
    height:100%;
    /* flex-direction:column; */
    /* text-overflow: auto; */
    margin-right:1rem;
    
    animation: slide 1.5s;

    @keyframes slide{
        0%{
            transform:translateX(35vh);
        }
        100%{
        }
    }
`;

const Button = styled.button`
    margin:0.6rem;
    font-size:2vh;
    width:6vh;
    justify-self:center;
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
    
    @media screen and (max-width: 1300px)
    { 
        position:relative;
        width:10rem;
        height:100%;
    }

`;
const Reco_span = styled.span`
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    text-overflow: hidden;    
    overflow: hidden;
    flex-direction:column;
`;

const A = styled.a`
    margin-right:1rem; 
    display:flex;
    flex-direction:column;
    text-overflow: hidden;
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
     background-color:rgba(243, 239, 177, 0.521);
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
    width:15vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    overflow:hidden;
    text-overflow:ellipsis;
   &>h1:first-child:hover, &>h2:nth-child(2):hover{
        text-decoration:underline;
    }
`;

const Spantwo = styled.span`
    width:100%;
    text-overflow: hidden;    
    overflow: hidden;
`;

const H_one = styled.h1`
    font-size: 1rem;
    text-align:center;
     @media screen and (max-width: 1300px)
    { 
        font-size: 0.7rem;
    }
`;

const H_two = styled.h2`
        font-size: 0.7rem;

 @media screen and (max-width: 1300px)
    {
        font-size: 0.5rem;

    }
`;

const Header_line = styled.div`
 
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
/* :hover{
        img:first-child{
            animation: Hover_img 0.3s linear forwards;
            @keyframes Hover_img {
                0%{
                    box-shadow: 0;
                    transform:translateY(0);
                }
                50%{
                    transform:translateY(-2vh);
                }
                100%{
                    box-shadow: 10px 10px 20px black;
                    transform:translateY(-5vh);
                    border-radius:5px;
                }
            } 
    }
} */

`;
const Button_Next = styled.button`
    position:absolute;
    bottom:0;
    z-index:3;
    font-size:2vh;
    width:6vh;
    justify-self:center;
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


function Home(props) {



    function recommendList() {
        if (props.recomendBooks) {
            return (
                <h4 style={{ marginTop: "6rem",color:"white" }}>
                    {props.user.username}님만을 위한 추천 리스트 :
                </h4>
            )
        }
        else {
            return (
                <h1 style={{ marginTop: "6rem",color:"white" }}>로그인 하시면 북마크 기능에 기반한 추천리스트를 받아보실 수 있습니다</h1>
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
                                    <Image height="100%" width="20vh" src={argument.imageUrl} />
                                    <Reco_span>
                                        제목:<br />
                                        {argument.title}
                                    </Reco_span>
                                    <Reco_span>
                                        작가:<br />
                                        {argument.author}
                                    </Reco_span>
                                    <Reco_span>
                                        본문:<br />
                                        {argument.description}
                                    </Reco_span>
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

    const bookList =
        props.books.map(book => {
            return (
                <Header_line>
                    <div style={{ marginTop: "1vh" }}>
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
                            </Text_box>
                        </Book>
                        <Spantwo>({book.enrolledBy[0].username}님이 등록)</Spantwo>
                        <Spantwo>{JSON.stringify(book.createdAt)}</Spantwo>
                        {/* <Spantwo>{book.description}</Spantwo> */}
                    </div>
                </Header_line>
            )
        })

    return (
        <BaseLayout>
            <GlobalStyle />
            {Header(props)}
            <Grid_box>

                <Recom_div>
                    {recommendList()}
                    <Ul>
                        {recomSys()}
                        <Button id="btn_prev" >
                            Prev
                        </Button>
                        <Button id="btn_next">
                            Next

                        </Button>
                    </Ul>
                </Recom_div>

                {bookList}
                {/* <Button_Next>lalalal</Button_Next> */}
            </Grid_box>
            {/* <Background_img >
            </Background_img> */}
            <script src="/vanilla/home.js"></script>
        </BaseLayout>
    );
}

export default Home;