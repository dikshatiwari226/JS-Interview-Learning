// Primitive (call by value)
   // 7 types: ->String, Number, Boolean, null, undefined, Symbol, BigInt

   const score = 100;
   const scoreValue = 100.3;
   const isLoggedIn = false;
   const outsideTemp = null;
   let userEmail;

   const id = Symbol('123')
   const anotherId = Symbol('123')

//    console.log(id === anotherId);

    // console.log(typeof outsideTemp) // Object
    // console.log(typeof isLoggedIn); // boolean
    // console.log(typeof userEmail); // undefined
    // console.log(typeof score); // number
    // console.log(typeof scoreValue); // number
    
    
    
    


// Non-Primitive/Reference Type
    // Array, Objects, Functions

    const heros = ["shaktiman", "naagraj", "doga"]
    let myObj = {
        name: 'Diksha',
        age: 22,
    }

    const myFunction = function(){
        console.log("Hello world");
    }

    // console.log(typeof myFunction); //Object function
    // console.log(typeof myObj); // Object
    // console.log(typeof heros); // Object
    
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myUtubename = "hiteshchowdharydotcom"

let anothername = myUtubename
anothername = "chaiaurcode"

console.log(myUtubename);
console.log(anothername);

let userOne = {
    email: "diksha@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

