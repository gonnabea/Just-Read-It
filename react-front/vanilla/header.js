
const incon_box = document.getElementById("header_icon_box");
const icon_ul = document.getElementById("header_icon_ul");
// const icon_bars = document.getElementById("header_icon_bars");
// const icon_img = document.querySelectorAll(".header_icon_img");
const header_search_input = document.getElementById("header_search_input");
const BackgroundAll = document.getElementById("BackgroundAll");
const header_form = document.getElementById("header_form");

const handleSearch = ()=>{
    let pos = 10;
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

const showPopUp = () => {
    icon_ul.style.display = "flex";
    icon_ul.style.animation = "showPopUp 0.3s forwards";
    incon_box.removeEventListener("click", showPopUp);
    incon_box.addEventListener("click", hidePopUp);
    setTimeout(() => {
        document.addEventListener("click",hidePopUp)
    }, 300)
}

const hidePopUp = () => {
    setTimeout(() => {
        icon_ul.style.display = "none";
    }, 300);
    icon_ul.style.animation = "hidePopUp 0.3s forwards";
    incon_box.removeEventListener("click", hidePopUp);
    incon_box.addEventListener("click", showPopUp);
    document.removeEventListener("click",hidePopUp)
}
const headerInit = async ()=>{
    
    header_search_input.addEventListener("focus",handleSearch);
    header_search_input.removeEventListener("focusout",handleSearch);
    document.addEventListener("click",()=>{
            if(header_search_input.style.width > `20vh`)
            {
                header_search_input.style.width = `20vh`
            }
            //git branch
            //git checkout jiwon
            //git add .
            //git commit -m "sdf;lkj"
        })
    incon_box.addEventListener("click", showPopUp);
}
 
headerInit();