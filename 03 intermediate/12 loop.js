for(let i=0;i<10;i++){
    console.log(i);

}

const mystates=[
    "rajisthan",
    "delhi",
    "assam",
    1947,
    "tamil nadu",
    "maharashtra"
];



for(let i=0;i<mystates.length;i++){

    console.log(mystates[i]);
}

console.log("\n");
// to print only the strings inside the array

for(let i=0;i<mystates.length;i++){
    if(typeof mystates[i] !== "string") continue; //skips iteration
    console.log(mystates[i]);
}