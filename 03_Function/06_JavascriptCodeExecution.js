// Javascript Execution Context

let var1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// Execution Phase
// 1) Global Execution this 
// 2) Memory Phase
   val1 => undefined
   val2 => undefined
   addNum => defination
   result1 => undefined
   result2 => undefined

// 3) Execution Phase
    val1 ->10
    val2 ->5
    add Num -> new variable environment + execution thread

    result1 = 15
    result2 = 

// Memory Phase          //Execution context
var1 -> undefined          // num1 -> 10
val2 -> undefined          // num2 ->5
total -> undefined         // total -> 15
