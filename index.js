// dice 

var randomNumber1 = Math.floor((Math.random()*6) + 1);


var randomDiceImages = "dice" + randomNumber1 + ".png";

var imagesSource = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , imagesSource);


// dice 2

var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDiceImages2 = "dice" + randomNumber2 + ".png";

var imagesSource2 = "images/" + randomDiceImages2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imagesSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🏆"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆"
}
else{
    document.querySelector("h1").innerHTML = "Game draw"
}

function refreshPage(){
    window.location.reload();
}
