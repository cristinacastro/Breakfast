
const recipesUrl = "https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&apiKey=326fca0e6fb94575ace156a7e9b4fcb6";
const recipesList = document.getElementById('mostra-content-api'); 
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
