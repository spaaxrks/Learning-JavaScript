//the main difference between normal function and arrow fuction is that in arrow function 'this' will always return the window object ( {} in case of node ) even if it called through an object
//thereffore if we use => function we cant use this. etc as it will only point to the global context.

var object1 = {
    check:function(){
        console.log(this);
    }
}
object1.check();

var object2 = {
    check:() => {
        console.log(this);
    }
}
object2.check();
