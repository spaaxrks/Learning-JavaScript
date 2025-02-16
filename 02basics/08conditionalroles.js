//create an application with following rles:

//admin - gets full access
//subadmin - access to create/delete course
//testprep - access to create/delete test
//user - only to consume content

var user="testprep";


switch(user){

    case "admin":
        console.log("admin - gets full access");         
        break;                    //or to avoid using break we can use return console.log("")

        case "subadmin":
            console.log("subadmin - access to create/delete course");         
            break;                    

        case "testprep":
            console.log("testprep - access to create/delete test");         
            break;                   

        case "user":
            console.log("only to consume content");         
            break;  

        default:                             //if no other value matches default gets executed
            console.log("trial user");         



    
}

