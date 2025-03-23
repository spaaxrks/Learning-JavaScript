// console.log(name);           //this retuens undeined as code hoisting of variable retuens undefined

// var name = "akash";

// console.log(name2);           //this retuens error as let prevents code hoisting and gives error

// let name2 = "akash";

//-----------------------------------------------------------------


if(true){
    var lastname = "jain";
}
console.log(lastname);  //this should actually give error because console.log is outside block scope it shoudnt be accesible //but it prints since var does not follow block scope

if(true){
    let lastname2= "jain";
}
console.log(lastname2); //gives error since let follows block scope



//for(let i=0; i<n ;i++)    //tht is why we use let inside for loops because if we use var even after the loop is over when if we start another loop it will cause problems since old i is still accessible