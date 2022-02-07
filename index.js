
let sum = 0;
    let hasBlackJack = false;
    let isAlive = true;
let Cards = [];
let message = "";

let player = {
    name: "Per",
    chips: "250"
}

let playerEl = document.querySelector("#player-el");

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    if (number >= 10) {
        return 10;
    } else if (number === 1) {
        return 11;
    } else {
        return number;
    }
}


function startGame() {
    playerEl.textContent = player.name + ": $" + player.chips;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    hasBlackJack = false;
    isAlive = true;
    message = "";
    Cards = [firstCard, secondCard];
    renderGame();
}


function renderGame() {
    let messageEl = document.querySelector("#message-el");
    let sumEl = document.querySelector("#sum-el");
    let cardsEl = document.querySelector("#cards-el");
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < Cards.length; i++){
        cardsEl.textContent += Cards[i] + " ";
    }
    sumEl.textContent = "Sum: "+sum;
    if (sum < 21) {
        message = "Do you want to draw a new card!";
    } else if (sum === 21) {
        message = "Wohoo! You've got Black Jack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! "
        isAlive = false;
    }
    messageEl.textContent = message;
    console.log(message);
}


function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let cardNo = getRandomCard();
        sum += cardNo;
        Cards.push(cardNo);
        renderGame();
    }
}