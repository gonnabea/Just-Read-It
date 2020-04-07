import React from "react";
import Title from "./title";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";
import sortNav from "./globalStyles/sortNav";


const Flex_box = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    align-items:center;
    justify-content:center;
    text-align:center;
    flex-direction:column;
`;
 
const Grid_box = styled.div`
    display:flex;
    justify-content:center;
    -webkit-perspective: 1800px;
	perspective: 1800px;
	-webkit-perspective-origin: 50% 15%;
	perspective-origin: 50% 15%;
    flex-direction:column;
    width:100%;
    height:100%;
    align-items:center;
    margin:0 auto;
    bottom:0;
    transform-style: preserve-3d;
    animation-fill-mode: forwards;

    &>div>div>div>a>img:nth-child(1){
        /*앞 */
        visibility: hidden; 
        /* opacity: 0; */
    }
    &>div>div>div>a>div:nth-child(3){
        /*뒤 */
        visibility: hidden; 
         /* opacity: 0;  */
    }
    &>div>div>div>a>div:nth-child(4){
        /*위 */
         visibility: hidden;  
        /* opacity: 0; */
    }

    &>div>div>div:hover{
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
    width:100%;
    position:absolute;
    top:46%;
    z-index:-1;
    display:flex;
    flex-direction:column;
    align-items:center;
   
    @media screen and (max-width: 1300px)
    { 
        &>img
        {
            width:100%;
        }   
    }
`;

const Div = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    transform-style: preserve-3d;
    text-overflow: ellipsis;
    height: 400px;
    width:40px;
`;

const ImageSize = styled.img`
    width: 295px;
	height: 400px;
    transform: rotateY(90deg) translateX(147.5px) translateZ(20px);
    position:absolute;
    z-index:2;
`;

const Side_cover = styled.div`
    width: 40px;
    height: 400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:${props => props.coverColor ? props.coverColor : "skyblue"};
    
    background-size: cover;
    border:solid 2px black;
    color:white;
    z-index:3;
    
    font-size:100%;
    overflow:hidden;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-align:center;
    border-radius:5px;
    
`;

const Back_cover = styled.div`
    position:absolute;
    z-index:-1;
    width: 295px;
	height: 400px;
    background-color:${props => props.coverColor ? props.coverColor : "#E7E3DC"};
    
     /* background-image:url("https://cdn.pixabay.com/photo/2017/07/20/09/35/particles-2521732_960_720.jpg");   */
    /* background-image:url("https://cdn.pixabay.com/photo/2019/12/21/07/44/frame-4709861_960_720.png");  */
    color:black;
    transform: rotateY(-90deg) translateX(-147.5px) translateZ(20px);
    overflow:hidden;
    text-overflow:hidden;
    text-transform: capitalize;
    white-space : pre-wrap;
`;

const Up_cover = styled.div`
    width: 39px;
    height: 295px;
    /* background:black; */
    transform:translateY(-252px) translateZ(-148px) rotateX(90deg); 
    position:absolute;
    bottom:0;
    z-index:1;
    /* background: rgb(255,255,255);
    background: linear-gradient(93deg, rgba(255,255,255,1) 0%, rgba(20,20,20,0.9626225490196079) 51%, rgba(255,255,255,1) 100%); */
    background-image:url("https://st4.depositphotos.com/3133481/26411/v/1600/depositphotos_264116832-stock-illustration-background-with-pink-glowing-striped.jpg");

`;

const Input = styled.button`

    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.75);
    font-size:1rem;
    margin: 1rem auto;
    padding:2px;
    border-radius:5px;
    width:30px;
    height:30px;
    background:#F6BD47;
    color:#fff;
    border:none;
    position:relative;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;

    &>i{
        font-size:1.6rem;
    }
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
`;

const A = styled.a`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    transform-style: preserve-3d;
    &:hover{
        cursor: pointer;
        animation: hover_book 0.7s linear forwards;
        z-index:10;
        
        &>div:nth-child(3){
            /* animation: hover_shadow 1s linear forwards; */
        }
    }
    @keyframes hover_shadow{
        0%{
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.0),0px 0px 0px 0px rgba(0,0,0,0.0);
        }
        100%{
            box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.75), -4px 7px 5px 0px rgba(0,0,0,0.75),0px 0px 21px -5px rgba(0,0,0,0.75);
        }
    }

    @keyframes hover_book {
        0%{

        } 
        15%{
            transform:rotateX(-0deg) translateZ(150px);
        }
        50%{
            transform:rotateX(0deg) translateZ(500px);
        }
        100%{ 
            transform: translateX(-100px) translateZ(300px) rotateY(-90deg);
        }
    }

    &:active{
        /* animation: active_book 0.5s linear forwards; */
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

const Span = styled.span`
    width: 15rem;
    overflow: hidden;
`;

const H2 = styled.h2`
    margin-top:12vh;
    margin-bottom:3rem;
`;

const Background_img = styled.div`
    position:absolute;
    top:0; 
    width:100%;
    height:100%;
    z-index:-2;
    background-image:url("\/images/wood.jpg");
    background-repeat:repeat;
    background-position:center center;
    background-size:100% 100%;
    @media screen and (min-height: 100vh)
    {
        height:150vh;
    }
`;

const Box = styled.div`
    display:flex;
    height:100%;
    align-items:center;
    flex-direction:column;
    align-items:center;
`;

const Books_box = styled.div`
    display:flex;
    width:400px;
    height:100%;
    flex-wrap:wrap;
    justify-content:center;
   
    img:last-child{
        position:absolute;
        /* top:-25%; */
        top:65%;
        width:100%;
        height:100px;
        z-index:-1;
        @media screen and (max-device-width: 420px)
        {
        }
    }
    
    img:nth-last-child(2)
    {
        z-index:-1;
        @media screen and (max-device-width: 420px)
        {
            position:absolute;
            top:100%;
        }
    }
    /* @media screen and (max-width: 1000px) and (min-width: 300px)
    {
        img:nth-last-child(2){
            width:100%;
        }
        width:40vh;
    } */
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
                        님의 서재
                    </H2>
                    <Grid_box className="list">
                        <Box>
                            <Books_box>
                                {this.props.currentUser.favBooks.map(book => {
                                    return (
                                        <>
                                            <Div className="my_book_list_book">                                                      <A href={`/${this.props.routes.bookDetail(book.id)}`}>
                                                <ImageSize src={book.imageUrl} />

                                                <Side_cover className="my_book_list_side_cover">
                                                   {book.title}
                                                </Side_cover>
                                                {/* <h4>{book.author}</h4> */}
                                                <Back_cover className="Back_cover">
                                                    <span>{book.description}</span>
                                                </Back_cover>
                                                <Up_cover></Up_cover>
                                            </A>
                                                <form className="My_book_list_form" action={routes.deleteFavBook(book.id)} method="post">
                                                    <Input value="삭제" ><i className="fas fa-trash-alt"></i></Input>
                                                </form>
                                            </Div>
                                        </>
                                    )
                                })}

                            </Books_box>
                        </Box>
                    </Grid_box>
                </Flex_box>
                <Background_img >

                </Background_img>
                <script src="/vanilla/myBookList.js"></script>

            </BaseLayout>
        )
    }

}

export default MyBookList