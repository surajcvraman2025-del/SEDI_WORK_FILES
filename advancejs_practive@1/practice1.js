//hoisting in js



//greeting();  // mamory phase = > not do here; || code phase = > run the greeting function && in function x create and defind in local exceution context ; 
console.log(x); // mamory phase = > not do here; 

var x = "this is the x varable";  // mamory phase = > save var "x" in mamory and intailize with undiafind;

console.log(x);//mamroy phase not do here;

function greeting (params) { //mamory phase = > js save function in mamorywith full body ; 
     x = "this is the greeting function x varable change the current x "
    
}
//


//timeuot ,web api 
console.log(1);
console.log(55);

setTimeout(() => {
     console.log(2);
     
     
}, 0);
console.log(3);
//promise-- methods
let p = new Promise((resolve, reject) => {
  resolve("done");
});

// call back 



function calculator(a, b, cc) {
  cc(a, b);
}

calculator(1, 2, sum);

function sum(a, b) {
  console.log(a + b);
}