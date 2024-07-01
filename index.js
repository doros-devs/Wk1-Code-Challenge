const grade = prompt("What is your grade?")

function letterGrade () {
    
    if (grade < 0 || grade > 100) {
        alert(" Please input a number between 0 and 100")
    } else if (grade < 40) {
        alert("You got an E, better lack next time")
    } else if (grade >= 40 && grade < 49) {
        alert("You got a D, I bet if you study more you will do better")
    } else if (grade >= 49 && grade <= 59 ) {
        alert("You got a C, keep puching")
    } else if (grade >= 60 && grade < 79) {
        alert("You go a B, you are so close.")
    } else if (grade >= 79) {
        alert("WOW, you got an A")
    }

}

letterGrade(grade);