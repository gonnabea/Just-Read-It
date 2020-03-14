    

const prev = document.getElementById("btn_prev");
const next = document.getElementById("btn_next");

const Shuffle = async()=> {
    let reco_list = await document.querySelectorAll(".reco_list");
 
    let rand =[3];
    for(j= 0; j<3; j++)
    {
        rand[j] = Math.floor(Math.random() * reco_list.length);
        // console.log(rand[j])
    }
 
    for(i = 0; reco_list.length; i++)
    {
        // console.log(reco_list[0]);
        if(i != rand[0] && i != rand[1] && i !=rand[2])
        {
            reco_list[i].style.display = "none";
        }
        else{
            reco_list[i].style.display = "block";
        }
    } 
}    
     
const homeInit = async()=>
{
      Shuffle();
    prev.addEventListener("click", async ()=>{
        console.log("Prev"); 
        await Shuffle();
    });
    
    next.addEventListener("click", async ()=>{
        console.log("Next");
        await Shuffle();
    });
}        
      
homeInit();