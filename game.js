    <script type="text/javascript">
    alert("Manual Instructions: Before you start playing the game you would need +1 player or multiple players of your choice. Make sure you have something to keep in track of the scores. After you choose your player(s) explain how the game works or give a refresher in case they forgot. Show three different figures with your finger showing a: peace sign-scissors, fist-rock, and open hand-paper. Once everyone understood begin the game.)
    

     var computerChoices = ["r", "p", "s"];
     var wins = 0;
     var losses = 0;
     var ties = 0;
   
     var directionsText = document.getElementById("directions-text");
     var userChoiceText = document.getElementById("userchoice-text");
     var computerChoiceText = document.getElementById("computerchoice-text");
     var winsText = document.getElementById("wins-text");
     var lossesText = document.getElementById("losses-text");
     var tiesText = document.getElementById("ties-text");
     document.onkeyup = function(event) {

     var userGuess = event.key;

     // Randomly chooses a choice from the options array. This is the Computer's guess.
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

     // Only run the following code block if the user presses "r" or "p" or "s".
     if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

      // If we choose rock and the computer guesses scissors, increment our wins variable.
      if ((userGuess === "r") && (computerGuess === "s")) {
        wins++;
      }

      // If we choose rock and the computer guesses paper, increment our losses variable.
      if ((userGuess === "r") && (computerGuess === "p")) {
        losses++;
      }

      // If we choose scissors and the computer guesses rock, increment our losses variable.
      if ((userGuess === "s") && (computerGuess === "r")) {
        losses++;
      }

      // If we choose scissors and the computer guesses paper, increment our wins variable.
      if ((userGuess === "s") && (computerGuess === "p")) {
        wins++;
      }

      // If we choose paper and the computer guesses rock, increment our wins variable.
      if ((userGuess === "p") && (computerGuess === "r")) {
        wins++;
      }

      // If we choose paper and the computer guesses scissors, increment our losses variable.
      if ((userGuess === "p") && (computerGuess === "s")) {
        losses++;
      }

      // If we choose the same thing as the computer, increment our ties variable.
      if (userGuess === computerGuess) {
        ties++;
      }

      // Hide the directions
      directionsText.textContent = "";

      // Display the user and computer guesses, and wins/losses/ties.
      userChoiceText.textContent = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
      tiesText.textContent = "ties: " + ties;
       }
      };
