"use strict";

const urlParams = new URLSearchParams(window.location.search);
const buscadorInput = urlParams.get("search");

//RESULTATS PER BUSCADOR

const buscador = document.querySelector("#buscador-form");
//console.log(buscador);
const btnId = document.getElementById("ingredient-search");

function loadDate() {
  let url = "recipes.html?search=" + encodeURIComponent(btnId.value);
  window.location.href = url;
}

if (buscador) {
  buscador.addEventListener("submit", (event) => {
    event.preventDefault();
    loadDate();
  });
}

function getInputsByValue(buscador) {
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?intolerances=gluten&type=breakfast&number=1000&apiKey=bea021b631584c58ab2ec7ead556f6f8&query=${buscador.toLowerCase()}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      const section = document.getElementById("recipes-list");
      section.className = "categories-displayed";
      section.innerHTML = "";

      var h3Tag = document.createElement("H3");
      var text = document.createTextNode(
        `These are some recipes with ${buscador}`
      );
      h3Tag.appendChild(text);
      section.appendChild(h3Tag);
      var hrTag = document.createElement("hr");
      section.appendChild(hrTag);

      const divContainer = document.createElement("div");
      section.appendChild(divContainer);
      divContainer.className = "recipes-container";

      data.results.forEach((recipe) => {
        const div = document.createElement("div");
        div.className = "recipe-general-info";
        div.innerHTML = `
                    <div class = "recipe-general-info-list"><img src= "${recipe.image}"></div>
                    <h4>${recipe.title}</h4>
                    <button class="recipe-general-info">SEE RECIPE</button>
                `;
                divContainer.appendChild(div);
      });
    })

    .catch((err) => {
      console.log(err);
    });
}

if (buscadorInput) {
  getInputsByValue(buscadorInput);
}
