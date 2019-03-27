
function rollDice() {
    var startingBet = document.getElementById("betInput").value;
    var bet = startingBet;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = dice1 + dice2;
    var betsArray = [];
	
	while(bet<=0){
			alert("Bet must be greater than 0");
			startingBet= prompt("What is you new positive bet?");
			bet=startingBet;
	}	
	
    while (bet > 0) {
        if(diceRoll === 7) {
            bet += 4;
        } else { 
            bet -= 1;
        }
		betsArray.push(bet)
		dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        diceRoll = dice1 + dice2;
    }
    var rollCounter = betsArray.length;
    var highestAmount = Math.max.apply(Math, betsArray);
    var highestPos = betsArray.indexOf(highestAmount);
    var rollsFromHighest = rollCounter - highestPos;

    function showResults() {
    document.getElementById("resultsBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("resultsRollCounter").innerHTML = rollCounter;
    document.getElementById("resultsHighestHeld").innerHTML = "$" +     highestAmount + ".00";
    document.getElementById("resultsRollsFromHighest").innerHTML = rollsFromHighest;
    };

    showResults();
} 