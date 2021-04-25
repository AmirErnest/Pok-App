//array to hold pokemon list
let pokemonList = [
                    {
                      name: "Charmeleon",
                      height: 1.1,
                      type: ["fire"]
                    },
                    {
                      name: "Raichu",
                      height: 0.8,
                      type: ["electric"]
                    },
                    {
                      name: "Rhyhorn",
                      height: 1,
                      type: ["rock", "ground"]
                    }
                 ];

//looping through the array list of pokemons using foreach(), printing out the name and height.
pokemonList.forEach(function(pokemon){
    document.write("<p> Name: </p>" + pokemon.name + " " +
                  " <p> height: </p>" + pokemon.height + " " +
                  " <p> Type: </p>" + pokemon.type + "<br>");
});
