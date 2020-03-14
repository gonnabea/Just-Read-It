
const incon_box = document.getElementById("header_icon_box");
const icon_ul = document.getElementById("header_icon_ul");
const icon_bars = document.getElementById("header_icon_bars");
const icon_img = document.querySelectorAll(".header_icon_img");

  
    // :hover
    // {
    //   width:30vh;
    //   height:30vh;
    //   background-color:black;
    //   color:white;
  
    const handleClick = async ()  =>{
        incon_box.style.height = "30vh";
        incon_box.style.backgroundColor = "black";
        incon_box.style.color = "white";

        if(incon_box.style.width === "30vh")
        {
            incon_box.style.width = "0"; 
            icon_ul.style.visibility = "hidden";
            icon_bars.style.color = "black";
        }  
        else{
            incon_box.style.width="30vh";
            icon_ul.style.visibility="visible";
            icon_bars.style.color = "white";
        } 
    }
   



 
function headerInit(){
    incon_box.addEventListener("click", handleClick);
    incon_box.addEventListener("mouseleave",handleClick);

}
 
headerInit();