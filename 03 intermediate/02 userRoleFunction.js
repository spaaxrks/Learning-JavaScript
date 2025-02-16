//define a funtion that can anser the role of a user

/*user can be th following roles

//admin - gets full access
//subadmin - access to create/delete course
//testprep - access to create/delete test
//user - only to consume content
//other - trial user

input: getUserRole(name, role)
*/


function getUserRole(name, role){

    switch(role){
        case "admin":
            return `${name} is admin with all access`                          //we dont have to return break since we are using return keyword

            case "subadmin":
            return `${name} is subadmin with access to create/delete course`

            case "testprep":
            return `${name} is testprep - access to create/delete test`

            case "user":
            return `${name} is user - only to consume content`

            default:
            return `${name} is other - trial user`
    }
}


getUserRole("akash","testprep");   //prints nothing only retuens


var access =getUserRole("akash");
console.log(access);






                                                         //OR
                      //u can do this method also, mainly will be useful when we want to pass a function as an argument of another function(called callback function)









var getUserRole2 = function (name, role){              //here we have to assign an anomyous function(function withjout name)to a variable 

    switch(role){
        case "admin":
            return `${name} is admin with all access`                          //we dont have to return break since we are using return keyword

            case "subadmin":
            return `${name} is subadmin with access to create/delete course`

            case "testprep":
            return `${name} is testprep - access to create/delete test`

            case "user":
            return `${name} is user - only to consume content`

            default:
            return `${name} is other - trial user`
    }
}

console.log(getUserRole2("anand","user"));        //here we have to pass arguments in the variable which will automatically pass into the function inside

var access2= getUserRole2("asha","admin");  //here access2 will reference the location of getUserRole2 variable(since we are assigning a variable to another variablen)
console.log(access2);
