const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

pokemonList.addEventListener("click", (event) => {
  const clickedPokemon = event.target.closest(".pokemon");
  console.log(clickedPokemon);
  if (clickedPokemon) {
    // Obtenha as informações do Pokémon clicado
    const number = clickedPokemon.querySelector(".number").textContent;
    const name = clickedPokemon.querySelector(".name").textContent;
    const types = clickedPokemon.querySelector(".types").innerHTML;
    const photo = clickedPokemon.querySelector("img").src;

    const pokemonType = clickedPokemon.classList[1];

    // Atualize o conteúdo do modal com as informações do Pokémon clicado
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
        <div class="pokemon ${pokemonType}">
          <span class="close">&times;</span>
          <p class="number">${number}</p>
          <h2 class="name">${name}</h2>
          <div class="detail type">${types}</div>
          <img src="${photo}" alt="${name}">
        </div>
    `;

    // Exiba o modal
    const modal = document.getElementById("pokemonModal");
    modal.style.display = "block";

    // Adicione um ouvinte de evento de clique ao botão de fechar do modal
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});

