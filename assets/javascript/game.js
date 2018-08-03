var wins = 0;
var losses = 0;
var guessLeft = 10;
var letter = [];

    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
       
    var userGuess;
    var guess = [];
    document.getElementById("text1").innerHTML = "Guess what letter I'm thinking of";
    document.getElementById("text2").innerHTML = "Wins: " + wins + "</br>";
    document.getElementById("text3").innerHTML = "Losses: " + losses + "</br>";
    document.getElementById("text4").innerHTML = "Guesses left: " + guessLeft + "</br>";
    document.getElementById("text5").innerHTML = "Your guesses so far: " + "</br>";


        document.onkeyup = function(event)
        {
        var userGuess = event.key;
        guess.push(userGuess);

        if(letter.indexOf(userGuess) === -1)
         {
            letter.push(userGuess);   
         }
        else
        {
            guessLeft++;
            alert("Please pick another letter");
        }

        var computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerGuess);
        if((userGuess === computerGuess))
            {
            wins++;
            guessLeft--;
            computerGuess = letters[Math.floor(Math.random() * letters.length)];
                guess = [];
                letter = [];
            document.getElementById("text2").innerHTML = "Wins: " + wins + "</br>";
            document.getElementById("text3").innerHTML = "Losses: " + losses + "</br>";
            document.getElementById("text4").innerHTML = "Guesses left: " + guessLeft + "</br>";
            document.getElementById("text5").innerHTML = "Your guesses so far: " + guess + "</br>";
            document.getElementById("text6").innerHTML = "Success Sir";

            }
            else if(guessLeft === 1)
            {
                
                guessLeft = 10;
                losses++;
                computerGuess = letters[Math.floor(Math.random() * letters.length)];
                guess = [];
                letter = [];
                 document.getElementById("text2").innerHTML = "Wins: " + wins + "</br>";
                document.getElementById("text3").innerHTML = "Losses: " + losses + "</br>";
                document.getElementById("text4").innerHTML = "Guesses left: " + guessLeft + "</br>";
                document.getElementById("text5").innerHTML = "Your guesses so far: " + guess + "</br>";
                document.getElementById("text6").innerHTML = "My Apologizes I should have given you a hint";
            }
            else if((userGuess != computerGuess))
            {
                guessLeft--;
                document.getElementById("text2").innerHTML = "Wins: " + wins + "</br>";
                document.getElementById("text3").innerHTML = "Losses: " + losses + "</br>";
                document.getElementById("text4").innerHTML = "Guesses left: " + guessLeft + "</br>";
                document.getElementById("text5").innerHTML = "Your guesses so far: " + guess + "</br>";
                document.getElementById("text6").innerHTML = "No sir, try again";
             
            }

        }