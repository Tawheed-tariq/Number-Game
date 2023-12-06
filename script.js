const winner = document.getElementById('winner')
const dice1 = document.getElementById("diceP1")
const dice2 = document.getElementById('diceP2')
const button = document.getElementById("button")
const reset = document.getElementById("reset")
const generateNum = () => {
    let num = Math.floor((Math.random() * 6) +1)
    return num
}

const chooseWinner = (num1 , num2) => {
    if(num1 > num2){
        winner.innerHTML = "Player 1 Won!"
    }else if(num2 > num1){
        winner.innerHTML = "Player 2 Won!"
    }else{
        winner.innerHTML = "Draw!"
    }
}

button.addEventListener('click', () =>{
    let num1 = generateNum()
    let num2 = generateNum()
    dice1.src = `images/dice${num1}.png`
    dice2.src = `images/dice${num2}.png`
    chooseWinner(num1, num2);
})

reset.addEventListener('click', () => {
    dice1.src = `images/dice-target.png`
    dice2.src = `images/dice-target.png`
    winner.innerHTML = "Number Game"
})