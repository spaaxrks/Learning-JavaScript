//PROJ2-
//PART:-IN THIS PROJECT WE ARE GOING TO ACESS THE CSS PROPERTY OF the HTML ELEMENT THROUGH JS.

//NOTE-document aand window are broswer specific context and hence we cannot run them in js
//we will only get output in browser console

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");


//window.getComputedStyle(element in js).property - IS USED TO GET PROPERTY OF HTML ELEMENT IN JS

//console.log(window.getComputedStyle(red).backgroundColor);      //note-in css its background-color but when we menstion propert for computed style whenever - comes we have to use camel case so backgroundColor.

const getBGcolor = (element) => {
    return window.getComputedStyle(element).backgroundColor;
};

// console.log(getBGcolor(pink));



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PART2-
//event listener-used to perform function on a certain event   //we apply eventlistener to the js element


// var color = getBGcolor(pink);


// pink.addEventListener("mouseenter",() => {              //there are a lot of events like mouseenter,click etc so the addEventListener takes 2 arguments the event and the function to perform on th event.
//     center.style.background = color;                //here style is used to set properties to center element     //here we are setting the background color of center as the color we got from getBGcolor
// });




                        //doing it through a method




const magicColorChange = (element,color) => {                       //here the element is the js element and color is what we get from getBGcolor function

    return element.addEventListener("mouseenter",() => {           
        center.style.background = color; 
    });
}


magicColorChange(red,getBGcolor(red));   //here e are calling getBG color in the methd itself
magicColorChange(cyan,getBGcolor(cyan));
magicColorChange(violet,getBGcolor(violet));
magicColorChange(orange,getBGcolor(orange));
magicColorChange(pink,getBGcolor(pink));