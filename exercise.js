const prompt=require("prompt-sync")({sigint:true}); //this is to enable running input on the terminal

let hourlySalary = Number(prompt("Enter your hourly rate:"));
let workingHour = Number(prompt("Enter your total working hours:"));
if (workingHour<=7) {
    console.log(`Your salary is ${hourlySalary*workingHour}€`)
} else if (workingHour>7 && workingHour<=9) {
    console.log(`Your salary is ${((workingHour-7)*(hourlySalary+(hourlySalary*0.5))) + (7*hourlySalary)}€`)
} else {
    console.log(`Your salary is ${((workingHour-7)*(hourlySalary+(hourlySalary*1))) + (7*hourlySalary)}€`)
}