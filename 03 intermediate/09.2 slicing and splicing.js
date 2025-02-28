var users= ["ted", "tim", "ton", "sam", "sor", "sod"];  //slicing slices a range of the array (does not make changes to the orginal array), for slicing syntax - array.slice(start,stop) (stop-1)

//console.log(users.slice(0, 5));

//console.log(users.slice(users.length - 1));             //.length returns 6, 6-1=5 so it starts from index 5 


//users.splice( 1, 3, "hi" );     //splicing used to remove elements from the array and instead of it add given elements(makes cahnge in orginalarray)
                                //syntax - array.splice(start, count, elements) count- it is the number of elements to remove from the start value(if it is 2 it removes 2 elements including start value element)
//console.log(users);




users.splice( 1, 3, "hi", "bye","hey");     //splicing used to remove elements from the array and instead of it add given elements(makes cahnge in orginalarray)
                                //syntax - array.splice(start, count, elements) count- it is the number of elements to remove from the start value(if it is 2 it removes 2 elements including start value element)
console.log(users);