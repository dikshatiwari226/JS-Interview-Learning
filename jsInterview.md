#Interview Questions

1. Why undefined is coming as a output if i'm calling a function in console.(Browser) ?
   const hello = () => {
   let name = "diksha";
   console.log(name);
   return name;
   console.log("Name :", name);
   console.log("hello");
   }
   hello();

   Answer: return keyword

2. Why this function having a referance error ? (lexical scope and closure)

   let name = "Tiwari";

   const hello = () => {
   console.log("Name :", name);
   let name = "Diksha"
   console.log("Name2:", name);
   }
   hello();

3.
