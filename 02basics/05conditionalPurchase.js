//user is only allowed to make purchase when he is
//logged in
//email verified
//cardinfo-valid
//if any one is missing,stop purchase


var isLoggedIn =true;
var isEmailVerified=true;
var cardInfo =true;

if(isLoggedIn){
    console.log("Loggedin succesfully");
    if(isEmailVerified){
        console.log("Email is verfied");
        if(cardInfo){
            console.log("You can make a purchase");
        }

    }
}

                //OR

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("allow purchase");

}
else{
    console.log("not allowed")
}