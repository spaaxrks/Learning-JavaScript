//basically like classes

//note : here we cant use arrow function because then we cant use this.

var human = function(name,hieght,wieght){                  //here this syntax is used to create a structure(ie-blueprint) where whenever we use new keyword and call the function it gets stored as a object from which we can acces each atributes for each person.

    this.name=name;                             //here we are not creating a variable but using this so tht it is a part of the function itself so it can be turned into an object.
    this.hieght=hieght;                         //here we are not creating a variable but using this so tht it is a part of the function itself so it can be turned into an object.
    this.wieght=wieght;                         //here we are not creating a variable but using this so tht it is a part of the function itself so it can be turned into an object.

    this.getBMI= function (){                           //even this function is a part of the structure itself
        return this.wieght/this.hieght*this.hieght;      //we do this.hieght even here bcause the hieght we take from above is a part of the structure itself so we dont dont do like with normal variables   
    }
}

var akash = new human("akash",1.8,80);                   //here we use new keyword along with the above syntax to create a new object from the above function structure
console.log(akash);
console.log(akash.getBMI());


var anand = new human("anand",1.9,100);                   
console.log(anand);
console.log(anand.getBMI());