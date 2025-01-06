function sayMyName(){
    console.log('D');
    console.log('I');
    console.log('K');
    console.log('S');
    console.log('H');
    console.log('A');
}

// sayMyName()

function addTwoNumbers(num1, num2){
 console.log(num1 + num2)
}

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,4);
// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Diksha")) //Diksha just logged in
console.log(loginUserMessage()) // undefined just logged in 

