import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {message:"Enter Frist Number", type:"number", name:"fristNumber"},
    {message:"Enter Second Number", type:"number", name:"secondNumber"},
    {
        message:"Select One Operator to perfrom Operations",
        type:"list",
        name:"operator",
        choices:["Addition","Subtractions","Multiplication","Division"],
    }
]);
if(answer.operator === "Addition"){
    console.log(answer.fristNumber + answer.secondNumber)
}
else if(answer.operator === "Subtractions"){
    console.log(answer.fristNumber - answer.secondNumber)
}
else if(answer.operator === "Multiplication"){
    console.log(answer.fristNumber * answer.secondNumber)
}
else if(answer.operator === "Division"){
    console.log(answer.fristNumber / answer.secondNumber)
}
else{
    console.log("Invalid input")
}