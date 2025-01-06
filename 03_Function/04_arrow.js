const user = {
    username: "Diksha",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sanjay"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Avyansh"
//     console.log(this.username)  // undefined (this is use only object not in function)
// }


// const chai = function(){
//     let username = 'Diksha'
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "diksha"
    console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "diksha"})


console.log(addTwo(3,4));



