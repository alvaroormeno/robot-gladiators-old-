var playerName = window.prompt("What is your robot`s name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiatos!")

    // PROMPT FIGHT FUNCTION (ASK PLAYER IF HE WANTS TO FIGHT OR SKIP ROUND)
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.") 
    console.log(promptFight)


    if(promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
        // Check enemy`s health
        if(enemyHealth <= 0){
            window.alert(enemyName + "has died!")
        } else {
            window.alert(enemyName + "still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
        // Check player`s health
        if(playerHealth <= 0){
            window.alert(playerName + " has died");
        } else {
            window.alert( playerName + 'still has ' + playerHealth + " health left");
        }

    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you`d like to quit?")

        // If yes (true) leave fight
        if(confirmSkip === true) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract 2 from playerMoney for skipping
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }






        window.alert(playerName + " has chosen to skip the fight!")
    } else {
        window.alert("You need to chose a valid option. Try again!")
    }



   
    
    


    




    

};

fight();

