
working example:
const recipesUrl = "https://api.spoonacular.com/recipes/complexSearch?intolerances=gluten&type=breakfast&number=10&apiKey=88dc5764dc764ea3b6b5c87bf1a92ef0";
const recipesList = document.getElementById('mostra-content-api'); //com ho faig si el div està a una altra pàgina i el botó a una altra diferent?
const btn = document.getElementById('bowls-category-btn');
console.log(btn);

async function getRecipes(url){
    const recipesResponse = await fetch(recipesUrl);
    const recipesJSON = await recipesResponse.json();
    console.log(recipesJSON);

    return {...recipesJSON} 
}

function generateHTML(data) {
    data.results.map(recipe => {
        const section = document.createElement('section');
        recipesList.appendChild(section);
        const image = recipe.image ? `<img src='${recipe.image}'>` : '';
        section.innerHTML = `
        <h2>${recipe.title}</h2>
        ${image}
        <p>${recipe.summary}</p>
        `
    })
}


btn.addEventListener('click', async (event) => {
    event.target.textContent = "Loading...";
    console.log("Hola");
    const recipesJSON = await getRecipes(recipesUrl);
    console.log(recipesJSON);
    generateHTML(recipesJSON);
    event.target.remove()
});





    //Si l'usuari fa la busqueda per ingredient farem aquesta crida a lAPI, sino farem l'altre
  /*   var ingredientInput = document.querySelector('');//arreglar
    if (ingredientInput) {
        getInputsByValue(buscador)
    } else {
        getRecipes(url)
    } */




//busqueda per ingredient , tag query
//const recipeByIngredientUrl = "https://api.spoonacular.com/recipes/complexSearch?query=blueberries&type=breakfast&intolerances=gluten&apiKey=27037c15739e4f6c8111110f219e058b";
//busqueda general ja amb els tags ajustats a les receptes de la app
const recipesUrl = "https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&apiKey=27037c15739e4f6c8111110f219e058b";
//busqueda per id per formar nous objectes/arrays amb les receptes concretes de cada catgoria
//const recipeByIdUrl = "https://api.spoonacular.com/recipes/850397/information?apiKey=27037c15739e4f6c8111110f219e058b&ingredientWidget.json";

/* btn id = "bowls-category-btn"  botón para ir a la pág recetas y si es posible que el usuario aparezca en la altura de categoria pertinente
btn id = "smoothies-category-btn"
btn id = "cooked-category-btn" */

//necesito hacer un nuevo array/objecto con estos id para desplegarlos en la pág recipes


// filter per grups de categories:
//console.log(recipesJson.results.filter(x=>x.id===663845 || x.id===660227))
/* const bowlsArr = recipesJson.results.filter(x=>x.id===647261 || x.id===1095752 || x.id===639131 || x.id===1095771  || x.id===663853 || x.id===637705)

const smoothiesArr = recipesJson.results.filter(x=>x.id===638825 || x.id===1096176 || x.id===655786 || x.id===1096178  || x.id===641411 || x.id===650485 || x.id===645530 || x.id===660227)

const cookedArr = recipesJson.results.filter(x=>x.id===643514 || x.id===1096257 || x.id===1096166 || x.id===1096262  || x.id===665734 || x.id===664280 || x.id===1096024) */




//div id = "recipe-general-info-list" lugar para mostrar info de todas las recetas de x categoría en la pág recipes
           /*      <div class = "recipe-general-info" id="recipe-general-info-list">
                    <div>
                        <img src="img/smoothies_category.jpg" alt="">
                    </div>
                    <h4>Recipe Name</h4>
                    <button type="button" id="recipe-general-info-btn">See recipe</button>
                </div>
 */
//btn id = "recipe-general-info-btn" para clicar e ir a la explicación detallada de x receta en la pag recipe-product
