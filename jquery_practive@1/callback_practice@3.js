//this is callback + async(timeout-methods)
//suorce code for practice==>
    function one(a, next) {
  setTimeout(() => {
    console.log(a);
    next && next();
  }, 1000);
}

function two(a, next) {
  setTimeout(() => {
    console.log(a);
    next && next();
  }, 1000);
}

const bigF = () => {
z = "suraj";
x = "tushr";
c = "aditya kumar"
d = "asif ali"


  
  
  one(z, () => {
  two(x, () => {
    two(c, () => {
     two(d,() => {setTimeout(() => {
    console.log("end");
  }, 1000);
     })
    });
  });
}); };  //<=====>???

bigF();
//callback done//