const secretNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
let gameOver = false;
console.log(secretNumber);

const input = document.querySelector("input");
const button = document.querySelector("button");
const reset = document.querySelector(".btn");
const message = document.querySelector("#message");
const attemps = document.querySelector("#attemps");

button.addEventListener("click",()=>{

    if(gameOver) return;

    const value = Number(input.value);

    if(!input.value){
        message.textContent = `Please enter a Number`;
        return
    }

    if(value < 1 || value > 100){
        message.textContent = "please enter a Number in range 1-100";
        return
    }
    
    count++;

    if(value === secretNumber){
        message.textContent = `Correct!, At ${count}`;
        gameOver = true;
        input.disabled = true
        button.disabled = true
    }
    else if(value < secretNumber){
        message.innerText = `guess higher number`;
    }else{
        message.innerText = `guess lower number`;
    }
    attemps.innerText = `Attemps ${count}`;
    input.value = "";
})

reset.addEventListener("click",()=>{
    gameOver = false;
    input.value = "";
    count = 0;
    input.disabled = false;
    button.disabled = false;

    message.innerText = ""
    attemps.innerText = ""
});