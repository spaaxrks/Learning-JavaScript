 //to add an object of itmes to the proto of another object we user object.create()

 var User = {
    name:"",    //empty
    getname:function(){
        console.log(`this is my name:${this.name}`);
    }
 };

 var akash = Object.create(User)     //here this will create an empty object and the items of user that is name and getname will go into the proto of akash(which u can only see in browser)
 console.log(akash)  //will return empty object

 akash.name="akash"; //this will take item from prototype and bring it the object akash
 akash.getname(); //this will exxecute the method in the prototype