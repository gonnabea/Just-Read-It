

const prev = document.getElementById("btn_prev");
const next = document.getElementById("btn_next");

const icon_1 = document.getElementById("icon_1");
const icon_2 = document.getElementById("icon_2");
const icon_3 = document.getElementById("icon_3");

const home_main_img = document.querySelectorAll(".home_main_img");
 
let num = [];

const Shuffle = async () => {
    let reco_list = await document.querySelectorAll(".reco_list");

    let rand = [];
    for (j = 0; j < 3; j++) {
        rand[j] = Math.floor(Math.random() * reco_list.length);
        // console.log(rand[j])
    } 

    let pos = 50;

    for (i = 0; reco_list.length; i++) {
        // console.log(reco_list[0]); 
        //&& i != rand[1] && i != rand[2]
     
        if  (i != rand[0] && i != rand[1] && i != rand[2])  {

              reco_list[i].style.display = "none";
        }
        else {
            reco_list[i].style.display = "block";
            reco_list[i].style.marginTop = "1rem";
            reco_list[i].style.transform = `translateX(${pos}vh)`;
            pos += 100;

            num = i;
                
            console.log(num)
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

const nextBook = async () =>{
    let reco_list = await document.querySelectorAll(".reco_list");
    console.log("wow "+num);
    console.log("wow "+num[1]);
    console.log("wow "+num[2]);
    for(i = 0; i < num.length; i++)
    {
        reco_list[num[i]].style.transform = `translateX(-30vh)`;

    }

}

const homeInit = async () => {

    // console.log(home_main_img.length);

    // Imglength();
     Shuffle();

    prev.addEventListener("click", async (e) => {
        // console.log("Prev"); 
        // console.log(e.target); 
        await opacity(e);
        // await Shuffle();
    });

    next.addEventListener("click", async (e) => {
        // console.log("Next");
        await opacity(e);
        // await Shuffle();
        await nextBook();

    });
    

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

            }, 500);
        })

    }
}

homeInit();