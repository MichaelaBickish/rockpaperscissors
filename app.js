
//    declare values of equal to, greater than, less than.
//    rock is equal to rock. greater than scissors. less than paper
//    paper is equal to paper. greater than rock. less than scissors.
//    scissors is equal to scissors. greater than paper. less than rock.

let choices = ["rock", "paper", "scissors"]



//  This function is called when any of the 3 buttons are clicked.
//  The person player has picked their choice. Now the computer choice needs assigned to a var
//  the computer's variable needs to be randomly picked when this function is invoked.
//  create a separate function to get the random choice.

function play(playerChoice) {
let compChoice = randomItem(choices)
console.log("player;", playerChoice, "computer;", compChoice)
//logic needed: if statements to determine winner
    if (playerChoice == "rock"){
        if (compChoice == "rock"){
            console.log("It's a tie!")
            document.getElementById('results').innerText=`It's a tie!`
        }
        else if (compChoice == "paper"){
            console.log("WA Wwa waaaa.... loser")
            document.getElementById('results').innerText="WA Wwa waaaa.... loser"
        }
        else if (compChoice == "scissors"){
            console.log("WINNER!")
            document.getElementById('results').innerText="WINNER!"
        }

    }
    if (playerChoice == "paper"){
        if (compChoice == "rock"){
            console.log("WINNER!")
            document.getElementById('results').innerText=`WINNER!`
        }
        else if (compChoice == "paper"){
            console.log("It's a tie!")
            document.getElementById('results').innerText=`It's a tie!`
        }
        else if (compChoice == "scissors"){
            console.log("WA Wwa waaaa.... loser")
            document.getElementById('results').innerText=`WA Wwa waaaa.... loser`
        }

    }
    if (playerChoice == "scissors"){
        if (compChoice == "rock"){
            console.log("WA Wwa waaaa.... loser")
            document.getElementById('results').innerText=`WA Wwa waaaa.... loser`
        }
        else if (compChoice == "paper"){
            console.log("WINNER!")
            document.getElementById('results').innerText=`WINNER!`
        }
        else if (compChoice == "scissors"){
            console.log("It's a tie!")
            document.getElementById('results').innerText=`It's a tie!`
        }
    }
}


function randomItem(something) {
    let index = Math.floor(Math.random()*something.length)
    return choices[index]
}