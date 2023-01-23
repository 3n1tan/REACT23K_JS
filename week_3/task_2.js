const prompt=require("prompt-sync")({sigint:true});

let firstInput = Number(prompt("Enter a first number: "));
let secondInput = Number(prompt("Enter a second number: "));
let thirdInput = Number(prompt("Enter a third number: "));
let totalSum = (firstInput + secondInput + thirdInput);
let inMultiples = (firstInput*secondInput*thirdInput);

if (firstInput>=0 && secondInput>=0 && thirdInput>=0) {
    console.log(totalSum);
    console.log(inMultiples);
} else if (firstInput>=0 || secondInput>=0 || thirdInput>=0) {
    console.log(totalSum);

}
else if (firstInput < 0 && secondInput < 0 && thirdInput < 0) {
    console.log("only negatives")
}

