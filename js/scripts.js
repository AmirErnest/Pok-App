//array to hold pokemonRepository list within IIEF function
//whatever will be returned from it will be the content of the pokemon repository
// only what is returned  at the end of the IIEF, is what can be accessed when pokemonRepo is mentioned.

var pokemonRepository = (function() {
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

    function getAll() {
      return pokemonList;
    }

    function add(item) {
      pokemonList.push(item);
    }

// the return object has reference to the local functions in the IIEF
    return {
      getAll: getAll,
      add: add
    };
}) ();

//looping through the array list of pokemons using foreach(), printing out the name and height.
pokemonRepository.getAll().forEach((item) => {
  document.write( "<p> Name: </p>" + item.name + " " +
                  "<p> height: </p>" + item.height + " " +
                  "<p> Type: </p>" + item.type + "<br>");
});
