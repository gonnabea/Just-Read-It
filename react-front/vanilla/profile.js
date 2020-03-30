const uploadedBooksBtn = document.getElementById("uploadedBooksBtn");
const bookList = document.getElementById("bookList");
const reviewBtn = document.getElementById("reviewBtn");
const reviewList = document.getElementById("reviewList");

function showBooks(){
    bookList.style.display = "flex";
    uploadedBooksBtn.style.borderBottom = "solid 3px orange";
    uploadedBooksBtn.removeEventListener("click", showBooks);
    uploadedBooksBtn.addEventListener("click", hideBooks);
    
}

function hideBooks(){
    bookList.style.display = "none";
    uploadedBooksBtn.removeEventListener("click", hideBooks);
    uploadedBooksBtn.addEventListener("click", showBooks);
    uploadedBooksBtn.style.borderBottom = "none";
}

function showReviews(){
    reviewList.style.display="flex";
    reviewBtn.style.borderBottom = "solid 3px orange";
    reviewBtn.removeEventListener("click", showReviews);
    reviewBtn.addEventListener("click", hideReviews);
}

function hideReviews(){
    reviewList.style.display="none";
    reviewBtn.style.borderBottom = "none";
    reviewBtn.removeEventListener("click", hideReviews);
    reviewBtn.addEventListener("click", showReviews);
}

function profileInit(){
    uploadedBooksBtn.addEventListener("click", showBooks);
    reviewBtn.addEventListener("click", showReviews);
}

profileInit();