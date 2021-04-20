const gameSummary = {
  gameNumbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
}

const game = {
  playerHand: "",
  aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

// Wybór gracza pierwsza funkcja handSelection (wybór ręki)

function handSelection() {
  // console.log(this);
  game.playerHand = this.dataset.option
  hands.forEach((hand) => {
    hand.style.boxShadow = '';
  })
  this.style.boxShadow = '0 0 0 4px black';
}

// const handSelection = (e) => {
//   console.log(e.target);
// }

hands.forEach((hand) => {
  hand.addEventListener('click', handSelection)
});

// Wybór komputera

function aiChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
  return aiHand;
}

//Funkcja sprawdzająca wynik gry

function checkResult(player, ai) {
  if (player === ai) {
    return 'draw';
  } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
    return 'win';
  } else {
    return 'loss';
  }
}

//Publikacja wyniku

function publishResult(player, ai, result) {

  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  gameSummary.gameNumbers++;

  document.querySelector('p.numbers span').textContent = gameSummary.gameNumbers;

  if (result === "win") {
    gameSummary.wins++;
    document.querySelector('p.wins span').textContent = gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result === "loss") {
    gameSummary.losses++;
    document.querySelector('p.losses span').textContent = gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else {
    gameSummary.draws++;
    document.querySelector('p.draws span').textContent = gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Remis";
    document.querySelector('[data-summary="who-win"]').style.color = "black";

  }

}

function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
  game.playerHand = "";
  game.aiHand = "";
}

// Funckja sterująca

function startGame() {
  if (game.playerHand === '') {
    return alert('Wybierz dłoń');
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult);

  endGame();
}

document.querySelector('.start').addEventListener('click', startGame);

//ANIMACJE NA STRONIE 

const spanText = document.querySelector('h1 span');
const text = 'GRA "PAPIER, KAMIEŃ, NOŻYCZKI"';

let indexText = 0;
let time = 100;

const addLetter = () => {
  spanText.textContent += text[indexText]
  indexText++;
  if (indexText === text.length) {
    clearInterval(titleTyping);
  }
}

const titleTyping = setInterval(addLetter, time);






















































































































//