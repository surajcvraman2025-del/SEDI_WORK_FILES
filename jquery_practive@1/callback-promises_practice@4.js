let promise_1 = () => { 
    
    return new Promise(

(resolve , reject) => {

    console.log("this is first promise-js");
    console.log("data...1");
    console.log("data...2");
    console.log("data...3");
    console.log("data...4");
    console.log('data...5');
   
   
    
    resolve("done!")
}

)}
let o = promise_1();
console.log(o);


o.then((result) => {
    console.log("hello 9999");
    console.log(result);
});