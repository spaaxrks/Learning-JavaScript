const mystates=[
    "rajisthan",
    "delhi",
    "assam",
    1947,
    "tamil nadu",
    "maharashtra"
];


mystates.forEach( (s) => (console.log(s)));     //for each is not exactly a loop but a method of an array.
                                                //for each is an example of a callback function as it takes a function as an argumnt.
                                                //but it iteratres through each element of the array and executes the given function.




//note:interview quesion


let i=0;

for(;;){   ///here we habe not given any argument but it still works but it wont folow any condition and will keep executing until break;
    if(i>3) break;

    console.log(i)
    i++                 //here we have given a iterating function although not with the loop(therefore not ideal) but it still works and the if condition will work and it will come out of the loop once break;
}

