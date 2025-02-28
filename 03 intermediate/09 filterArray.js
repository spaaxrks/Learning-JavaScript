var testArray= [2,4,6,3,1,5,9,8];


console.log(testArray.fill("h",2,5));         //fill fils up the array with whatever we give 
                                          //syntax- .fill(value,strat,stop)    (stop-1)


const myNumber= [23,24,25,55,66,77,87,98];             //here we decalred the array as const tht means we will not be able to reassign the array variable with a whole new array itself but we can make changes to the array


const result = myNumber.filter((num) => (num != 55));      //here we have used call back function also along with filter() which prints the array after applying the condition functon 
                                                            //ussually used for removing elements from  a array acc to a condition
console.log(result);



var ex = [10,20,30,40,50,60];

var result2 = ex.filter((a) => (a>30)) ;
console.log(result2);