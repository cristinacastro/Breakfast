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



