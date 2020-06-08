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
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier') {
    printMessage('Wygrywa komputer');
  }

}

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);


displayResult(computerMove, playerMove);