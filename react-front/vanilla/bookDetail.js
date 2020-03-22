const book = document.getElementById("book");
const rotateBtn = document.getElementById("rotateBtn");
const openBtn = document.getElementById("openBtn");
const frontCover = document.getElementById("frontCover");
const coverImg = document.getElementById("coverImg");

function rotate(){
    book.style.animation="book-rotate2 1s forwards";
    
    coverImg.style.animation="showImage 0.5s forwards";
    book.style.perspective= "none";
    rotateBtn.removeEventListener("click", rotate);
    rotateBtn.addEventListener("click", revertRotate);

    openBtn.removeEventListener("click", close);
    openBtn.addEventListener("click", open);
}

function revertRotate(){
    book.style.animation="revert-rotate 1s forwards";
    frontCover.style.animation="closeBook 0.5s forwards";
    coverImg.style.animation="showImage 0.5s forwards";
    book.style.perspective= "none";
    rotateBtn.removeEventListener("click", revertRotate);
    rotateBtn.addEventListener("click", rotate);
}

function close(){
    book.style.animation="revertBook 0.5s ease-in-out forwards";
    frontCover.style.animation="closeBook 0.5s ease-in-out forwards";
    frontCover.style.transformStyle="preserve-3d";
    coverImg.style.animation = "showImage 0.5s forwards";
    book.style.perspective= "130vw";

    
    openBtn.removeEventListener("click", close);
    openBtn.addEventListener("click", open);
}

function open(){
    book.style.animation="moveBook 0.5s ease-in-out forwards";
    frontCover.style.animation="openBook 0.5s ease-in-out forwards";
    frontCover.style.transformStyle="preserve-3d";
    coverImg.style.animation = "fadeImage 0.5s forwards";
    book.style.perspective= "130vw";
    
    openBtn.removeEventListener("click", open);
    openBtn.addEventListener("click", close);
    rotateBtn.removeEventListener("click", revertRotate);
    rotateBtn.addEventListener("click", rotate);
}

function bookInit(){
    rotateBtn.addEventListener("click", rotate);
    openBtn.addEventListener("click", open);
}

bookInit();

