//select color button
let colorButton = document.querySelector("#black-color")

function colorBlack(){
    //255 is the max number
    document.body.style.backgroundColor = "rgb(0, 0, -255)"

    document.querySelectorAll('h1')[0].style.color="white";
    document.querySelectorAll('.para1')[0].style.color="white";
    document.querySelectorAll('.para2')[0].style.color="white";
    document.querySelectorAll('.para3')[0].style.color="white";
    document.querySelectorAll('.para4')[0].style.color="white";
    document.querySelectorAll('.para5')[0].style.color="white";
    document.querySelectorAll('.para6')[0].style.color="white";
    document.querySelectorAll('.para7')[0].style.color="white";
    document.querySelectorAll('.para8')[0].style.color="white";
    document.querySelectorAll('.para9')[0].style.color="black";
    document.querySelectorAll('.navbar li')[0].style.color="white";
    document.querySelectorAll('.navbar ul')[0].style.color="black";
}

colorButton.addEventListener("click", colorBlack)

function colorWhite(){
 
    document.body.style.backgroundColor = "rgb(255, 255, 255)"

    document.querySelectorAll('h1')[0].style.color="black";
    document.querySelectorAll('.para1')[0].style.color="black";
    document.querySelectorAll('.para2')[0].style.color="black";
    document.querySelectorAll('.para3')[0].style.color="black";
    document.querySelectorAll('.para4')[0].style.color="black";
    document.querySelectorAll('.para5')[0].style.color="black";
    document.querySelectorAll('.para6')[0].style.color="black";
    document.querySelectorAll('.para7')[0].style.color="black";
    document.querySelectorAll('.para8')[0].style.color="black";
    document.querySelectorAll('.para9')[0].style.color="black";
    document.querySelectorAll('.navbar li')[0].style.color="white";
    document.querySelectorAll('.navbar ul')[0].style.color="white";
}

colorButton.addEventListener("click", colorWhite)










