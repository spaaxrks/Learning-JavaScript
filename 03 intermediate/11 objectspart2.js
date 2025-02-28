var user = {       
firstname:"akash",
lastname:"jain",
role:"admin",
logincount: 32,
facebooksignedin: true,
courselist: [],

buycourse: function (coursename) {              //here we are defining an function inside an object therfore the syntax changes a bit where the function name acts as the key.   //so syntax becomes function (argument) { }

    this.courselist.push(coursename)           //we use 'this' here to make sure the compiler is refrencing to courselist inside the object as there is a var cousrelist also outside the object
},

coursecount: function (){
    return `${this.firstname} is enrolled in ${this.courselist.length} classes.`            //we use "this" to refrence the firstname from inside the object.
},

info: function (){                 //to print data in a table format.
    console.table(user);
}

};




var courselist =true;       //just for understanding 'this' function even more

console.log(user.firstname);


console.log(user.coursecount());         //here again the functon name is the key we call it by adding () after function name.

user.buycourse("Javacourse");            //adds javacourse into the list

console.log(user.coursecount());

console.log(user.courselist);


//asiignment

user.info(); //to print all data in a table fromat.