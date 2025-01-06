let a = 300

if(true){
    let a = 10
    const b = 20
    console.log("INNER :", a);
    // var c = 30
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

// console.log(a);
// console.log(b);
// console.log(c);

// ====================== Nested Scope =========

function one(){
    const username = "Diksha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}

one()

// =========================================

if(true){
    const username = "Diksha"
    if(username == "Diksha"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++ Interesting +++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(6)

const addTwo = function(num){
    return num + 2
}

