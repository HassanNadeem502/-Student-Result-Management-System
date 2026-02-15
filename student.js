// Student Result Management System

var choice = "yes";

while (choice === "yes") {

    var name = prompt("Enter Student Name:");
    
    var marks1 = +prompt("Enter English Marks:");
    var marks2 = +prompt("Enter Math Marks:");
    var marks3 = +prompt("Enter Science Marks:");

    var total = marks1 + marks2 + marks3;
    var percentage = (total / 300) * 100;

    var grade = "";
    var result = "";

    if (percentage >= 80) {
        grade = "A+";
    } 
    else if (percentage >= 70) {
        grade = "A";
    } 
    else if (percentage >= 60) {
        grade = "B";
    } 
    else if (percentage >= 50) {
        grade = "C";
    } 
    else {
        grade = "F";
    }

    if (percentage >= 50) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    console.log("------ RESULT CARD ------");
    console.log("Name: " + name);
    console.log("Total Marks: " + total);
    console.log("Percentage: " + percentage + "%");
    console.log("Grade: " + grade);
    console.log("Result: " + result);
    console.log("--------------------------");

    choice = prompt("Do you want to enter another student? (yes/no)");
}

console.log("Program Ended.");
