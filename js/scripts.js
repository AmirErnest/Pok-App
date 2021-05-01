//array to hold pokemonRepository list within IIEF function
//whatever will be returned from it will be the content of the pokemon repository
// only what is returned  at the end of the IIEF, is what can be accessed when pokemonRepo is mentioned.

let pokemonRepository = (function () {
  let repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"],
    },
    {
      name: "Squirtle",
      height: 1,
      types: ["water"],
    },
  ];

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon && "height" in pokemon && "types" in pokemon) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    //add event listener when button is clicked 
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }
//show details of a pokemon in the console.
  function showDetails(pokemon){
    console.log(pokemon);
  }

// the return object has reference to the local functions in the IIEF
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails
};
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

//looping through the array list of pokemons using foreach().
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
