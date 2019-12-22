/*
Name: Christopher Modica
Date Created: December 21st, 2019
Most recent revision: December 22nd, 2019
*/

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["lucky7"].elements.length; 
        loopCounter++) {
        if (document.forms["lucky7"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["lucky7"].elements[loopCounter]
               .parentElement.className = "form-group row";
        }
    }    
} 

function resetForm() {
	clearErrors();
	document.forms["lucky7"]["betInput"].value = "0.00";
	document.getElementById("results").style.display = "none";
	document.forms["lucky7"]["betInput"].focus();
}

function validateBet() {
	clearErrors();
	var startingBet = document.forms["lucky7"]["betInput"].value;
	var cashPool = startingBet;
	var currentRollValue = 0;
	var totalRolls = 0;
	var highestWin = 0;
	// Stores the number of rolls taken to reach the highest amount of winnings
	var highestRolls = 0;
	
	if (startingBet == "" || isNaN(startingBet)) {
		alert("You must bet at least $1.00 to play.");
		document.forms["lucky7"]["betInput"]
			.parentElement.className = "form-group has-error";
		document.forms["lucky7"]["betInput"].focus();
		return false;
	}
	
	// Roll two dice while the player has at least one dollar
	while (cashPool > 0) {
		currentRollValue = rollTwoDice();
		totalRolls++;
		
		// The player wins four dollars if the value of the current
		// roll is equal to seven, otherwise the player loses one dollar
		if (currentRollValue === 7) {
			cashPool += 4;
			// Update the cash pool and highest rolls if the player has 
			// reached record winnings
			if (cashPool > highestWin){
				highestWin = cashPool;
				highestRolls = totalRolls;
			}
		}
		else {
			cashPool -= 1;
		}
	}
	
	document.getElementById("results").style.display = "block";
	document.getElementById("playButton").innerText = "Play Again";
	document.getElementById("startBet").innerText = "$" + startingBet + ".00";
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("highestWon").innerText = "$" + highestWin + ".00";
	document.getElementById("highestRoll").innerText = highestRolls;
	// We are returning false so the form doesn't submit
	// and so that we can see the results
	return false;
}

function rollTwoDice() {
	var firstDie = Math.floor(Math.random() * 6) + 1;
	var secondDie = Math.floor(Math.random() * 6) + 1;
	return firstDie + secondDie;
}