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
    display:flex;
    justify-content:center;

    width:80%;
    height:40vh;
    justify-content:center;
    align-items:center;
    margin:0 auto;
    bottom:0;
 
`;

const Bottom_nav = styled.div`
    position:absolute;
    bottom:8%;
    margin:0 auto;
    z-index:-2;
    &>img{
        width:60rem;
    }    
    @media screen and (max-width: 1300px)
    { 
        &>img
        {
            width:100%;
        }   

    }
`;

const Div = styled.div`
    width:35px;
    position: relative;
    bottom: 32%;
    margin-bottom: 3rem;
    margin-right:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    transform-style: preserve-3d;
    
    &:hover{
        cursor: pointer;
        animation: book 0.5s linear ;
        animation-fill-mode: forwards;
        transform-style: preserve-3d;
       
    }


    :active{
        animation: front 0.5s linear ;
        animation-fill-mode: forwards;
    }
        transform-style: preserve-3d;
        /* perspective:100px;  */
        
        @keyframes front{
            0%{
                transform: translateZ(0px)  translateY(10px)   rotateX(-15deg) rotateY(-7deg) ;
            }
            100%{
                transform: translateX(100px) rotateY(-90deg);
            }
        }
     


    @keyframes book {
        0%{
           
            transform:translateZ(0px)  rotateX(-3deg) rotateY(-3deg) ;
        } 
        100%{ 
            transform: translateZ(-10px)  translateY(15px)   rotateX(-15deg) rotateY(-7deg) ;
           
        }
    }


`;

const ImageSize = styled.img`
    width:40vh;
    height:45vh;
    margin-right:-6.3rem;
    transform: rotateY(90deg)   translateX(20vh)  translateZ(2vh)  translateY(0.4vh) ;
    position:absolute;
    z-index:2;

`;

const Side_cover = styled.div`
    width: 20vh;
    height:45vh;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    background-color:${props => props.coverColor ? props.coverColor : "pink"};
    color:white;
    text-overflow: ellipsis;

    overflow:hidden;
    z-index:1;

    &>span{
        width:30px;
        text-align:center;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }

`;

const Back_cover = styled.div`
    margin-left:-6.3rem;
    width: 39.3vh;
    height:45vh;
    background-color:${props => props.coverColor ? props.coverColor : "black"};
    color:white;
    text-overflow:hidden;
    overflow:hidden;
    transform:rotateY(-90deg) translateX(-20vh) translateZ(-11vh); 
    position:absolute;
    z-index:1;
`;

const Up_cover = styled.div`

    background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAIVBMVEX///8AAADS0tI1NTVRUVEyMjJmZmYZGRlAQEDW1tbZ2dmAbgc1AAAAYElEQVR4nO3QgQ2AIAwAsCFOxf8P5otlmvaERgAAAAAAAAAAAAAAAAAAAAAAAADAb5w5O8ur4OAevT0FB+vo7S04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCDNrBKA+vIaTt5AAAAAElFTkSuQmCC");
    width: 2.7rem;
    height:40vh;
    background-color:${props => props.coverColor ? props.coverColor : "black"};    
    background:black;
    transform:rotateX(90deg)  translateX(-0.2vh) translateY(-20vh)   translateZ(-4.6vh) ; 
    position:absolute;
    bottom:65%;
    z-index:3;

`;


const Image_box = styled.img`
    width: 25px;
    height:15rem;
    margin-right:-5px;
`;

const Input = styled.input`
    position:absolute;
    bottom:2%;
    left:0;
    z-index:2;
    &:hover{
        cursor: pointer;
    }
`;

const A = styled.a`
   position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    width:50px;
    transform-style: preserve-3d;
/* 
    &:hover{
        cursor: pointer;
        animation: book 0.5s linear ;
        animation-fill-mode: forwards;
        transform-style: preserve-3d;
        &>img:first-child{
        }
    }


    :active{
        animation: front 0.5s linear ;
        animation-fill-mode: forwards;
        transform-style: preserve-3d;
    }
    @keyframes front{
        0%{
            transform: translateZ(-10px)  translateY(10px)   rotateX(-15deg) rotateY(-7deg) ;
        }
        100%{
            transform: translateZ(-200px) rotateY(-90deg);
        }
    }


    @keyframes book {
        0%{
           
            transform:translateZ(0px)  rotateX(-3deg) rotateY(-3deg) ;
        } 
        100%{ 
            transform: translateZ(-10px)  translateY(15px)   rotateX(-15deg) rotateY(-7deg) ;
           
        }
    } */


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
                                        <ImageSize  src={`/${book.imageUrl}`} />

                                        <Side_cover>
                                            <span >{book.title}</span>
                                        </Side_cover>
                                        {/* <h4>{book.author}</h4> */}
                                        <Back_cover className="Back_cover">
                                            <span>{book.description}</span>
                                        </Back_cover>
                                        <Up_cover></Up_cover>
                                    </A>
                                    <form action={routes.deleteFavBook(book.id)} method="post">
                                        <Input type="submit" value="삭제" />
                                    </form>
                                </Div>
                            )
                        })}
                    </Grid_box>
                    <Bottom_nav>
                        <img src="../images/shelf.png" alt="" />
                    </Bottom_nav>
                </Flex_box>
            </BaseLayout>
        )
    }

}

export default MyBookList