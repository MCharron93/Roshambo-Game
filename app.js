

function play(playerChoice){
  let compChoice = 'rock'

  if(playerChoice == 'rock'){
    compareChoice('rock')
    // console.log('rock', 'The Computer chose', compChoice)
  }else if(playerChoice == 'paper'){
    compareChoice('paper')
  }else if(playerChoice == 'scissors'){
    compareChoice('scissors')
  }
}

function compareChoice(item){
  let compChoice = 'rock'

    if(item == 'rock'){
      console.log('its a tie')
    }else if(item == 'paper'){
      console.log('paper beats rock')
    }else if(item == 'scissors'){
      console.log('rock beats scissors')
    }
    else{
      console.log("this didn't work")
    }

}