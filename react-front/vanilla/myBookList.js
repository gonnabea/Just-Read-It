let my_book_list_book = document.querySelectorAll(".my_book_list_book");
let my_book_list_side_cover = document.querySelectorAll(".my_book_list_side_cover");
let My_book_list_form = document.querySelectorAll(".My_book_list_form");

// widht:100%;
// position:absolute;
// top:46%;
// z-index:-1;
// display:flex;
// flex-direction:column; 
// align-items:center;
/**
 * 985

사용 getRandomColor()의 장소 "#0000FF":


 * function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}
 */

const handle = async () => {

    let Back_cover = await document.querySelectorAll("Back_cover");
    
      for(i = 0; i <  my_book_list_side_cover.length; i++)
    {
        let r = Math.random()*256;
        let g = Math.random()*256;
        let b = Math.random()*256;

        var colorCode  = "#" + Math.round(Math.random() * 0xffffff).toString(16)
        //'#' + (Math.random().toString(16) + "000000").substring(2,8);
//"#"+((1<<24)*Math.random()|0).toString(16);
        my_book_list_side_cover[i].style.background =  "#"+((1<<24)*Math.random()|0).toString(16);
        my_book_list_side_cover[i].style.color = "white";
    }
     
    if (my_book_list_book.length < 11) 
    {
            let img = document.createElement("img");
            img.src = "/images/shelf.png";
            my_book_list_book[0].parentNode.appendChild(img);
            img.style.position="absolute";
            img.style.top="46.5%";
            img.style.zIndex="-2";
            // img.style.marginTop = "-30vh";
            img.style.width = "45vw";
            img.style.height = "10vh";
       
    }
    else  
    {
        let img1 = document.createElement("img");
        img1.src = "/images/shelf.png";
        my_book_list_book[0].parentNode.appendChild(img1);
        img1.style.position = "absolute";
        img1.style.top = "47%";
        img1.style.zIndex = "-2";
        img1.style.width = "100vh";

        for (i = 0; i < my_book_list_book.length; i++) {
            if (1 === i * 0.1) {
                let img = document.createElement("img");
                img.className="book_list_img";
                img.src = "/images/shelf.png";
                my_book_list_book[i].parentNode.appendChild(img);
                img.style.width = "100vh";
               
                img.style.marginTop = "-6.5vh";
                my_book_list_book[i].style.boxShadow=" -1px 10px 37px -10px rgba(0,0,0,0.75)";

            }
        }
    }
}

handle();