let compArray = [{ name: "rock" }, { name: "paper" }, { name: "scissors" }]


function play(playerChoice) {
  let generateRandom = compRandomChoice()
  let compChoice = compArray[generateRandom].name
  console.log('computer choose: ', compChoice)


  if (playerChoice == 'rock') {
    compareChoice('rock', compChoice)
  } else if (playerChoice == 'paper') {
    compareChoice('paper', compChoice)
  } else if (playerChoice == 'scissors') {
    compareChoice('scissors', compChoice)
  }
}

function compareChoice(choice, comp) {

  if (choice == comp) {
    console.log('its a tie')
  } else if (choice == 'paper' && comp == 'rock') {
    drawPlay()
    console.log('paper beats rock')
  } else if (choice == 'scissors' && comp == 'rock') {
    console.log('rock beats scissors')
  } else if (choice == 'rock' && comp == 'paper') {
    console.log('paper beats rock')
  } else if (choice == 'scissor' && comp == 'paper') {
    console.log('scissors beats paper')
  } else if (choice == 'rock' && comp == 'scissors') {
    console.log('rock beats scissors')
  } else if (choice == 'paper' && comp == 'scissors') {
    console.log('scissors beats paper')
  } else {
    console.log('something went wrong')
  }

}

function compRandomChoice() {
  let result = (Math.floor(Math.random() * compArray.length))
  return result
  console.log(result)
}

function drawPlay() {
  let compChoiceElem = document.getElementById("comp-play").innerHTML
  

}