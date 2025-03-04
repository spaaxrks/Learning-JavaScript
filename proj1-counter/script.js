//PROJ 1 
//IN THIS PROJECT WE WILL CEATE A COUNTER WHICH WILL COUNT UPTO A SPECIFIC NUMBER.  
//AND TO CHANGE A TEXT AFTER A SPECIF TIME.




//note -
//setTimeout(function,milliseconds)   //whenevr timout is called it stops the function for the given milliseconds and resumes it after

//setInterval(function,milliseconds)  //this defines after how much interval(milliseconds) do u want the function to repeat.






var counter = document.querySelector(".counter");         //query selector works like getElementBy but it returns the entire h1 tag as output istead of an array as we saw earlier   //.counter if its class, #counter if id
var followers = document.querySelector(".Followers");        



let count = 1;
setInterval( () => {                    //we are using a callbackfunction as argument here

    if(count<=1000){                     //this is so the functio stops when count reachs 1000

                             
        counter.innerText = count;      //this is to change the text if the counter
        count++;   

    }

} ,1);

setTimeout(() => {
    followers.innerText = "followers on insstagram."                        //cahnges the text inside followers to followers in instagram after 3000 milliseconds
},4000)