const background_target = document.getElementById("background_target");

//anime.stagger(value, {grid: [rows, columns]})

// const animation = anime({
//     targets: '.staggering-grid-demo .el',
//     scale: [
//       {value: .1, easing: 'easeOutSine', duration: 500},
//       {value: 1, easing: 'easeInOutQuad', duration: 1200}
//     ],
//     delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
//   });

                 

const handleClick  = ()=>{
    animation.play()
    animation.reverse()
}

function handleF() {
    background_target.addEventLisener("click", handleClick)
}

handleF();