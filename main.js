function checkage() {
    const age = ("How old are you?");

    if (age < 18) {
        console.log("You are too young");
    } else if (age < 27) {
        console.log("right age for the military service");
    } else if (age < 41) {
        console.log("You are in reserve")
    } else if (age < 55) {
        console.log("You are in backup")
    } else {
        console.log("You are too old")
    }
}

checkage()

let hourSalary = 10 //prompt("Enter your wage per hour");
let workingHour = 12//prompt("Enter your overall working hours");
if (workingHour <= 7) {
    console.log("Your salary is " + (workingHour * hourSalary))
} else if (workingHour > 7 && workingHour <= 9) {
    console.log(((workingHour - 7)*(hourSalary + (hourSalary *0.5))) + (7 * hourSalary))
} else if (workingHour > 9) {
    console.log(((workingHour - 7)*(hourSalary + (hourSalary *0.5))) + (7 * hourSalary)) 
}




