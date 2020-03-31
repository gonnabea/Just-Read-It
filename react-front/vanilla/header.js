
const incon_box = document.getElementById("header_icon_box");
const icon_ul = document.getElementById("header_icon_ul");
const icon_bars = document.getElementById("header_icon_bars");
const icon_img = document.querySelectorAll(".header_icon_img");
const header_search_input = document.getElementById("header_search_input");
const header_form = document.getElementById("header_form");

    
const handleClick = async ()  =>{
        // incon_box.style.height = "30vh";
        // incon_box.style.backgroundColor = "rgba(229, 224, 149, 0.7)";
        incon_box.style.backgroundColor = "rgba(255,255,255,1)";
        // incon_box.style.border="3.5px solid #F6B93B";
        incon_box.style.color = "white";
        icon_ul.style.display="block";
        
        if(incon_box.style.width === "30vh")
        {
            incon_box.style.width = "0"; 
            incon_box.style.boxShadow = "none";
            icon_ul.style.visibility = "hidden";
            icon_bars.style.color = "black";
        }  
        else{ 
            incon_box.style.width = "30vh";
            incon_box.style.boxShadow = "0px 3.5px 5px 3.5px rgba(0,0,0,0.75)";
            icon_ul.style.visibility = "visible";
           
        } 
        
        incon_box.addEventListener("mouseleave",handleLeave);
}

const handleLeave = () => {
    incon_box.style.backgroundColor = "rgba(229, 224, 149, 0.7)";
    // incon_box.style.border="3.5px solid #F6B93B";
    incon_box.style.color = "white";
    incon_box.style.boxShadow = "none";
    if(incon_box.style.width === "30vh")
    {
        incon_box.style.width = "0"; 
        icon_ul.style.visibility = "hidden";
        if(icon_bars)
        {
            icon_bars.style.color = "black";
        }
    }  
    else{ 
        icon_ul.style.visibility = "hidden";
        if(icon_bars)
        {
            icon_bars.style.color = "black";
        }
    } 
        incon_box.removeEventListener("mouseleave",handleLeave);
}

const handleSearch = ()=>{
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 50) {
             clearInterval(id);
        }
        else {
            pos += 1;
            header_search_input.style.width = `${pos}%`;
        }
     }
     if(header_search_input.style.width >= "50%")
     {
         header_search_input.style.width = `20vh`
     }
}
icon_ul.style.display="none";

const headerInit = async ()=>{
    header_search_input.addEventListener("focus",handleSearch);
   
    header_search_input.removeEventListener("focusout",handleSearch);
    // header_search_input.addEventListener("mouseout",(e)=>{
    //     e.target.parentNode.parentNode.parentNode.parentNode.addEventListener("click",(e)=>{
    //         header_search_input.style.width = `20vh`
    //     })
    // }));

    // header_search_input.addEventListener("focusout", handleSearch);
    document.addEventListener("click",()=>{
            if(header_search_input.style.width > `20vh`)
            {
                header_search_input.style.width = `20vh`
            }
        })
    incon_box.addEventListener("click", handleClick);
        //icon_img
     
}
 
headerInit();