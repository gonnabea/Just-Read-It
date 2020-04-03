import React from "react";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";
import sortNav from "./globalStyles/sortNav";

const Grid_box = styled.div`
    width:100%;
    display:grid;
    text-align:center;
    grid-gap: 10px;
    grid-template-columns: repeat(1,1fr);
    justify-items:center;
    
    position:relative;
    top:10rem;
    padding-bottom:4rem;

    @media screan and (max-width: 720px) and (min-width: 300px)
    {
        top:14rem;
        /* grid-template-columns: repeat(3,1fr); */
    }
    @media screen and (max-device-width: 450px)
    {
        top:15rem;
        /* grid-template-columns: repeat(3,1fr); */
    }
`;

const Image = styled.img`
    width:20%;
    height:200px;
    text-align:center;
    border-radius:5px;

    &:hover{
        animation: img_hover 1s linear infinite forwards;
    }

    @keyframes img_hover{
        0%{
            box-shadow: 0px 0px 20px 5px #F6B93B;

        }
        100%{
            box-shadow: 0px 0px 29px 0px #F6B93B;
        }
    }
    @keyframes transform{
        0%{

        }
        100%{

        }
    }
    @media screen and (max-width: 1300px)
    { 
        text-align:center;
        width:10vh;
    }
    @media screen and (max-width: 600px)
    {
        text-align:center;
        width:6.5vh;
    }
`;

const A = styled.a`
    /* margin:0.4vh; */
    display:flex;
    width:70vw;
    height:100%;
    /* flex-direction:column; */
    text-align:center;
    justify-content:space-between;
    align-items:center;
    justify-items: center;
    background-color:rgba(0,0,0,0.4);
    border:solid 2px orange;
    border-radius:10px;
    align-self: center;
    justify-self: center;
    box-shadow: 0px 4px 10px 5px rgba(0,0,0,0.75);
    
    &:hover{
        animation: img_hover 1s linear infinite forwards;
    }

    @keyframes img_hover{
        0%{
            box-shadow: 0px 0px 20px 5px #F6B93B;

        }
        100%{
            box-shadow: 0px 0px 29px 0px #F6B93B;
        }
    }
    /* background-color: white; */
    @media screen and (max-width: 600px)
    {
        margin:1vh;
    }
`;

const H_one = styled.h1`
    /* display:grid; */
    /* margin-bottom:5vh; */
    width:100%;
    /* grid-area: span 1 /span 6;  */
    position:relative;
    text-align:center;
    top:100px;

    box-shadow: 0px 3.5px 5px 3.5px #F7BC43;
    @media screen and (max-width: 400px)
    {
        font-size:1rem;
    }
`;

const Author = styled.span`
    /* margin:10px; */
    text-overflow:ellipsis;
    font-size:2.5vh;
    color:white;

    @media screen and (max-width: 1300px)
    { 
        font-size:1.5vh;
    }
    @media screen and (max-width: 600px)
    {
        font-size:1vh;
    }
`;

const Background_img = styled.div`
    position:relative;
    z-index:-1;
    top:0;
    width:100%;
    height:100%;
    background-image:url("https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg");
    background-repeat:repeat;
    background-position:center center;
    background-size: 100% 100%;
    
`;

const TextArea = styled.section`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:center;
    height:100%;
    width:70%;
    margin-left:15px;
    margin-right:15px;
`;

const Description = styled.span`
    margin-top:0.4vh;
    text-overflow:ellipsis;
    font-size:2vh;
    color:white;

    @media screen and (max-width: 1300px)
    { 
        font-size:1.5vh;
    }
    @media screen and (max-width: 600px)
    {
        font-size:1vh;
    }
`;

const Body = styled.div`
    background-image:url("https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg");
    background-size:cover;
    width:100%;
    height:100vh;
    
    overflow:auto;
`;

