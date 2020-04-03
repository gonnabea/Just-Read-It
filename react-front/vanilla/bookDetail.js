const book = document.getElementById("book");
const rotateBtn = document.getElementById("rotateBtn");
const openBtn = document.getElementById("openBtn");
const frontCover = document.getElementById("frontCover");
const coverImg = document.getElementById("coverImg");
const bookSpine1 = document.getElementById("bookSpine1");
const bookSpine2 = document.getElementById("bookSpine2");
const commentedAt = document.getElementById("commentedAt");
const postReview = document.getElementById("postReview");
const postReviewBtn = document.getElementById("postReviewBtn");
const reviewContent = document.getElementById("reviewContent");
const reviewRate = document.getElementById("reviewRate");
const commentList = document.getElementById("commentList");

const prev_btn = document.getElementById("prev_btn");
const next_btn = document.getElementById("next_btn");
const book_page = document.getElementById("book_page");





function rotate(){
    book.style.animation="book-rotate2 1s forwards";
    coverImg.style.animation="showImage  forwards";
    
    book.style.perspective= "none";
    bookSpine1.style.opacity="1";
    bookSpine2.style.opacity="1";
    rotateBtn.removeEventListener("click", rotate);
    rotateBtn.addEventListener("click", revertRotate);

    openBtn.removeEventListener("click", close);
    openBtn.addEventListener("click", open);
}

function revertRotate(){
    book.style.animation="revert-rotate 1s forwards";
    frontCover.style.animation="closeBook forwards";
    coverImg.style.animation="showImage 0.5s forwards";
    book.style.perspective= "none";
    frontCover.addEventListener("mouseover", rotate2);

    rotateBtn.removeEventListener("click", revertRotate);
    rotateBtn.addEventListener("click", rotate);
}

function close(){
    book.style.animation="revertBook 0.5s ease-in-out forwards";
    frontCover.style.animation="closeBook 0.5s ease-in-out forwards";
    
    coverImg.style.animation = "showImage 0.5s forwards";
    book.style.perspective= "130vw";
    frontCover.style.transfrom="translateZ(2vw)"
    frontCover.addEventListener("mouseover", rotate2)
    
    openBtn.removeEventListener("click", close);
    openBtn.addEventListener("click", open);
}

function rotate2(){
    book.style.animation = "book-rotate 0.5s forwards";
    bookSpine1.style.opacity="1";
    bookSpine2.style.opacity="1";
    book.style.perspective= "none";
frontCover.style.transfrom="translateZ(2vw)"
    book.addEventListener("mouseleave", revertRotate2)
}

function revertRotate2(){
    book.style.animation = "revert-rotate2 0.5s forwards";

    book.removeEventListener("mouseleave", revertRotate2)
}

function open(){
    book.style.animation="moveBook 0.5s ease-in-out forwards";
    frontCover.style.animation="openBook 0.5s ease-in-out forwards";
    
    coverImg.style.animation = "fadeImage 0.5s forwards";
    frontCover.style.transfrom="translateZ(2vw)"
    book.style.perspective= "130vw";
    bookSpine1.style.opacity="0";
    bookSpine2.style.opacity="0";
    frontCover.removeEventListener("mouseover", rotate2);

    openBtn.removeEventListener("click", open);
    openBtn.addEventListener("click", close);
    rotateBtn.removeEventListener("click", revertRotate);
    rotateBtn.addEventListener("click", rotate);
}

let star="";
let vacantStar=0;
const starPoint = (starValue) => {

    if (starValue) {
        if (starValue / parseInt(starValue) >= 1.1) {
            for (let i = 0; i < starValue; i += 2) {
                star += "★";
            }
        }
        else {
            for (let i = 0; i < parseInt(starValue); i += 2) {
                star += "★";
            }
        }
    }
    vacantStar = 5-star.length;
    for(let j=0; j<vacantStar; j++){
        star+="☆"
    }
}

