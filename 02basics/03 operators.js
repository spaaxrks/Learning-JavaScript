// // = - / * %
// var num1 =7;
// var num2 =8;
// console.log(num1 + num2);



// var answer= num1> num2;
// console.log(answer)


//discount percentage
//discount % = (listprice-sellling price)/listprice * 100


var sellingPrice  = 199;
var listPrice = 799;

var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;

console.log("Discount% is: ", discountPercent);

//var displayDicountPercent = Math.round(discountPercent);
var displayDicountPercent = discountPercent.toFixed(2);  // for only taking 2 decimal but makes it into string
console.log(parseFloat(displayDicountPercent));          //converts string into float

console.log(typeof displayDicountPercent);

//typeof for type


// data types:
// undefined
// null
// Booleannumber
// string