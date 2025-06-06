/* Imagine ordering a pizza using an app. Here's what happens:

You place the order (this starts the promise).

After 30 minutes:

Either the pizza arrives successfully → 🎉 That’s resolve

Or something goes wrong (delivery failed) → 😞 That’s reject

You then:

Celebrate and eat the pizza → That's .then()

Or complain to customer support → That's .catch()

*/



const orderPizza = () => {
    return new Promise((resolve, reject) => {
      const pizzaAvailable = true;
  
      setTimeout(() => {
        if (pizzaAvailable === true) {
          resolve("🍕 Pizza delivered!");
        } else {
          reject("🚫 Pizza not available.");
        }
      }, 2000);
    });
  };
  
  // Handle the response
  orderPizza()
    .then((message) => {
      console.log("THEN: " + message); // Success: Pizza delivered
    })
    .catch((error) => {
      console.log("CATCH: " + error); // Failure: Pizza not available
    });
  

    /*      resolve()	Says the promise succeeded	                Pizza arrived
            reject()	Says the promise failed	                    Pizza failed to arrive
            .then()	    Runs when the promise was resolved	        You eat the pizza
            .catch()	Runs when the promise was rejected	        You complain to the company
    */


/*

Why Use setTimeout() in Promise Examples?
Because in real-world tasks:

Things don’t happen instantly.

Promises are meant for asynchronous tasks — those that take time.

Since we can’t actually hit a server or API in a basic example, we fake that delay using setTimeout().

*/


//PRACTICE EXAMPLE2-

const burgerorder = () => {

    return new Promise((resolve,reject) => {            //syntax for promise[ new Promise((resolve,reject) => {} ); ]

    availability =true;

    setTimeout(()=>{
        if(availability===true){
            resolve("burger is delivered");
        }
        else{
            reject("burger not available");
        }
    },3000);
    });
}

burgerorder()                           //we use .then and .catch with whtevr holds the promise example- 1)function(we use with function call) 2) varivable or const(we use it after declaring everything with variable_name.then() .catch())
    .then((data) => {                   //then recieves data from resolve
        console.log("then:"+ data);
    })
    .catch((data)=>{                    //catch recieves data from reject
        console.log("catch:"+data);
    });                                 /* we place semiclon here beacuse The entire chain starting from getPizza() to .catch() is one complete statement
                                           The semicolon ; is placed at the very end to terminate the full expression. */

                                           
// Note- if we hve multiple .then each .then will execute sequentially with data from resolved part   *************


//Practice example 3(without function and using variables for promise)

const myPromise = new Promise((resolve, reject) => {
    const success = true;
  
    if (success) {
      resolve("✅ It worked!");
    } else {
      reject("❌ It failed.");
    }
  });
  
  // Using the promise
  myPromise
    .then((result) => {
      console.log("THEN:", result);
    })
    .catch((error) => {
      console.log("CATCH:", error);
    });
  