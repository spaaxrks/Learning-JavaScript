//here we are creating HTML elements using js and then sorting them (video 48)

courses = [

    {
        name:"react-js",
        price:"2.3"
    },

    {
        name:"MERN",
        price:"3.9"
    },

    {
        name:"Angular",
        price:"2.9"
    },

    {

        name:"C++",
        price:"4.0"
    }
];


function generateLIST(){
    const ul = document.querySelector(".nextbox");

    ul.innerHTML="";                //this will remove everythinide ul everytime the function is called so tht after sorting it wont repeat.

    courses.forEach((course) => {               //loops through each list item

        const li = document.createElement("li");                //createElment() creates <> </> and when we put "li"inside it it cretaes <li> </li>
        li.classList.add("listitem");                            //to add <li class ="listitem"></li>

        const name = document.createTextNode(course.name);    //to create a text node from the listitem name we have
        li.appendChild(name)                                        //to add name (ie-the text node) inside li ( <li class='listitem'> react-js </li> )

        const span = document.createElement("span");
        span.classList.add("span");

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);               //to append span inside the li
        ul.appendChild(li);                 //to append li inside ul
    })
        
};


//generateLIST();  //alternate way to exexute the function is

window.addEventListener("load",generateLIST);   //whenever the page loads it generates the list



//to sort thr list itmms by price

const button = document.querySelector(".sortbutton");

button.addEventListener("click", () => {              //we will add an event listener on click perform callback function
    courses.sort( (a,b) => a.price - b.price)           //sort is an method of array and the syntax of it is sort( (a,b) => a - b ) for ascending
    generateLIST();                                     //aftr u sorted now we will call the function again
})

//the probelem with this is the  first course tht we created in html is hardcoded and wont be sorted and tht each time we generate it will generate the whole list again to prevent this we do line no:31

//homewrok-to add another button to sort descending wise.

const descbutton = document.createElement("button"); 

descbutton.classList.add("descbutton");
const text = document.createTextNode("desc button");
descbutton.appendChild(text);

const container = document.querySelector(".container");    //to add it into container we need to select
container.appendChild(descbutton);

descbutton.addEventListener("click", () => {              
    courses.sort( (a,b) => b.price - a.price)           //sort is an method of array and the syntax of it is sort( (a,b) => b - a ) for descending
    generateLIST();                                   
})