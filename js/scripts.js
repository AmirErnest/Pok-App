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

//looping through the array list of pokemons, printing out the name and height.
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + " - Wow, that’s big! " + "<br>");
  } else {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") " + "<br>");
  }
}
