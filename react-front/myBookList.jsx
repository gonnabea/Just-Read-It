import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";



const Flex_box = styled.div`
    display:flex;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
    text-align:center;
    
`;

const Grid_box = styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    perspective:800px;  

    width:80%;
    height:60vh;
    align-items:center;
    margin:0 auto;
    bottom:0;
    transform-style: preserve-3d;
    animation-fill-mode: forwards;

    &>div>div>a>img:nth-child(1){
        /*앞 */
        visibility: hidden; 
        /* opacity: 0; */
    }
    &>div>div>a>div:nth-child(3){
        /*뒤 */
        visibility: hidden; 
         /* opacity: 0;  */
    }
    &>div>div>a>div:nth-child(4){
        /*위 */
         visibility: hidden;  
        /* opacity: 0; */
    }

    &>div>div:hover{
        &>a>img:nth-child(1){
        /*앞 */
        visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
        &>a>div:nth-child(3){
            /*뒤 */
            visibility: visible;
            animation: fade_in_out 0.5s linear;
            animation-fill-mode: forwards;
        }
        &>a>div:nth-child(4){
            /*위 */
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
    bottom:5%;
    margin:0 auto;
    z-index:-1;
    &>img{
        width:120vh;
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
    margin-bottom: -22.5vh;
    /* margin-right:0.2rem; */
    transform-style: preserve-3d;
    text-overflow: ellipsis;
    
    &:hover{
        cursor: pointer;
        animation: hover_book 0.4s linear forwards;
    }
            @keyframes hover_book {
                0%{

                } 
                100%{ 
                    transform:rotateX(-30deg) translateZ(10vh);
                }
            }

    &:active{
        animation: active_book 0.5s linear forwards;
    }
        @keyframes active_book{
            0%{
                transform:rotateX(-30deg) translateZ(10vh);
            }
           
            100%{
                transform:  translateZ(20vh) ;

            }
        }
      


`;

const ImageSize = styled.img`
    width:20vh;
    height:40vh;
    transform: rotateY(90deg)   translateX(10.2vh)  translateZ(2.5vh)   ;
    position:absolute;
    z-index:2;
`;

const Side_cover = styled.div`
    width: 5.7vh;
    height:40vh;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    background-color:${props => props.coverColor ? props.coverColor : "pink"};
    color:white;
    z-index:3;
    
    color:red;
    font-size:100%;
    overflow:hidden;
    text-align:center;
    writing-mode: vertical-rl;
    text-orientation: mixed;
`;

const Back_cover = styled.div`
    z-index:-1;
    width:20vh;
    height:40vh;
    /* background-color:${props => props.coverColor ? props.coverColor : "black"}; */
     background-image:url("https://cdn.pixabay.com/photo/2017/07/20/09/35/particles-2521732_960_720.jpg");  
    /* background-image:url("https://cdn.pixabay.com/photo/2019/12/21/07/44/frame-4709861_960_720.png");  */
    color:white;
    text-overflow:hidden;
    overflow:hidden;
    transform:rotateY(-90deg) translateX(-10.2vh) translateZ(2.5vh); 
    position:absolute;
`;

const Up_cover = styled.div`
    width: 5.25vh;
    height:20vh;
   /* background:black; */
    transform:   translateY(-30vh) translateZ(-9.8vh)  rotateX(90deg); 
    position:absolute;
    bottom:0;
    z-index:2;
    background: rgb(255,255,255);
    background: linear-gradient(93deg, rgba(255,255,255,1) 0%, rgba(20,20,20,0.9626225490196079) 51%, rgba(255,255,255,1) 100%);


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
    transform-style: preserve-3d;
    margin:0 0.2vh;
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

const Background_img = styled.img`
    position:absolute;
    width:100%;
    height:100%;
    z-index:-5;
    background-image:url("\/images/wood.jpg");

`;

const Box = styled.div`
    display:flex;
    height:35.5vh;
    align-items:center;
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
                        <Box>
                            {this.props.currentUser.favBooks.map(book => {
                                return (
                                    <>
                                        <Div>
                                            <A href={`/${this.props.routes.bookDetail(book.id)}`}>
                                                <ImageSize src={`/${book.imageUrl}`} />

                                                <Side_cover>
                                                    {book.title}
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
                                    </>
                                )
                            })}
                        </Box>
                    </Grid_box>
                    <Bottom_nav>
                        <img src="../images/shelf.png" alt="" />
                    </Bottom_nav>
                    <Background_img />
                </Flex_box>
            </BaseLayout>
        )
    }

}

export default MyBookList