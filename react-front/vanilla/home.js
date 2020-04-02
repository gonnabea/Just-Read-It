

const prev = document.getElementById("btn_prev");
const next = document.getElementById("btn_next");

const icon_1 = document.getElementById("icon_1");
const icon_2 = document.getElementById("icon_2");
const icon_3 = document.getElementById("icon_3");

const home_main_img = document.querySelectorAll(".home_main_img");

let num = [];
let rand = [];

const Shuffle = async () => {

    let reco_list = await document.querySelectorAll(".reco_list");

    for (j = 0; j < 2; j++) 
    {
        rand[j] = Math.floor(Math.random() * reco_list.length);
    }
    rand = Array.from(new Set(rand))
    // console.log(Array.from(new Set(rand)));

    for (i = 0; reco_list.length; i++) {
     
        reco_list[i].style.display = "none";
        if(rand.length == 2)
        {
            for(j = 0; j< rand.length; j++)
            {
                num[j] = reco_list[rand[j]];
                reco_list[rand[j]].style.display = "block";
                // console.log(num)
            }
        }
        else
        {
            for (j = 0; j < 3; j++) 
            {
                rand[j] = Math.floor(Math.random() * reco_list.length);
            }
            rand = Array.from(new Set(rand))
            num =  new Array(rand.length);
        }
    }
   
}

//page list
const Imglength = async () => {
    if (home_main_img.length >= 60) {
        let count = 0;
        const page_btn = document.createElement("button");
        const ul = document.createElement("ul");
        const li = document.createElement("li");

        ul.appendChild(li);
        ul.style.display = "flex";
        ul.style.flexDirection = "column";
        ul.style.width = "100%";
        ul.style.justifyContent = "center";
        ul.style.alignItems = "center";

        li.style.cursor = "pointer";
        li.style.width = "30px";
        li.style.height = "30px";

        count = parseFloat(home_main_img.length / 60);

        if (count > parseInt(count)) {
            count += 1;
        }
        li.innerText = parseInt(count);
        li.className = "li_list";

        home_main_img[0].parentNode.parentNode.parentNode.parentNode.appendChild(ul);

        for (i = 0; i <= home_main_img.length; i++) {
            if (i >= 60) {
                home_main_img[i].parentNode.parentNode.parentNode.style.display = "none";
            }
        }
    }

    const li_list = await document.querySelectorAll(".li_list");

    for (i = 0; i < li_list.length; i++) {
        li_list[i].addEventListener("click", (e) => {
            // console.log(e.target)

            for (i = 0; i <= home_main_img.length; i++) {
                if (i === 1) {
                    for (j = 60; j <= home_main_img.length; j++) {
                        home_main_img[j].parentNode.parentNode.parentNode.style.display = "block";
                    }
                }
                else {
                    return;
                }
            }
        });

    }
}

const opacity = (e) => {
    let pos = 0;
    let id = setInterval(frame, 1);

    function frame() {

        if (pos >= 1) {
            return "";
        }
        else {
            pos += 0.01;
            e.target.style.opacity = `${pos}`;
            e.target.parentNode.style.opacity = `${pos}`;
        }
    }
}

const prevBook = async(e)=>{
    let reco_list = await document.querySelectorAll(".reco_list");
    // opacity(e);
    for(i = 0; i < reco_list.length; i++)
    {
        reco_list[i].style.animation = `revers_recomment_slid 0.5s ease-in-out forwards`;
    }
}

const nextBook = async (e) =>{
    let reco_list = await document.querySelectorAll(".reco_list");
    // opacity(e);

    for(i = 0; i < reco_list.length; i++)
    {
        reco_list[i].style.animation = `recomment_slid 0.5s ease-in-out forwards`;
    }
}


const homeInit = async () => {
    
    Shuffle();

    if(prev)
    {
        prev.addEventListener("click", prevBook);
        next.addEventListener("click",nextBook);
        icon_1.addEventListener("click",prevBook);
        icon_2.addEventListener("click",nextBook);
    }


    for (i = 0; i < home_main_img.length; i++) {

        home_main_img[i].addEventListener("mouseover", async (e) => {
            let pos = 0;
            let id = setInterval(frame, 10);
            function frame() {
                if (pos == 5) {
                    clearInterval(id);
                }
                else {
                    pos += 0.5;
                    e.target.style.transform = `translateY(-${pos}vh)`;
                }
            };
        });

        home_main_img[i].addEventListener("mouseout", async (e) => {
            e.target.style.transform = `translateY(0vh)`;
            setTimeout(() => {
                e.target.style.transform = `translateY(0vh)`;

            }, 100);
        })

    }
}


homeInit();