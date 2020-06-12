function playGame(playerMove) {
  clearMessages();

  const compMove = getCompMove();
  // porownanie ruchów
  if (playerMove === compMove) {
    displayResult(Wygrana);
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  let playerMove = getMoveName(playerInput);
  let testButton = document.getElementById('test-button');
  testButton.addEventListener('click', buttonClicked);
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
console.log(object);

function displayResult(argComputerMove, argPlayerMove) {
  if (argPlayerMove == argComputerMove) {
    printMessage('REMIS');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    printMessage('Wygrywa komputer');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywa komputer');
  }
}