/* Guess Validate by Galloway */
//last updated friday October 25
var games = 0;
var again = true;
var totalTurns = 0;
// console.log(answer);
while (again==true){
	var guess = 0;
	var turns = 0;
	games++; 
	var answer = Math.floor(Math.random()*100)+1;
	alert("testing");
	while (guess != answer){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
			break;
		}
		if (validate(guess) == true){
			turns++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
			else if (guess == answer) {
				alert("You guessed my number in "+turns+" turns.");
				gameStats(turns);
			}
		}
		else alert("Invalid guess, try again.");
	}
if (guess == "q"){
alert("You quit.");
break;
}
}

/* Function validate
 * Ensures guess is a valid integer within answer range
 * @param guess
 * @return boolean
 */
function validate(guess){
	if (guess > 0 && guess < 101){
		return true;
	}
	else {
		return false;
	}
}

function gameStats(turns, totalTurns){
	alert ("You guessed it in " +turns+ "turns!");
	totalTurns = totalTurns + turns;
	averageTurns = totalTurns/games;
	alert ("You won " +game+ "games with an average of " +averageTurns+ "turns per game!");
}
function newGame(){
	var again = prompt("Play again? (Y = yes)");
	if (again==Y) return true;
	else {
		alert("Thanks for playing!");
		return false;
	}
}
