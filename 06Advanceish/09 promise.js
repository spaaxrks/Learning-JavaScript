//in this we will lean how to create the code where tres waits for dos to complete its execution beofre executing




// const uno = () => {
//     return"i am 1";
// }

// const dos = () => {

//         setTimeout(() => {
//             return"i am 2" } , 3000)              

// }

// const tres = () => {
//     return "i am 3";
// }

// //we are creating a method for calling the functions togehter and inside the method we are assigning each function call to a variable and printing it

// const CallMe = ()=>{

//     let val1 = uno();
//     console.log(val1);

//     let val2 = dos();
//     console.log(val2);

//     let val3 = tres();
//     console.log(val3);

// }

// CallMe();  /* this now prints i am 1
//                               undefined
//                               i am 3    */



// const uno = () => {
//     return"i am 1";
// }

// const dos = () => {

//         setTimeout(() => {
//             return"i am 2" } , 3000)              

// }

// const tres = () => {
//     return "i am 3";
// }

// //we are creating a method for calling the functions togehter and inside the method we are assigning each function call to a variable and printing it

// const CallMe = ()=>{

//     let val1 = uno();
//     console.log(val1);

//     let val2 = dos();
//     console.log(val2);

//     let val3 = tres();
//     console.log(val3);

// }

// CallMe(); 






//promise is not properly explained here refer some another video.


const uno = () => {
    return"i am 1";
}

const dos = () => {

    return new Promise((resolve,reject) => {                            /*  A Promise is an object that represents the future result of an asynchronous operation — it promises to give you a value… later. */

        setTimeout(() => {
            resolve("i am 2");}, 3000);             
    });        

}

const tres = () => {
    return "i am 3";
}

//we are creating a method for calling the functions togehter and inside the method we are assigning each function call to a variable and printing it


const CallMe = async()=>{                    //The async keyword is used to define a function that returns a promise. It allows you to use await inside that function.

    let val1 = uno();
    console.log(val1);

    let val2 = await dos();                  //The await keyword is used inside an async function to pause execution until a promise is resolved or rejected.
    console.log(val2);

    let val3 = tres();
    console.log(val3);

}

CallMe(); 
