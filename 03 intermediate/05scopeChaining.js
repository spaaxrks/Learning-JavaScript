  var name="akash";

  console.log("line no 3:" ,name);


  function sayname(){

    var name = "anand"
    console.log("line no 9:",name)
    
    saynametwo()

    function saynametwo(){
        console.log("line no 14",name)   //here the compiler will print anand as
    }

  }

  sayname()

 //note: since saynametwo() is inside sayname() we have to call saynametwo() inside sayname() itself
 //a function inside a function does not have value outside the function




  //the general concept of chain scoping is tht the  function sayname can borrow variables only from the parent function if it does not have its own variable inside it(basically we are talking about local scope and global scope)
  //for the saynametwo function if it doesvnot have its own variable it will first try to borrow it from sayname() and if it does not have variable too then it borrows the global scope variable

  //incase we didnt have the global variable name we cannot borrow it from insde the scope as whatever is inside a function does not have value outside it