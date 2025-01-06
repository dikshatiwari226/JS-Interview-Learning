// Objects

// 1 => Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Diksha",
    "full name": "Diksha Tiwari",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "diksha@google.com",
    isLoggerIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "tiwariDiksha@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



//2=> Singleton (constructor)
// Object.create

