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
  } else if (choice == 'scissors' && comp == 'rock') {
    results = "Your rock beats Computer's scissors"
  } else if (choice == 'rock' && comp == 'paper') {
    results = "Your paper beats Computer's rock"
  } else if (choice == 'scissor' && comp == 'paper') {
    results = "Your scissors beats Computer's paper"
  } else if (choice == 'rock' && comp == 'scissors') {
    results = "Your rock beats Computer's scissors"
  } else if (choice == 'paper' && comp == 'scissors') {
    results = "Your scissors beats Computer's paper"
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