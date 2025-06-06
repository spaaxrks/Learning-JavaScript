//we use setTimeout() to make a part wait for sometime before executing letting other remaining parts and functions after it to execute first in the order of function call

const uno = () => {
    console.log("i am 1");
}

const dos = () => {
    
    setTimeout(() => {
        console.log("waited 3 seconds"); } , 3000               //waits 3 seconds before eexcuting the console.log  allowing the remaining parts to execute first
    )

    console.log("i am 2");
}

const tres = () => {
    console.log("i am 3");
}


uno();
dos();
tres();