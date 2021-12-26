document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "chicken",
      img: "images/chicken.jpeg",
    },
    {
      name: "monkey",
      img: "images/monkey.jpeg",
    },
    {
      name: "pizza",
      img: "images/pizza.jpeg",
    },
    {
      name: "tiger",
      img: "images/tiger.gif",
    },
    {
      name: "cat",
      img: "images/cat.jpeg",
    },
    {
      name: "casper",
      img: "images/casper.jpeg",
    },
    {
        name: "chicken",
        img: "images/chicken.jpeg",
      },
      {
        name: "monkey",
        img: "images/monkey.jpeg",
      },
      {
        name: "pizza",
        img: "images/pizza.jpeg",
      },
      {
        name: "tiger",
        img: "images/tiger.gif",
      },
      {
        name: "cat",
        img: "images/cat.jpeg",
      },
      {
        name: "casper",
        img: "images/casper.jpeg",
      },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      //card.setAttribute('height', '100px')
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll(`img`);
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations!! You have won";
    }
  }

  //flip card

  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
