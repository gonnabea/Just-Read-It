import React from "react";
import Header from "./globalStyles/Header";
import ReactDOM from "react-dom";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";
import sortNav from "./globalStyles/sortNav";

const Body = styled.div`
    width:100%;
    height:100vh;
    position:absolute;
`;

const Bookdiv = styled.a`
    /* float:left; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    color:black;
    width:250px;
    height:400px;
    font-size:1rem;
    margin:0.7rem;
    border:2px solid orange;
    border-radius:5px;
    box-shadow: 0px 4px 5px 1px #F6B93B;
    color: white;
    background-color: rgba(0,0,0,0.4);
    img:first-child{
        width:200px;
        height:250px;
        border-radius: 10px;
    }
    div:nth-child(2){
        margin-top:0.5rem;
    }

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
`;
const Div_box = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    top:10rem;
    width:100%;
    height:100%;
    background-color:#E7E3DC;
    @media screen and (max-device-width: 420px) 
    {
        top:13rem;
    }
`;

const Div_flex = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    width:100%;
    height:100%;
    
`;

const H_one = styled.h1`
    margin:1rem;
`;

const Book_img = styled.img`
    &:hover{
        animation:hover_img 1s linear infinite forwards;
        transition-delay:1s;
    }
    /* box-shadow: 0px 0px 29px 0px rgba(0,0,0,0.75); */

    @keyframes hover_img{
        0%{
            box-shadow: 0px 0px 10px 2px #F6B93B;
        }
        20%{
            box-shadow: 0px 0px 20px 5px #F6B93B;
        }
        100%{
            box-shadow: 0px 0px 29px 0px #F6B93B;
        }
    }

`;

const BookTitle = styled.div`
font-weight: 700;
font-size: 20px;
`

const BackgroundAll = styled.div`
background-color:#E7E3DC;
`



class sortBooks extends React.Component {
    render() {
        const sortedBy = this.props.sortedBy;
        
        const books = this.props.books.map((book) => {
            return (

                <Bookdiv href={`/${this.props.routes.bookDetail(book.id)}`}>
                    <Book_img src={book.imageUrl} />
                    <BookTitle>
                        {book.title}
                    </BookTitle>
                    <div>
                        작가 : {book.author}
                    </div>
                    <div>
                         조회수 : {book.viewsFigure}회 
                    </div>
                    <div>
                        분류 : {sortedBy}
                    </div>
                    {/* <div>({book.enrolledBy[0].username}님이 등록)</div>
                    <div>{JSON.stringify(book.createdAt)}</div> */}
                </Bookdiv>
            )
        });
        return (
            <BaseLayout>
                <GlobalStyle />
                <BackgroundAll>
                    {Header(this.props)}
                    {sortNav(this.props)}
                    <Div_box>
                        <H_one id="sort_value">
                            {sortedBy}
                        </H_one>
                        <Div_flex>
                            {books}
                        </Div_flex>
                    </Div_box>
                </BackgroundAll>
                <script src="/vanilla/sortNav.js"></script>
            </BaseLayout>

        )
    }
}

export default sortBooks;
