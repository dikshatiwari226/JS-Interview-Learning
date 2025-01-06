// array

const myArray =[0,1,2,3,4,5]
myHeros = ["Saktiman", "naagraj"]


const myArr2 = new Array(1,2,3,4)
// console.log(myArray[1]);

//Array methods
// myArray.push(6)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// console.log(myArray);

// const newArr = myArray.join()
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
console.log("A ", myArray); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArray.slice(1,3) 
console.log(myn1);      // [ 1, 2 ]
console.log("B ", myArray); //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray.splice(1,3)
console.log(myn2); //[ 1, 2, 3 ]
console.log("C ", myArray); //C  [ 0, 4, 5 ]






