const useRecursion = (n) => {
    return n < 2 ? n : useRecursion(n - 1) + useRecursion(n - 2)
   }
  
   const useLoop = (n) => {
     if (n < 2) {
       return n;
     } else {
     let f = 0, s = 1, fib = 1;
       for (let i = 2; i <= n; i++){
         fib = f + s;
         f = s;
         s = fib;
       }
     return fib;
     }
   }
  
  const mainFunc = (n, r) => {
    if (r === 'r') {
        console.log("Fibonacci number: " + useRecursion(n) + "\nUsed Recursion to count this value.");
    } else if (isNaN(n)) {
        console.log("You should provide a number as the first argument!");
    } else {
        console.log("Fibonacci number: " + useLoop(n) + "\nUsed Loop to count this value.");
    }
  }
  
  mainFunc(process.argv[2], process.argv[3])
  