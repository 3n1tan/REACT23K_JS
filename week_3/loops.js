const prompt=require("prompt-sync")({sigint:true});
/*1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)
for (let i = 1; i < 100; i += 2) {
    console.log(i)
} */

/*2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.*/
let answer = '';
let end = 98;

for (let i = 2; i < 100; i += 2) {
    answer += ' ' + i + ' ';
    answer += ' ' + end + ' ';
    end -= 2;
}

console.log(answer);

//3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

let distanceTravelled, movingTime;

while (distanceTravelled != 0) {
    distanceTravelled = Number(prompt("Enter distance travelled in km: "));

    if (distanceTravelled == 0) {
        console.log('distance 0 - game over');
        break;
    }

    movingTime = Number(prompt("Enter moving time"));
    let avgSpeed = distanceTravelled / movingTime;
    console.log('')


}
//6. Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

let sum = 0;
let i = 0;

while (i < 3) {
    userInput = Number(prompt("Enter a number: "));
    i++;
    sum += userInput;
}

let average = sum/3;

console.log(`The average of the numbers is ${average}`)