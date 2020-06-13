function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  const playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
}

function getMoveName(move) {
  if (move == '1') {
    return 'kamień';
  } else if (move == '2') {
    return 'papier';
  } else if (move == '3') {
    return 'nożyce';
  }
}

function displayResult(argComputerMove, argPlayerMove) {

  if (argPlayerMove == argComputerMove) {
    printMessage('REMIS');
  } else if (
    (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')
    ||
    (argPlayerMove == 'papier' && argComputerMove == 'kamień')
    ||
    (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')
  ) {
    printMessage('WYGRYWA PLAYER');
  } else {
    printMessage('WYGRYWA KOMPUTER!');
  }
}

const button1 = document.querySelector('#stone');
const button2 = document.querySelector('#paper');
const button3 = document.querySelector('#scissors');

button1.addEventListener('click', function() {
  playGame(1);
});

button2.addEventListener('click', function() {
  playGame(2);
});

button3.addEventListener('click', function() {
  playGame(3);
});