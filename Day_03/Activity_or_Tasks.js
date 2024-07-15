// Control Structures
// Tasks/Activities

// Activity 1: If-Else Statements

// Task 1: WAP to check if a number is positive, negative or zero and log the result to the console
let n = 4;
if(n>0){
    console.log("it is positive number");
}
else if(n<0) {
    console.log("it's a negative number");
}
else {
    console.log("It's a Zero");
}

// task 2: WAP to check if a person is eligible to vote (vote >=18) and log the result to the console.
 let age = 45;
 if(age >= 18){
    console.log("Eligible for Vote");
 }
 else{
 console.log("Not Eligible for Vote");
 }

//  Activity if-Else Statements
// Task 3: WAP to find largest of three numbers using if-else statements.
let a = 23, b = 132, c = 20;
if(a>b && a>c){
    console.log("a is greater");
}
else if (b>a && b >c){
    console.log("b is greater");
}
else{
    console.log("c is greater");
}
// New to Learn
// Activity 3: Switch Case --> Use the switch statement to select one of many code blocks to be executed.
// task 4: WAP that uses a switch case to determine the day of the week based on Number (1-7) and log the day name to the console/
const day = 6;
switch (day){
    case 1: 'Monday';
    console.log("Today is Monday");
    break;
    case 2: 'Tuesday';
    console.log("Today is Tuesday");
    break;
    case 3: 'Wednesday';
    console.log("Today is Wednesday");
    break;
    case 4: 'Thursday';
    console.log("Today is Thursday");
    break;
    case 5: 'Friday';
    console.log("Today is Friday");
    break;
    case 6: 'Saturday';
    console.log("Today is Saturday");
    break;
    case 7: 'Sunday';
    console.log("Today is Sunday");
    break;
    default:
        console.log("It's a FreeDay");
}

// Task 5: WAP uses switch case to assign a grade ('A','B','C','D','F')based on a score and log the grade to the console.
const score = 85;
switch (score){
    case 50:
        console.log("The grade is F");
        break;
    case 65:
        console.log("The grade is C");
        break;
        case 85:
        console.log("The grade is A");
break;
        case 75:
        console.log("The grade is B");
break;
        default: 
         console.log("Good to Go");
}  