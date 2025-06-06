
const Fetchpokemon = () => {

const pokemonname= document.getElementById("inputpokemonname").value.toLowerCase()

var imgelement = document.getElementById("pokemonimg");
var nameelement= document.getElementById("displaypokemonname");
var weightelement = document.getElementById("pokemonweight");

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // var data = data;
    console.log(data);    //just to print in console

    //fetching name wieght and image for our pokemon from api data
    var pokeimg = data.sprites.front_default;
    var pokeweight = data.weight;
    var pokename = data.name;

    //applying to our HTML
    imgelement.src = pokeimg;
    imgelement.style.display = "block";

    nameelement.innerText=`Name: ${pokename}`;
    weightelement.innerText=`weight: ${pokeweight}`;

})

.catch((data)=>{                        //if any error in fetchin details catch block gets printed
    console.log("no pokemon found");
    nameelement.innerText="No pokemon found";

    imgelement.style.display ="none";           //if any error comes we need to remove the prev image and wieght also
    weightelement.innerText = "";

})

}

