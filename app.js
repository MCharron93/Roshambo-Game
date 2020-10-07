let compArray = [{ name: "rock" }, { name: "paper" }, { name: "scissors" }]


function play(playerChoice) {
  let generateRandom = compRandomChoice()
  let compChoice = compArray[generateRandom].name
  document.getElementById("comp-play").innerHTML = compChoice


  if (playerChoice == 'rock') {
    compareChoice('rock', compChoice)
  } else if (playerChoice == 'paper') {
    compareChoice('paper', compChoice)
  } else if (playerChoice == 'scissors') {
    compareChoice('scissors', compChoice)
  }
}

let results = ""

function compareChoice(choice, comp) {

  if (choice == comp) {
    results = 'its a tie'
  } else if (choice == 'paper' && comp == 'rock') {
    results = "Your paper beats Computer's rock"
    // alert("You Win!")
  } else if (choice == 'scissors' && comp == 'rock') {
    results = "Computer's rock beats your scissors"
    // alert("You lose -_-'")
  } else if (choice == 'rock' && comp == 'paper') {
    results = "Computer's paper beats your rock"
    // alert("You lose -_-'")
  } else if (choice == 'scissors' && comp == 'paper') {
    results = "Your scissors beats Computer's paper"
    // alert("You Win!")
  } else if (choice == 'rock' && comp == 'scissors') {
    results = "Your rock beats Computer's scissors"
    // alert("You Win!")
  } else if (choice == 'paper' && comp == 'scissors') {
    results = "Computer's scissors beats your paper"
    // alert("You lose -_-'")
  } else {
    results = 'something went wrong'
  }
  
  drawPlay()
}

function compRandomChoice() {
  let result = (Math.floor(Math.random() * compArray.length))
  return result
  console.log(result)
}

function drawPlay() {
  let yourPlayElem = document.getElementById("results")
  yourPlayElem.innerText = results
}