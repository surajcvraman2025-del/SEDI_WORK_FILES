//call back funcion practice only callback//

//defination of function ===> callback is a loops who called others function with some parameters //

function one( a, nextdata) {  // created one function who takes two (parameters==> a(who is a value) && nextdata( who will make latar a function ))
  console.log(a);   //console.the(recived praramerters_from(a))
  console.log(nextdata); //console.the(recived parametes_form(nextdata_"who is function"))
    
      nextdata() //run the (nextdata-function)|| any-void-vulue

}//close the function


function two(a,nextdata) { //created second function->name=two who take one (paramrters==> a(who is a value)
  one(a,nextdata) //called the one function with parameters//
  
}
//=================================================================================================================================////
one(1, () => {
  two(2,()=> {
    two(3, () => {                                //callbake-arguments//
      two(4,() => {
        console.log("end");
      });
});
});
});

//===================================================================================================================================///


function name(v, callback) {
  console.log(v);
  console.log(callback);
  

}
function namedata() {
  
}