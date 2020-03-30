


const sortNav = document.getElementById("sortNav");
const sortBtn = document.getElementById("sortBtn");
const sortContent = document.getElementById("sortContent");
const genreMenus = document.querySelectorAll("#genreMenus");

 
 
function handleSortBtn(){ 
    console.log("It's working!")
   
    sortBtn.className = 'far fa-caret-square-left fa-3x';
    sortBtn.style.color = "#F6B93B";
    sortContent.style.display="flex";
    sortContent.style.animation="slide .5s";
    sortContent.style.animationFillMode="forwards";
    sortBtn.style.animation="slideBtn .5s forwards";
    sortNav.style.width="30vh";
    sortBtn.removeEventListener("click", handleSortBtn);
    
    sortBtn.addEventListener("click", function revertSlide(){
        sortNav.style.width="0";
        sortBtn.className = 'far fa-caret-square-right fa-3x';
        sortBtn.style.animation="revertSlideBtn .5s forwards";
        sortBtn.removeEventListener("click",revertSlide);
        sortBtn.addEventListener("click", handleSortBtn);
        sortContent.style.display="none";
    });
    
}
const sortInit=()=>{
    sortBtn.addEventListener("click", handleSortBtn);

}
if(sortBtn)
{
    sortInit();
}