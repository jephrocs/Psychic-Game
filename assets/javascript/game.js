var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guesses = [];

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
        numGuesses = 9;
        guesses = [];
    }

    if (userGuess != computerGuess) {
        numGuesses--;
        guesses.push(userGuess);
    }

    if (numGuesses === 0) {

        numGuesses = 9;
        losses++;
        guesses = [];


    }



    var result =
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numGuesses + "</p>" +
        "<p>Your Guesses so far: " + guesses.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = result;



};
