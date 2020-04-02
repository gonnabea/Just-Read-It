import React from "react";
import Header from "./globalStyles/Header";
import { BaseLayout } from "./globalStyles/layout";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./globalStyles/ResetCss";


const Divs = styled.div`
    /* width:100%; */
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-position:center center;
    background-size:100% 100%;
    background-image:url("https://cdn.pixabay.com/photo/2015/04/12/17/22/once-upon-a-time-719174_1280.jpg");
`;

const Box_img = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    
    box-shadow: -1px 0px 21px 0px rgba(0,0,0,0.75);
    border-radius:10px;
    border: 1px solid red;
    top:25%;
    padding:3rem;
    background-color:rgba(229, 224, 149, 0.7);
    align-items:center;
    justify-content:center;
    z-index:2;
    &:hover{
        animation: box_hover 0.5s linear forwards;
    }
    @keyframes box_hover{
        0%{
        }
        100%{
            box-shadow: 0px 10px 5px 1px rgba(0,0,0,0.75);
        }
    }

`;

const Input = styled.input`
    margin: 1.2vh;
    font-size: 2vh;
    width:100%;
    background:none;
    border: solid 0px;
    border-bottom: solid 0.15vh white; 
    margin-bottom:10px;
    ::placeholder{
        color: white;
        text-align:center;
    }
    :focus{
        color:#F6B93B;
        outline: none;
        animation: makeBorder 0.4s linear forwards;
        ::placeholder{
        color:#F6B93B;
        text-align:center;
        
    }
        @keyframes makeBorder {
            0%{
                background:none;
            }
            100%{
                border-bottom: solid 0.2vw #F6B93B;
                background-color:white;
            }
        }
    }
`;

const Ainput = styled.textarea`
    margin: 1.2vh;
    font-size: 2vh;
    width:100%;
    background:none;
    border: solid 0px;
    border-bottom: solid 0.15vh white; 
    resize:none;
    ::placeholder{
        color: white;
        text-align:center;
    }
    :focus{
        height:150px;
        color:#F6B93B;
        outline: none;
        animation: makeBorder 0.4s linear forwards;
        ::placeholder{
        color:#F6B93B;
        text-align:center;
        
    }
        @keyframes makeBorder {
            0%{
                background:none;
            }
            100%{
                border-bottom: solid 0.2vw #F6B93B;
                background-color:white;
            }
        }
    }
`;

const Form = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
}



const Image_box = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
`;

const Image = styled.img`
    position:relative;
    width:100%;
    z-index:1;
`;

const KaKao_form = {
    marginTop: "0.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

};

const Kakao_list = styled.section`
    position:absolute;
    top:100%;
    display:grid;
    width:100%;
    grid-template-columns: repeat(5,1fr);
    grid-row-gap:15vh;
    grid-column-gap:3vh;
    background-position:center center;
    background-size:100% 100%;
    background-repeat:repeat;
    background-image:url("https://cdn.pixabay.com/photo/2016/11/21/00/25/philatelist-1844078_1280.jpg");
    &>div{
        display:block;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
        color:black;
        overflow-y:auto;
        text-overflow:scroll;
        overflow-x: hidden;
        height:43.5vh;
        button{
            z-index:4;
            margin-bottom:2vh;
            color:red;
            :hover{
                cursor:pointer;
            }
            :active{
            }
        }
        a{
            margin-bottom:1vh;
            opacity:0.85;
            :hover{
                opacity:1;
                color:black;
            }
            color:rgb(255, 255, 255);
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
         
        }
    }
`;

const Submit = styled.input`
    width:120px;
    height:50px;
    background-color:white;
    text-align: center;
    font-weight:700;
    font-size: 2vh;
    border: solid .3vh black;
    margin-top:0.2rem;
    margin-bottom:30px;
    :hover{
        cursor:pointer;

        color:white;
        border:none;
        animation: button-color 0.3s linear forwards;
        @keyframes button-color {
            0%{
                background-color: white;
            }
            100%{
                background-color:#F6B93B;
            }
        }
    }
    @media screen and (max-device-width: 420px)
    {
        width: 70%;
        height: 100%;
    }
`

const InputFile = styled.input`
    
    button:nth-child(1){
        border: none;
        background-color: #3498db;
        color: white;
        height: 100%;
    }

    @media screen and (max-device-width: 420px)
    {
        font-size:2rem;
        width: 100%;
        height: 100%;
    }
`;

const Section = styled.section`
    width:100%;
    display:flex;
    margin-bottom:30px;
    @media screen and (max-device-width: 420px)
    {
        font-size:2rem;
        width:80%;
        flex-direction:column;
    }
    @media  screen and (max-width: 500px) 
    {
        width:80%;
        font-size:100%;
        flex-direction:column;
    }
`;

