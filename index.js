//set a random variable to get random numbers
//Match.random will give a random number from 0-0.99 so we multiply here with 6 and use Math.floor to get rounded value 
//+1 to not get 0 as value
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //to set image according to random number we get

var randomImageSource = "images/" + randomDiceImage; //images/dice1-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🥇";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!✌";
}