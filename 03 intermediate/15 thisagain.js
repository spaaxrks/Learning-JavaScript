//part 2 of this keyword

//note-For all regular function calls,this points to the window object(ie:global context)   //always rember this line
//here regular function calls means functions that are not within an object or anything else

console.log(this);              //THIS RETURNS THE GLOBAL CONTEXT 

var user = {
    firstname:"Akash",
    coursecount:4,
    getcoursecount: function (){
        console.log("Line 7",this);         //this returns the function context as it is inside an object
    }
}

user.getcoursecount();                  //this is not a regular function call more like an object call



var user2 = {

    firstname:"Anand",
    coursecount:4,
    getcoursecount2: function ()
    {
        function hello()
        {
            console.log("Hello");
            console.log("LINE 33",this);       //returns the global context since its a regular function call
        }

        hello();                    //this is a regular function call even tho its inside an fucntion inside an object we call the function regularily inisde the function getcousecount
    }
}

user2.getcoursecount2();