async function postReviewApi(e){
    e.preventDefault();
    const yourName = document.getElementById("yourName");
    const profileUrl = document.getElementById("profileUrl");
    // console.log(reviewContent.value.length)

    if(reviewContent.value.length > 150 || reviewContent.value.length == 0)
    {
        alert("글자수 제한 최소 0부터 최대 150자까지 됩니다.")
        return ;
    }
    await axios({
        method:"post",
        url:postReview.action,
        data:{
            reviewContent: reviewContent.value,
            rate:reviewRate.value 
        }
    })
//    console.log(yourName.name,profileUrl.name)
    function currentTime(){
        const date = new Date()
        currentTime = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
        return currentTime;
    }
    
    starPoint(reviewRate.value);
    const newReview = document.createElement("newreview");
    const newComment = document.createElement("newcomment");
    const newContent = document.createElement("newcontent");
    const newStar = document.createElement("newstar");
    const newDate = document.createElement("newdate");
    const newAvatar = document.createElement("newavatar");
    const profileImg = document.createElement("img");
    const username = document.createElement("username");

    newContent.innerHTML=reviewContent.value;
    newStar.innerHTML=`${star}(${reviewRate.value})`;
    newDate.innerHTML=currentTime();
    
    username.innerHTML=yourName.name; 
    profileImg.src=profileUrl.name;
    newReview.appendChild(newContent);
    newReview.appendChild(newStar);
    newReview.appendChild(newDate);
    newAvatar.appendChild(profileImg);
    newAvatar.appendChild(username)
    newComment.appendChild(newAvatar);
    newComment.appendChild(newReview);
    commentList.appendChild(newComment);
    star="";

    profileImg.style.width="50px";
}



/*   <InputReview type="textarea" autoComplete="off" name="reviewContent" placeholder="책에 대한 평가를 남겨주세요!"  rows="1" />
<InputRate type="number" name="rate" placeholder="평점을 남겨주세요" min={0} max={10} value={0} step={.1} />
<ReviewSubmit id="postReviewBtn" type="submit" value="등록" />
*/

/*
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
color:black;
margin-top:0.3rem;
background-color: rgba(255,255,255,0.3);
width:25vw;
*/
let origin_description = "";

function book_description_length() {
    // console.log(book_description.innerHTML.length);
    let arr =[];
    if(book_description.innerHTML.length > 300)
    {
        let description = book_description.innerHTML.substring(0, 300);
        book_description.innerHTML = description;
    }
    arr = new Array(parseInt(origin_description.length / 300));

    book_page.innerHTML =` 0 / ${arr.length}`;
}

const nextPage = async ()=>{
    // console.log(origin_description)
    let arr=[];
    
    if(origin_description.length / 300 == parseInt(origin_description.length / 300))
    {
        arr = new Array(parseInt(origin_description.length / 300));
    }
    else
    {
        arr = new Array(parseInt(origin_description.length / 300)+1);
    }

    for(i = 0; i < arr.length; i++)
    {
        
        arr[i] = await origin_description.substring(i == 0 ?  0 :  (i == 1 ? 300 : (i * 300 )), i == 0 ? 300 : (i + 1) * 300);
    }

    // console.log(arr);
    
    // arr.map((x)=>{
    //     console.log(x.length);
    //     console.log(x);
    // })
    
    for(i = 0; i < arr.length; i++)
    {
        if(book_description.innerHTML == arr[i])
        { 
            if(i == arr.length - 1)
            {
                return ;
            }
            book_page.innerHTML =` ${i + 1} / ${arr.length -1}`;
            return book_description.innerHTML = arr[i+1];
        }
    }

    // book_description.innerHTML = arr[1]
    // let description = origin_description.substring(300, 600);
    // book_description.innerHTML = description;

}

const prevPage = async()=>{
    let arr=[];
    
    if(origin_description.length / 300 == parseInt(origin_description.length / 300))
    {
        arr = new Array(parseInt(origin_description.length / 300));
    }
    else
    {
        arr = new Array(parseInt(origin_description.length / 300)+1);
    }

    for(i = 0; i < arr.length; i++)
    {
        arr[i] = await origin_description.substring(i == 0 ?  0 :  (i == 1 ? 300 : (i * 300 )), i == 0 ? 300 : (i + 1) * 300);
    }

    for(i = 0; i < arr.length; i++)
    {
        if(book_description.innerHTML == arr[i])
        {
            if(i == 0)
            {
                return ;
            }
            book_page.innerHTML = `${i - 1} / ${arr.length - 1}`;

            return book_description.innerHTML = arr[i-1];
        }
    }
    // let description = origin_description.substring(0, 300);
    // book_description.innerHTML = description;
}

async function bookInit(){
    const book_description =await document.getElementById("book_description");
    origin_description = book_description.innerHTML;

    rotateBtn.addEventListener("click", rotate);
    openBtn.addEventListener("click", open);
    frontCover.addEventListener("mouseover", rotate2);
    if(postReview)
    {
        postReview.addEventListener("submit", postReviewApi);
    }

    book_description_length();
    next_btn.addEventListener("click", nextPage);
    prev_btn.addEventListener("click", prevPage);
}

bookInit();

