function init(){
    var firstname="hitesh";
    function sayFirstname(){
        console.log(firstname);
    }
    sayFirstname();             //here it basically means tht the function can only inherit parameters from the parent funtion if it does not have its own
}

//also if we try calling saynamefirst outside init it wont work because it came out of the function context of initad the function sayname is inside init

init();
