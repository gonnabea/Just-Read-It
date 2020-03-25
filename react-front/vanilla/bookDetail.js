const book = document.getElementById("book");
const rotateBtn = document.getElementById("rotateBtn");
const openBtn = document.getElementById("openBtn");
const frontCover = document.getElementById("frontCover");
const coverImg = document.getElementById("coverImg");
const bookSpine1 = document.getElementById("bookSpine1");
const bookSpine2 = document.getElementById("bookSpine2");
const commentedAt = document.getElementById("commentedAt");




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
    frontCover.style.transformStyle="preserve-3d";
    coverImg.style.animation = "showImage 0.5s forwards";
    book.style.perspective= "130vw";
    frontCover.addEventListener("mouseover", rotate2)
    
    
    openBtn.removeEventListener("click", close);
    openBtn.addEventListener("click", open);
}

function rotate2(){
    book.style.animation = "book-rotate 0.5s forwards";
    bookSpine1.style.opacity="1";
bookSpine2.style.opacity="1";
book.style.perspective= "none";
book.addEventListener("mouseleave", revertRotate2)
}

function revertRotate2(){
    book.style.animation = "revert-rotate2 0.5s forwards";
    book.removeEventListener("mouseleave", revertRotate2)
}

function open(){
    book.style.animation="moveBook 0.5s ease-in-out forwards";
    frontCover.style.animation="openBook 0.5s ease-in-out forwards";
    frontCover.style.transformStyle="preserve-3d";
    coverImg.style.animation = "fadeImage 0.5s forwards";
    book.style.perspective= "130vw";
    bookSpine1.style.opacity="0";
    bookSpine2.style.opacity="0";
    frontCover.removeEventListener("mouseover", rotate2);

    openBtn.removeEventListener("click", open);
    openBtn.addEventListener("click", close);
    rotateBtn.removeEventListener("click", revertRotate);
    rotateBtn.addEventListener("click", rotate);
}

function handleComment(){
    console.log(commentedAt);
}

function bookInit(){
    rotateBtn.addEventListener("click", rotate);
    openBtn.addEventListener("click", open);
    frontCover.addEventListener("mouseover", rotate2);
}
handleComment()
bookInit();

