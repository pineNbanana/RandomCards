let cards = [];

function generateUniqueRandom() {
    while(cards.length < 5){
      var random = Math.floor(Math.random()*52) + 1;
      if(!cards.includes(random)) {
          cards.push(random);
        }
    }
}

generateUniqueRandom();

var randomDiceImg1 = "images/card" + cards[0] + ".png";
var randomDiceImg2 = "images/card" + cards[1] + ".png";
var randomDiceImg3 = "images/card" + cards[2] + ".png";
var randomDiceImg4 = "images/card" + cards[3] + ".png";
var randomDiceImg5 = "images/card" + cards[4] + ".png";


var image1 = document.querySelectorAll("img")[2];
var image2 = document.querySelectorAll("img")[3];
var image3 = document.querySelectorAll("img")[4];
var image4 = document.querySelectorAll("img")[5];
var image5 = document.querySelectorAll("img")[6];

image1.setAttribute("src", randomDiceImg1);
image2.setAttribute("src", randomDiceImg2);
image3.setAttribute("src", randomDiceImg3);
image4.setAttribute("src", randomDiceImg4);
image5.setAttribute("src", randomDiceImg5);
