const prompt=require("prompt-sync")({sigint:true}); //enabled userinput in terminal


let userInput = Number(prompt("Enter a secret number:"));
if (Number.isInteger(userInput) && userInput % 2 === 0) {
    console.log(`Number ${userInput} is even.`)
} else {
    console.log(`Nuber ${userInput} is odd`)
}

