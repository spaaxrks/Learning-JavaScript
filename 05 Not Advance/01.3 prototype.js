//here we will learn how to insert a new method into an blueprint object from outside the object using prototype keyword

var user = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;

    this.getcourseCount = function () {
        console.log(`course count is: ${this.courseCount}`);
    };
};


user.prototype.getName = function(){                            //here the syntax is  blueprint object.prototype.functioname= function () {}. //it adds the method into the object
    console.log(`first name is:${this.firstName}`);
};

var akash = new user("akash",3);                        //new keyword creates  an new object from the blueprint
akash.getcourseCount()
akash.getName();;




//all datatypes have predefined blueprint (basically like class) which contains all the functions etc in it
//now we will do an example of adding an method to the global bluePrint of string

String.prototype.isAkash = function() {                 //here the blueprint of strings is String
    if(this.toString() === "akash"){                    //for primitive data types(string,number,boolean) 'this' will return the string in the form of an object. //therefore we use .toString() to convert into proper string
        return true
    }
    else{
        return false
    }
}

var a = "akash";                                    //here when we created a string ,we are able to a lot of functions to tht string like capitalize,length etc //above we created new function like tht called isAkash
console.log(a.isAkash());

var b="anand";
console.log(b.isAkash());



//now we will do an example of adding a method the global blueprint of array

Array.prototype.totalSum = function(){          //here th global blueprint of array is Array
    var sum=0;
    for(let i=0;i<this.length;i++){             //here 'this' returns the array
        sum= sum + this[i];
    }
    return sum;
}

m=[10,20,30];
console.log(m.totalSum());


//all functions of an object,array,variables like capitalize,toStrin etc are stored in a inbuilt container called __proto__(u can see it in console)

//note-objects have a property caled hasOwnproperty  which returns true or false based on if the object has the function or part
//eg: if(akash.hasOwnProperty("firstname")){console.log(akash.firstname)}