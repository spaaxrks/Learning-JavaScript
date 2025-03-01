const names= ["youtube", "facebook", "instagram", "netflix", "Amazon"];


//we are gonna learn for of (used for arrays) and for in (used for objects) //lets us avoid the ussual synatx of for and makes it easy

for(const n of names){     //for of: here if we use 'of' it goes though each element of the array("not index")          //we use const mostly for 'for of'.
    console.log(n);
}


const symbols ={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook",
    lco:"learncodeonline"
}

for(const n in symbols){                                    //for in:goes through each key of te object and to get the value we do object[n].
    console.log(`key:${n} and value:${symbols[n]}`);
}