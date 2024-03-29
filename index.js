#! /usr/bin/env node
import inquirer from "inquirer";
let accountBalance = 50000;
let pin = 22334;
console.log("Your Account Balance is " + accountBalance);
const codeAcess = await inquirer.prompt({
    name: "pinCode",
    message: "Enter Your Pin",
    type: "number",
});
if (codeAcess.pinCode === pin) {
    console.log("Hello Admin, You are logged in");
    const adminOperation = await inquirer.prompt({
        name: "operation",
        message: "Select your operation",
        type: "list",
        choices: ["Withdraw", "Account Balance"]
    });
    if (adminOperation.operation === "Withdraw") {
        let option = await inquirer.prompt({
            name: "optionList",
            message: "Select your Payment",
            type: "list",
            choices: ["1000", "3000", "5000", "10000", "25000", "50000", "Other Amount"]
        });
        if (option.optionList === "1000") {
            console.log("Atm fees Rs:25");
            accountBalance -= 1000 + 25;
            console.log("Your Account Balance is " + accountBalance);
        }
        else if (option.optionList === "3000") {
            console.log("Atm fees Rs:25");
            accountBalance -= 3000 + 25;
            console.log("Your Account Balance is " + accountBalance);
        }
        else if (option.optionList === "5000") {
            console.log("Atm fees Rs:25");
            accountBalance -= 5000 + 25;
            console.log("Your Account Balance is " + accountBalance);
        }
        else if (option.optionList === "10000") {
            console.log("Atm fees Rs:25");
            accountBalance -= 10000 + 25;
            console.log("Your Account Balance is " + accountBalance);
        }
        else if (option.optionList === "25000") {
            console.log("Atm fees Rs:25");
            accountBalance -= 25000 + 25;
            console.log("Your Account Balance is " + accountBalance);
        }
        else if (option.optionList === "50000") {
            console.log("Atm fees Rs:25");
            accountBalance -= 50000 + 25;
            console.log("Your Account Balance is " + accountBalance);
        }
        else if (option.optionList === "Other Amount") {
            console.log("Minimum Withdraw is 500 and Maximum is 50000");
            let otherPayment = await inquirer.prompt({
                name: "other",
                message: "Enter Your Amount",
                type: "number",
            });
            if (otherPayment.other) {
                console.log("Atm fees Rs:25");
                accountBalance -= otherPayment.other;
                console.log("Your Account balance is " + accountBalance);
            }
            else if (otherPayment.other > accountBalance) {
                console.log("You have Insufficient balance");
            }
            else if (otherPayment.other < 500) {
                console.log("Error: your enter amount is less than 500");
            }
            else {
                console.log("Error: Please Enter your Amount");
            }
        }
    }
    else if (adminOperation.operation === "Account Balance") {
        console.log("Your Account Balance is " + accountBalance);
    }
    else {
        console.log("Error: Please Select given options");
    }
}
else {
    console.log("Error: Please Enter your correct Pin Code");
}
