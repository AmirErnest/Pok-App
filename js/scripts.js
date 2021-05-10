//array to hold pokemonRepository list within IIEF function
//whatever will be returned from it will be the content of the pokemon repository
// only what is returned  at the end of the IIEF, is what can be accessed when pokemonRepo is mentioned.

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (typeof pokemon === "object" &&
     "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
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

// loading list of all pokemons after fetching from an API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  //global variable
  let modalContainer = document.querySelector('#modal-container');

  // modal function
  function showModal(item) {
    //clear all modal content
    modalContainer.innerHTML = '';

    //modal div
    let modal = document.createElement('div');
    modal.classList.add('modal');

    //close button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    //Pokemon name
    let nameElement = document.createElement('h1');
    nameElement.innerText = item.name;

    //pokemon types
    //let pokTypes = document.createElement('h2');
    //pokTypes.innerText = "Type(s): " + item.types;

    //Pokemon height
    let heightElement = document.createElement('h3');
    heightElement.innerText = "height: " + item.height;

    //pokemon image
    let pokImage = document.createElement('img');
    pokImage.src = item.imageUrl;

    //append all elements created to the modal
    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    //modal.appendChild(pokTypes);
    modal.appendChild(heightElement);
    modal.appendChild(pokImage);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  //The Esc-key scenario, then, can be implemented this way, only hiding the modal if it’s actually visible
  window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
    }
  });
  //close the modal when mouse is pressed outside the modal
  modalContainer.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
    }
  });

// the return object has reference to the local functions in the IIEF
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
};
})();

pokemonRepository.loadList().then(function() {
  //looping through the array list of pokemons using foreach().
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
