let rndNumber1 = Math.ceil(Math.random() * 6);
let rndNumber2 = Math.ceil(Math.random() * 6);
let random1 = "images/dice" + rndNumber1 + ".png";
let random2 = "images/dice" + rndNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", random1);
document.querySelector(".img2").setAttribute("src", random2);

if (rndNumber1 > rndNumber2) {
    document.querySelector("h1").innerHTML = "Player1 won";
} else if (rndNumber2 > rndNumber1) {
    document.querySelector("h1").innerHTML = "Player2 won";
} else if (rndNumber1 == rndNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}