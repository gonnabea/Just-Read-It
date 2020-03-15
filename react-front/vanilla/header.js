
const incon_box = document.getElementById("header_icon_box");
const icon_ul = document.getElementById("header_icon_ul");
const icon_bars = document.getElementById("header_icon_bars");
const icon_img = document.querySelectorAll(".header_icon_img");
const header_search_input = document.getElementById("header_search_input");
const header_form = document.getElementById("header_form");
  
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


   const handleSearch = ()=>{
       let pos = 5;
        if(header_search_input.style.width < "50%")
        {
                header_search_input.style.width = "50%";
        }
        else{
            header_search_input.style.width = "20vh";
        }
   }
   

 
 
const headerInit = async ()=>{
    header_search_input.addEventListener("focus",handleSearch);
    header_search_input.addEventListener("focusout",handleSearch);


    // header_search_input.addEventListener("focusout", handleSearch);


    incon_box.addEventListener("click", handleClick);
    incon_box.addEventListener("mouseleave",handleClick);

}
 
headerInit();