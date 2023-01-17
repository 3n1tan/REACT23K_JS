function checkage() {
    const age = prompt("How old are you?");

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