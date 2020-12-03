

/* //RESULTAT RECEPTA DETALLADA
function expandRecipe (id){
    const extendedInfo = document.querySelector('#extended-info')
    const section = document.querySelector(".recipe-extended-info");

    //window.location.href = 'recipe-product.html';
    console.log("jjkn")
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=88dc5764dc764ea3b6b5c87bf1a92ef0`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            section.innerHTML = "";
            data.items.forEach((recipe) => {
                const section = document.getElementById("recipes-list");
                const article = document.createElement('article');
                article.innerHTML = `
                ${recipe.image}
                <h2>${recipe.title}</h2>
                <h4>${recipe.readyInMinutes}</h4>
                <h4>${recipe.servings}</h4>
                <p>${recipe.summary}</p>
                `;
                  section.appendChild(article);
            })
        })
       
     .catch((err) => {})
}
 */