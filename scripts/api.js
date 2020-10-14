

//RESULTATS PER BUSCADOR
//funció per agafar el valor introduit al buscador
 const buscador = document.querySelector('#buscador-form') //aqui posem el id del form id
console.log(buscador);

    buscador.addEventListener('submit', (event) => {
    event.preventDefault();
    const buscador = document.querySelector('#ingredient-search').value; //aqui posem el id del input id
    getInputsByValue(buscador);
    console.log("dgf");
}); 


//funció per desplegar receptes en funció del valor introduit previament per l'usuari
function getInputsByValue(buscador) {

    /* redirect = () => {
        setTimeout ( () => location.assign('recipes.html'), 2000);
    } */
    //window.location.href = 'recipes.html';
    console.log("hola")
    fetch(`https://api.spoonacular.com/recipes/complexSearch?intolerances=gluten&type=breakfast&number=10&apiKey=88dc5764dc764ea3b6b5c87bf1a92ef0&query=${buscador.toLowerCase()}`)
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
                <h2>${recipe.title}</h2>
                ${recipe.image}
                <a href=#recipe-product.html"> <button class="recipe-category-btn >See recipe</button></a>
                `;
                  section.appendChild(article);
            })
        })
       
     .catch((err) => {})
}



//RESULTATS PER CATEGORIES

function getRecipes(categorý) {
    const recipesSuggestions = document.querySelector('.recipes-suggestions')//aqui agafem el lloc on v
    const section = document.querySelector(".recipes-list");

    fetch("https://api.spoonacular.com/recipes/complexSearch?intolerances=gluten&type=breakfast&number=200&apiKey=88dc5764dc764ea3b6b5c87bf1a92ef0")
        .then((response) => {

            return response.json()
        })

        const bowlsArr = recipesJson.results.filter(x=>x.id===647261 || x.id===1095752 || x.id===639131 || x.id===1095771  || x.id===663853 || x.id===637705)
        const smoothiesArr = recipesJson.results.filter(x=>x.id===638825 || x.id===1096176 || x.id===655786 || x.id===1096178  || x.id===641411 || x.id===650485 || x.id===645530 || x.id===660227)
        const cookedArr = recipesJson.results.filter(x=>x.id===643514 || x.id===1096257 || x.id===1096166 || x.id===1096262  || x.id===665734 || x.id===664280 || x.id===1096024)
            
        
            .then((data) => {
                console.log(data);
                 section.innerHTML = "";
                 const bowlsDiv = document.createElement("div")
                 section.appendChild(bowlsDiv)
                 const smoothiesDiv = document.createElement("div")
                 section.appendChild(smoothiesDiv)
                 const cookedDiv = document.createElement("div")
                 section.appendChild(cookedDiv)

                 data.items.forEach((recipe) => { //fem un map per filtrar el id de la recepta amb el de les meves arrays personalitzades
                    bowlsArr.map(element => {
                        if(element.id === recipe.id){
                            const article = document.createElement('article');
                         article.innerHTML = ` 
                        <h2>${recipe.title}</h2>
                        ${image}
                        <a href=#recipe-product.html"> <button class="recipe-category-btn >See recipe</button></a>
                        `;
                            bowlsDiv.appendChild(article);
                        }
                    } )

                    smoothiesArr.map(element => {
                        if(element.id === recipe.id){
                            const article = document.createElement('article');
                         article.innerHTML = ` 
                        <h2>${recipe.title}</h2>
                        ${image}
                        <a href=#recipe-product.html"> <button class="recipe-category-btn >See recipe</button></a>
                        `;
                            smoothiesDiv.appendChild(article);
                        }
                    })

                    cookedArr.map(element => {
                        if(element.id === recipe.id){
                            const article = document.createElement('article');
                         article.innerHTML = ` 
                        <h2>${recipe.title}</h2>
                        ${image}
                        <a href=#recipe-product.html"> <button class="recipe-category-btn >See recipe</button></a>
                        `;
                            cookedDiv.appendChild(article);
                        }
                    })


                })
        })
       
        .catch((err) => {})
}


//botons per cada categoria. Li passarem la funció de getRecipes perquè ens doni els resultats de cada categoria (seran a la mateixa pàgina la anomenada recipes.html)
const bowlsButton = document.querySelector('#bowls')
bowlsButton.addEventListener('click', () => getRecipes("bowls"));

const smoothiesButton = document.querySelector('#smoothies')
smoothiesButton.addEventListener('click', () => getRecipes("smoothies"));

const cookedButton = document.querySelector('#cooked')
cookedButton.addEventListener('click', () => getRecipes("cooked"));


//RESULTAT RECEPTA DETALLADA
function expandRecipe (id){
    const extendedInfo = document.querySelector('#extended-info')
    const section = document.querySelector(".recipe-extended-info");

    window.location.href = 'recipe-product.html';
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