const Formdiv = styled.div`
    margin-top:0.3rem;
    width:100%;

    @media screen and (min-width: 300px) and (max-width: 800px) {
        font-size:100%;
        &>form{
            display:flex;
            flex-direction:column;
        }
    }

`;

const GenreSelect = styled.select`

    color:#F5BA40;
    border:solid 2px #F5BA40;
    @media screen and (max-device-width: 420px)
    {
        width: 100%;
        height: 3rem;
    }
`

const UploaderCover = styled.div`
    margin-right:1rem;

     &>label{
        cursor:pointer;
        overflow: hidden;
        transition: all 0.3s;
        background: none;
        border: 3px solid #F8C152;
        border-radius: 5px;
        color: #fff;
        display: block;
        font-size: 1em;
        font-weight: bold;
        position: relative;
        text-transform: uppercase;
        width:100%;

        &::before,
        &::after {
            background: #fff;
            content: '';
            position: absolute;
            z-index: -1;
        }

        :hover {
            color: #F8C152;
        }

        ::after {
            height: 100%;
            left: -20%;
            top: 0;
            transform: skew(-50deg);
            transition-duration: 0.6s;
            transform-origin: top left;
            width: 0;
        }

        :hover:after {
            height: 100%;
            width: 135%;
        }
    }
    
    input[type=file]
    {
        display:none;
    }
`;

class uploadBook extends React.Component {


    render() {

        return (
            <BaseLayout>
                <GlobalStyle />
                <div >
                    {Header(this.props)}
                </div>
                <Divs>
                    <Box_img>
                        {/* {console.log(this.props.routes.addBook)} */}
                        <form autocomplete="off" style={Form} action={this.props.routes.addBook} method="post" enctype="multipart/form-data">
                            <Input type="text" style="font-weight=700" id="bookTitle" name="bookName" placeholder="책 제목 <필수>" required="true" />
                            <Ainput type="textarea" id="bookDescription" name="bookDescription" placeholder="책 상세설명" />
                            <Input type="text" name="author" id="bookAuthor" placeholder="작가 이름 <필수>" required={true} />
                            <Input type="text" name="price" id="bookPrice" placeholder="가격" />
                            <Input type="text" name="publisher" id="publisher" placeholder="출판사" />
                            <Input type="text" name="publishedAt" id="publishedAt" placeholder="출판일" />
                            <Input type="text" name="buyLink" id="buyLink" placeholder="구매 링크" />
                            <Section>
                                <UploaderCover>
                                    <label for="bookThumbnail">File Upload</label> 
                                    <InputFile id="inputFile" id="bookThumbnail" type="file" name="bookImage" accept="image/*" required={true} />
                                </UploaderCover>
                                <GenreSelect id="genres" name="genre" required="true">
                                    <option value="">장르를 선택하세요</option>
                                    <option value="novel">소설</option>
                                    <option value="self-development">자기계발서</option>
                                    <option value="programming">개발관련서적</option>
                                    <option value="autobiography">자서전</option>
                                    <option value="overseas">해외서적</option>
                                    <option value="essay">시/에세이</option>
                                    <option value="business">경제/경영</option>
                                    <option value="history">역사/문화</option>
                                    <option value="religion">종교</option>
                                    <option value="society">정치/사회</option>
                                    <option value="culture">예술/대중문화</option>
                                    <option value="science">과학</option>
                                    <option value="tech">기술/공학</option>
                                    <option value="etc">기타</option>
                                </GenreSelect>
                                <h5>{this.props.msg}</h5>
                            </Section>
                            <Submit type="submit" value="등록하기" />
                        </form>

                        <Formdiv>
                            <img src="/images/kakaotalk.png" width="30px"/>
                            카카오 책에서 찾아보기
                            <form autocomplete="off" style={KaKao_form} id="kakaoBook" method="get">
                                    <Input type="text" id="target" placeholder="책 제목을 입력하세요" autocomplete="off" />
                                    <Submit style={{ cursor: "pointer", margin: "0.2rem" }} type="submit" value="검색" />
                            </form>
                        </Formdiv>
                    </Box_img>
                    <Kakao_list id="resultScreen"></Kakao_list>
                    <Image_box>
                        <Image src="https://cdn.pixabay.com/photo/2019/07/23/02/19/laurel-4356464_960_720.png" />
                    </Image_box>
                </Divs>
                <script src="/vanilla/uploadBook.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
            </BaseLayout>
        )

    }
}

export default uploadBook;
