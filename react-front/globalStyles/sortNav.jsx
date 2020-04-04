import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const SlideContainer = styled.section`
    position:absolute;
`;

const GenreSort = styled.nav`
    background-color:rgba(0,0,0,0.3);
    width: 10rem;
    height:100%;
    z-index: 100;
    position:fixed;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    display:none;
    color: white;

`;

const SlideNav = styled.section`
    position:fixed;
    z-index:200;
    display:flex;
    height:100%;
    color:#F6B93B;

    &>span{
        align-self:center;
    }
 
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
`;

const Genre = styled.input`
    width:9.5rem;
    height:3rem;
    border:none;
    text-align: center;
    font-weight:700;
    font-size:2vh;

    background-color:rgba(0,0,0,0.3);
    color:white;
    cursor: pointer;
    overflow: hidden;
    outline:none;

    &:hover{
        color:black;
        background-color:#F6B93B;
    }
    /* transition: all 0.5s ease; */
    /* animation: Genre_select 0.2s linear forwards;  */
  
    @keyframes Genre_select{
        0%{

        }
        100%{
            color:black;
            background-color:#F6B93B;
            transition: all 0.5s ease;
            -webkit-transition: all 0.5s ease;
            /* transform: translate(-17px, 0px) skewX(-30deg);
             -webkit-transform: translate(-15px, 0px) skewX(30deg); */
        }
    }
    @media screen and (max-device-width: 420px)
    {
        font-size:1.5rem;
        height:7.2rem;
    }
`;

const SlideBtn = styled.span`
    cursor:pointer;
    align-self:center;
`;

let sortedBy;
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
  
   
function sortNav(props) {
    props.books.map(book => {
        genre(book)
    })
    return(
            <>
                <SlideContainer>
                    <div style={{height:"60px"}}></div>
                    <SlideNav id="sortNav">
                        <SlideBtn id="sortBtn" className="far fa-caret-square-right fa-3x">
                        </SlideBtn>
                        <GenreSort id="sortContent">
                            <form action={props.routes.sortBooks("novel")} method="post">
                                <Genre id="genreMenus" type="submit" value="소설" />
                            </form>
                            <form action={props.routes.sortBooks("self-development")} method="post">
                                <Genre id="genreMenus" type="submit" value="자기계발서" />
                            </form>
                            <form action={props.routes.sortBooks("programming")} method="post">
                                <Genre id="genreMenus" type="submit" value="개발관련서적" />
                            </form>
                            <form action={props.routes.sortBooks("autobiography")} method="post">
                                <Genre id="genreMenus" type="submit" value="자서전" />
                            </form>
                            <form action={props.routes.sortBooks("overseas")} method="post">
                                <Genre id="genreMenus" type="submit" value="해외서적" />
                            </form>
                            <form action={props.routes.sortBooks("essay")} method="post">
                                <Genre id="genreMenus" type="submit" value="시/에세이" />
                            </form>
                            {/**/}
                            <form action={props.routes.sortBooks("business")} method="post">
                                <Genre id="genreMenus" type="submit" value="경제/경영" />
                            </form>
                            <form action={props.routes.sortBooks("history")} method="post">
                                <Genre id="genreMenus" type="submit" value="역사/문화" />
                            </form>
                            <form action={props.routes.sortBooks("religion")} method="post">
                                <Genre id="genreMenus" type="submit" value="종교" />
                            </form>
                            <form action={props.routes.sortBooks("society")} method="post">
                                <Genre id="genreMenus" type="submit" value="정치/사회" />
                            </form>
                            <form action={props.routes.sortBooks("culture")} method="post">
                                <Genre id="genreMenus" type="submit" value="예술/대중문화" />
                            </form>
                            <form action={props.routes.sortBooks("science")} method="post">
                                <Genre id="genreMenus" type="submit" value="과학" />
                            </form>
                            <form action={props.routes.sortBooks("tech")} method="post">
                                <Genre id="genreMenus" type="submit" value="기술/공학" />
                            </form>
                            <form action={props.routes.sortBooks("etc")} method="post">
                                <Genre id="genreMenus" type="submit" value="기타" />
                            </form>
                        </GenreSort>
                    </SlideNav>
                    <script src="/vanilla/sortNav.js"></script>

                </SlideContainer>
            </>
    )
}

export default sortNav;
