//select color button
let colorButton = document.querySelector("#black-color")

function colorBlack(){
    //255 is the max number
    document.body.style.backgroundColor = "rgb(0, 0, -255)"

    document.querySelectorAll('h1')[0].style.color="white";
}

colorButton.addEventListener("click", colorBlack)

function colorWhite(){
 
    document.body.style.backgroundColor = "rgb(255, 255, 255)"

    document.querySelectorAll('h1')[0].style.color="black";
}

colorButton.addEventListener("click", colorWhite)