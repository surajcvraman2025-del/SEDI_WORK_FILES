let promise_1 = () => { 
                                                                                                //qusetion which function first ?
                                                                                                
    return new Promise(

(resolve , reject) => {

    // console.log("this is first promise-js");
    // console.log("data...1");
    // console.log("data...2");
    // console.log("data...3");
    // console.log("data...4");
    // console.log('data...5');
   
   let a = true
   if(a){
        resolve("done!form suuraj api")
   }else{

    reject("ee")
   }
    
    
}

)}




function fakeApiCall() {
  return new Promise((resolve, reject) => {
    
      const success = true;

      if (success) {
        resolve({ user: 'Alex' }); // data "arrived"
      } else {
        reject('Server error');
      } 
}
     );
  }





// console.log(o);


setTimeout(() => {
    fakeApiCall().then(res => {
    console.log(res);                           //fixed after the right code 1//
    promise_1().then(res =>{
        console.log(66)
    });
})
}, 1000);





// async run() => {
//     let o = await fakeApiCall();
    
    
//     o.then((result) => {
//     console.log("data fecth", result);
//     // console.log(result);
// });
// o.catch((result) => {console.log("errorl" );
// })
// }, 





// async function run(params) {
    
// }
// run(0)


//  setTimeout(() => {
//     fakeApiCall().then(res => {
//         console.log("API:", res);
//     });
// }, 2000);                                               //1right code//


// // after 2 seconds
// setTimeout(() => {
//     promise_1().then(result => {
//         console.log("promise_1:", result);
//     });
// }, 1000);