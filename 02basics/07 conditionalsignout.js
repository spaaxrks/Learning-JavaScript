var authenticated = true;

//normal way

if (authenticated){
    console.log("show signout button");
}
else{
    console.log("show login option");

}


//conditional ternary operator

authenticated ? console.log("show button") : console.log("login");       // conditon ? true part : false part