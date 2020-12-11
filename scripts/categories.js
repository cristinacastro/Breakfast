"use strict";

async function getBowlsRecipes() {
  const section = document.getElementById("bowls");

  const urlFetch = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6"
  );

  const recipesJson = await urlFetch.json();
  const bowlsArr = recipesJson.results.filter(
    (x) =>
      x.id === 647261 ||
      x.id === 1095752 ||
      x.id === 639131 ||
      x.id === 1095771 ||
      x.id === 663853 ||
      x.id === 637705
  );

  const bowlsDiv = document.createElement("div");
  section.appendChild(bowlsDiv);
  section.className = "category-container";
  bowlsDiv.className = "each-category-recipe";

  bowlsArr.forEach((recipe) => {
    const article = document.createElement("article");
    article.className = "info-category-recipe";
    article.innerHTML = ` 
                            <img src= "${recipe.image}">
                            <h4>${recipe.title}</h4>
                            <button class="recipe-general-info">SEE RECIPE</button>
                            `;
    bowlsDiv.appendChild(article);
  });
}
getBowlsRecipes();

async function getSmoothiesRecipes() {
  const section = document.getElementById("smoothies");

  const urlFetch = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6"
  );

  const recipesJson = await urlFetch.json();
  const smoothiesArr = recipesJson.results.filter(
    (x) =>
      x.id === 1096176 ||
      x.id === 655786 ||
      x.id === 1096178 ||
      x.id === 650485 ||
      x.id === 645530 ||
      x.id === 660227
  );

    const smoothiesDiv = document.createElement("div");
    section.appendChild(smoothiesDiv);
    section.className = "category-container";
    smoothiesDiv.className = "each-category-recipe";


    smoothiesDiv.forEach((recipe) => {
          const article = document.createElement("article");
          article.className = "info-category-recipe";
          article.innerHTML = `
                    <img src= "${recipe.image}">
                    <h4>${recipe.title}</h4>
                    <button class="recipe-general-info">SEE RECIPE</button>
                    `;
          smoothiesDiv.appendChild(article);
    });
}
getSmoothiesRecipes() 


async function getCookedRecipes() {
  const section = document.getElementById("cooked");

  const urlFetch = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6"
  );

  const recipesJson = await urlFetch.json();
  const cookedArr = recipesJson.results.filter(
    (x) =>
      x.id === 1096257 ||
      x.id === 1096166 ||
      x.id === 1096262 ||
      x.id === 665734 ||
      x.id === 664280 ||
      x.id === 1096024
  );

    const cookedDiv = document.createElement("div");
    section.appendChild(cookedDiv);
    section.className = "category-container";
    cookedDiv.className = "each-category-recipe";

    cookedDiv.forEach((recipe) => {
          const article = document.createElement("article");
          article.className = "info-category-recipe";
          article.innerHTML = ` 
                        <img src= "${recipe.image}">
                        <h4>${recipe.title}</h4>
                        <button class="recipe-general-info">SEE RECIPE</button>
                        `;
          cookedDiv.appendChild(article);
      });
}
getCookedRecipes()
