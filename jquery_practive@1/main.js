// window.onload = (function() {
 
//     alert( "welcome" );
 
// })();
 


 // if-he functions in js //
  

 (
    function raj () {
      console.log('hello raj ');
      
    }
 )(); //this function run instant when js loads\\
  
//if_he sytex > () <=== use first paranthissic and write the function in , then use second paranthisis to tell computer runthis instants ()

// (  function s)(instant run )


// can arrow function has (iife) 
// (const hello = () => {
//     console.log('hello fun 4 runs');
    
// })() ;//run this and find out?? -- get error

// yes arrow function has iife but diffrent syntex
(() => {
    console.log('hello fun 4 runs');
})();

console.log('');


//globle exticution phase //



//
 a = "222";
 b = '3333';

console.log(window.a); //==> 222
console.log(window.b); //==> 3333

//

function raj (ams) {
  console.log('003');
}
console.log(window.raj);

//gec concept 

console.log(x);
var x = 1234;  //== save into merory 
console.log(x);// ans 1234

x = 333;

//

globalT(); // call first 

function globalT(params) { //then make this function
  console.log(globalT);
}