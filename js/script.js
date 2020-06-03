
let computerMove = `kamień`;
if(2 > 3){
	printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
} else if (1 == 3) {
	printMessage('Dziwne – jeden jest równe dwa?!');
} else {
	printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
}
let playerMove = "papier" ;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
// Argument wyświetlenia Tekstu chyba

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }