import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Flex_box = styled.div`
    display:flex;
    width:100%;
    height:90vh;
    align-items:center;
    justify-content:center;
    text-align:center;
`;

const Grid_box = styled.div`
    position:absolute;
    display:grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, auto);

    width:100%;
    height:40vh;
    justify-content:center;
    align-items:center;
    bottom:0;
    /* width: 30px; */

`;

const Bottom_nav = styled.div`
    /* width:100%; */
    position:absolute;
    bottom:0;
    margin:0 auto;
    &>img{
        width:100rem;
    }    
    @media screen and (max-width: 1300px)
    { 
        &>img{
        width:60rem;
    }   

    }
`;

const Div = styled.div`
    width:35px;
    position: relative;
    bottom: 0;
    margin-bottom: 3rem;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 auto;
    margin-right:2rem;
`;

const ImageSize = styled.img`
    width:35px;
    height:15rem;
    perspective : 100px;
    transform:rotateY(0);
    opacity: 0;
    margin-right:-6.3rem;
    transform-style: preserve-3d;
`;

const Side_cover = styled.div`
    width: 30px;
    height:15rem;
    text-align:center;
    background-color:${props => props.color || "gray"};
    text-overflow:hidden;
    overflow:hidden;
    z-index:2;
`;

const Back_cover = styled.div`
    margin-left:-6.3rem;
    width: 15rem;
    height:15rem;
    background-color: black;
    color:white;
    text-overflow:hidden;
    overflow:hidden;
    transform:rotateY(80deg);
`;

const Up_cover = styled.div`
    position:relative;
    top:0;
    border: 1px solid red;
    width: ${props => props.width || "30px"};
    height:${props => props.height || "15rem"};
    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAIVBMVEX///8AAADS0tI1NTVRUVEyMjJmZmYZGRlAQEDW1tbZ2dmAbgc1AAAAYElEQVR4nO3QgQ2AIAwAsCFOxf8P5otlmvaERgAAAAAAAAAAAAAAAAAAAAAAAADAb5w5O8ur4OAevT0FB+vo7S04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCDNrBKA+vIaTt5AAAAAElFTkSuQmCC");

`;

const Image_box = styled.img`
    width: 25px;
    height:15rem;
    background-color:gray;
    margin-right:-5px;
`;

const Input = styled.input`
    position:absolute;
    bottom:-15%;
    right:35%;

    display: block;
    &:hover{
        cursor: pointer;
    }
`;

const A = styled.a`
    position:relative;
    display:flex;
    bottom:0;  
    align-items:center;
    justify-content:center;
    margin-bottom: 3rem;
    transform-style: preserve-3d;
    width:35px;

    &:hover{
        cursor: pointer;
        animation: book 1s linear ;
        animation-fill-mode: forwards;

    }
    
    @keyframes book {
        0%{
            transform: rotateX(0);
            transform: translateY(0);
        } 

        100%{ 
            transform:rotateY(30deg);
            transform: rotateX(-30deg);
            transform: translateY(15px);
            /* Perspective : (100px);
            transform-origin :  0 100% 0 rotateX(-25deg); */
        }
    }

`;

const Span = styled.span`
    width: 15rem;
    overflow: hidden;
`;

const H2 = styled.h2`
    position:absolute;
    top:0;
    margin-top:6rem;
`;

class MyBookList extends React.Component {

    render() {

        const routes = this.props.routes
        return (
            <BaseLayout>
                <GlobalStyle />
                {Header(this.props)}
                <Flex_box>
                    <H2 >{this.props.currentUser.username}
                        님의 서재:
                    </H2>
                    <Grid_box className="list">
                        {this.props.currentUser.favBooks.map(book => {
                            return (
                                <Div>
                                    <A href={`/${this.props.routes.bookDetail(book.id)}`}>
                                        <ImageSize className="ImageSize" src={`/${book.imageUrl}`} />
                                        <Side_cover>
                                            <h3>{book.title}</h3>
                                        </Side_cover>
                                        {/* <h4>{book.author}</h4> */}
                                        <Back_cover className="Back_cover">
                                            <span>{book.description}</span>
                                        </Back_cover>
                                        <form action={routes.deleteFavBook(book.id)} method="post">
                                            <Input type="submit" value="즐겨찾기 삭제" />
                                        </form>
                                    </A>
                                </Div>
                            )
                        })}
                    </Grid_box>
                    <Bottom_nav>
                        <img  src="../images/shelf.png" alt="" />
                    </Bottom_nav>
                </Flex_box>
            </BaseLayout>
        )
    }

}

export default MyBookList