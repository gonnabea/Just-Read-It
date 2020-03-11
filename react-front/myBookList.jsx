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
    transform-style: preserve-3d;
    perspective: 650px; 
    animation-fill-mode: forwards;
    &>div>a>img:nth-child(1){
        /*앞 */
        visibility: hidden; 
        /* opacity: 0; */
    }
    &>div>a>div:nth-child(3){
        /*뒤 */
        visibility: hidden; 
         /* opacity: 0;  */
    }
    &>div>a>div:nth-child(4){
        /*위 */
        visibility: hidden; 
        /* opacity: 0; */
    }
    &>div:first-child:hover{
        &>a>img:nth-child(1){
            visibility: visible;
            /* animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards; */
        }
    }
     &>div:hover{
        &>a>img:nth-child(1){
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
    } 
    &>div:nth-last-child(1):hover{
        &>a>div:nth-child(3){
            visibility: visible;
            transform:  rotateY(-90deg) translateX(-19.5vh) translateZ(-9vh);
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
    }
    &>div:nth-last-child(2):hover{
        &>a>div:nth-child(3){
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
    }
    &>div:nth-last-child(3):hover{
        &>a>div:nth-child(3){
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
    }
    &>div:nth-last-child(4):hover{
        &>a>div:nth-child(3){
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
    }
    &>div:nth-last-child(5):hover{
        &>a>div:nth-child(3){
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
    }
    

    @keyframes fade_in_out {
        0%{
            opacity: 0;
            
        }
        100%{
            opacity: 1;

        }
    }

    
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
  

    position: relative;
    bottom: 32%;
    margin-bottom: 3rem;
    margin-right:0.2rem;
    
    transform-style: preserve-3d;
    text-overflow: ellipsis;
    /* perspective:100px;  */
    
    &:hover{
        cursor: pointer;
        animation: book 1s linear ;
        animation-fill-mode: forwards;
        transform-style: preserve-3d;
    }
            @keyframes book {
                0%{
                   
                    transform:translateZ(0px)  rotateX(-3deg) rotateY(-3deg) ;
                } 
                100%{ 
                    transform: translateZ(5vh)  translateY(20px)   rotateX(-7deg) rotateY(-4deg) ;
                   
                }
            }

    :active{
        animation: front 0.5s ease-in-out;
        animation-fill-mode: forwards;
    }
        transform-style: preserve-3d;
        
        @keyframes front{
            0%{
                transform: translateZ(0px)  translateY(10px)   rotateX(-15deg) rotateY(-7deg) ;
            }
            100%{
                transform:  translateZ(20vh) ;
            }
        }
        @keyframes deg{
            0%{

            }
            100%{
                transform:  rotateY(-90deg) ;
            }
        }
        /* rotateY(0.3turn)  translateZ(300px) */


`;

const ImageSize = styled.img`
    width:40vh;
    height:45vh;
    margin-right:-6.3rem;
    transform: rotateY(90deg)   translateX(20.3vh)  translateZ(2.5vh)   ;
    position:absolute;
    z-index:1;


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
    z-index:4;
    overflow:hidden;

    &>span{
        width:30px;
        text-align:center;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }


`;

const Back_cover = styled.div`
    z-index:2;
    margin-left:-6.3rem;
    width: 39.3vh;
    height:45vh;
    background-color:${props => props.coverColor ? props.coverColor : "black"};
    color:white;
    text-overflow:hidden;
    overflow:hidden;
    transform:rotateY(-90deg) translateX(-19.8vh) translateZ(-9.4vh); 
    position:absolute;
`;

const Up_cover = styled.div`
    /* background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAIVBMVEX///8AAADS0tI1NTVRUVEyMjJmZmYZGRlAQEDW1tbZ2dmAbgc1AAAAYElEQVR4nO3QgQ2AIAwAsCFOxf8P5otlmvaERgAAAAAAAAAAAAAAAAAAAAAAAADAb5w5O8ur4OAevT0FB+vo7S04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCDNrBKA+vIaTt5AAAAAElFTkSuQmCC"); */
    width: 2.7rem;
    height:40vh;
    background-color:${props => props.coverColor ? props.coverColor : "black"};    
    background:black;
    transform:rotateX(90deg)  translateX(-0.2vh) translateY(-20vh)   translateZ(-4.6vh) ; 
    position:absolute;
    bottom:65%;

`;


const Image_box = styled.img`
    width: 25px;
    height:15rem;
    margin-right:-5px;
`;

const Input = styled.input`
    position:absolute;
    bottom:2%;
    left:20%;
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
                                            <span>{book.title}</span>
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