const GridContainer = styled.section`
    display:flex;
    /* align-items:center; */
    width: 100%;
    height:100%;
`
const Grid_items = styled.div`
    grid-area:a;
    align-self:center;
    justify-self:center;

`;

const BookTitle = styled.span`
text-overflow:ellipsis;
    font-size:5vh;
    color:white;
    font-weight: 700;
    width:70%;
    display:flex;
    justify-content:flex-start;
    @media screen and (max-width: 1300px)
    { 
        
    }
    @media screen and (max-device-width: 600px)
    {
        font-size: 3vh;
    }
` 
const Bookinfo = styled.div`
    height:100%;
    width:15%;
    display:flex;
    align-items:flex-start;
    
    padding:5px;
    color:white;
    

`;
const Publisher = styled.span`
    position: absolute;
    margin-top:40px;
    width:100px;
    margin-left:40px;
`;
const Star = styled.span`
    position:absolute;
    margin-left:50px;
`;
const Bookmark = styled.span`
    
    &>i{
        font-size:2rem;
        position:absolute;
    }
    &>span{
        position:absolute; 
        margin-left: 7px;
        color:orange;
        z-index:2;
        font-size:1rem;
        font-weight: 700;
    }
`;

class search extends React.Component {
    render() {
        const results = this.props.results;
        const searchingBy = this.props.searchingBy;
        
        
        console.log(results)
        function CheckSearchResult() {
            if (results[0]) {
                return (
                    <>
                        <H_one >
                            "<span id="sreach_value">{searchingBy}</span>" 검색 결과
                        </H_one>
                        
                    </>
                )
            } else {
                return (
                    <>
                        <H_one color="red">
                        <span id="sreach_value">검색결과가 없습니다.</span>
                        </H_one>
                    </>
                )
            }
        }

        
        const resultScreen = results.map(books => {


            
            function TotalRate(){
                let sumRate = 0;
                let reviewEa = 0;
                books.review.map((reviewChild)=>{
                    sumRate += reviewChild.rate;
                    reviewEa +=1;
                })
                const totalRate = sumRate / reviewEa;
                
                if(reviewEa == 0){
                    return "";
                }
                else{
                    return totalRate;
                }
                
            }
            let totalStar = "";
            let vacantStar = "";
            let totalPoint = () => {
    
                if (TotalRate()) {
    
                    if (TotalRate() / parseInt(TotalRate()) >= 1.1) {
                        for (let i = 0; i < TotalRate(); i += 2) {
                            totalStar += "★";
                        }
                    }
                    else {
                        for (let i = 0; i < parseInt(TotalRate()); i += 2) {
                            totalStar += "★";
                        }
                    }
                    
                }
                vacantStar = 5-totalStar.length;
                    for(let j=0; j<vacantStar; j++){
                        totalStar+="☆"} 
            }
            totalPoint();
            
            
            return (
                
                    <A href={`/${this.props.routes.bookDetail(books.id)}`}>
                        <Image src={books.imageUrl} />
                        <TextArea>
                            <BookTitle>{books.title}</BookTitle>
                            <Author>{books.author}</Author>
                            <Description>{books.description.substring(0, 200)}...
                            </Description>
                        </TextArea>
                        <Bookinfo>
                        <Bookmark><i className="fas fa-bookmark"></i><span>{books.likeFigure}</span></Bookmark>
                            <Publisher>{books.publisher}</Publisher>
                            <Star>{totalStar}</Star>

                        </Bookinfo>
                        {/* <Span>{books.description}</Span> */}
                    </A>
                
            )
        })
        return (
            <BaseLayout>
                <GlobalStyle />
                <Body>
                    {Header(this.props)}
                    {/* {sortNav(this.props)} */}
                            <CheckSearchResult />
                        
                        <Grid_box>
                            {resultScreen}
                        </Grid_box>
                        
                    
                    <script src="/vanilla/search.js"></script>
                </Body>
            </BaseLayout>
        );
    }
}

export default search;
