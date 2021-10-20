
// write a function called isEven which takes in a number and return true if the number is even and false if it is not
function isEven(num){
    if(num % 2 == 0){
        return "True"
      }  else {
        return "False"
      }
    
}

console.log(isEven(3));
console.log(isEven(2));

// Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

function isOdd(num){
  if(num % 2 !== 0){
    return "True";
  } else{
    return "False";
  }
  
}
console.log(isOdd(3));
console.log(isOdd(14));

// write a function called isPrime which takes in a number and returns true if the number is a prime number
function isPrime(n){
    if (n===1) {
      return false;
    }else if(n === 2){
      return true;
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return false;
        }
      }
      return true;  
    }
  }
  
  console.log(isPrime(9));
  console.log(isPrime(17));
  
//   prime , even and odd
function value(value1, callback){
    return callback(value1) .map(fn => fn())
}
function isEven(a){
    return[
        () => a % 2 === 1
    ]
}
function isPrime(n){
    if (n===1) {
      return false;
    }else if(n === 2){
      return true;
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return false;
        }
      }
      return true;  
    }
  }
  
  console.log(isPrime(9));
  console.log(isPrime(17));

//   Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

        
// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.


function specialMultiply(a,b){
  if(arguments.length === 1){
    return function(b){
      return a*b;
    }
    
  } else{
    return a*b;
  }
  
}
console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));

// countdown
var m = 10;
var timer
function count() {
    if(m){
        console.log(m)

    }
    else {
        clearInterval(timer)
    }
    m--
    if(m === 0){
        console.log("DONE!")
    }
}
timer = setInterval(function(){count()}, 1000)