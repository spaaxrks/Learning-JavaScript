 //we cannot run API programs on node and we use console for that
 //we are using an API FOR jokes
 
 fetch('https://api.chucknorris.io/jokes/random')     //fetch always returns a promise. therfore we can use then and catch  //there is alwasys a delay when calling api hence promise
    .then((response) => {
        // console.log(response)  //this will return the values in a non readable format,we need to convert to json
        return response.json();
    } )
                                                    //after the first then it will move to the next then
    .then((data) => {
        // console.log("joke:",data.value);           //we are accesing the value part inside the data after converting to json
                    //OR
           var joke = data.value;
           console.log(joke);
    })

    .catch((data)=>{                                    //runs whenever some error occurs and the promise is rejected
        console.log("error");
    })