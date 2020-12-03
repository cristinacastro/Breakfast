'use strict'

//RESULTATS PER CATEGORIES

 //funció per rebre receptes filtrades de la categoria de bowls

async function getRecipes(){

    const section = document.getElementById("suggestions-expand")
    section.className = 'categories'

    const urlFetch = await fetch("https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6")

    const recipesJson = await urlFetch.json()

    const bowlsArr = recipesJson.results.filter(x=>x.id===647261 || x.id===1095752 || x.id===639131 || x.id===1095771  || x.id===663853 || x.id===637705)
    const smoothiesArr = recipesJson.results.filter(x=>x.id===1096176 || x.id===655786 || x.id===1096178  ||  x.id===650485 || x.id===645530 || x.id===660227)
    const cookedArr = recipesJson.results.filter(x=>x.id===1096257 || x.id===1096166 || x.id===1096262  || x.id===665734 || x.id===664280 || x.id===1096024)

        if(section.innerHTML === ""){
            const h2Tag = document.createElement("h2")
            section.appendChild(h2Tag)
            h2Tag.innerHTML="Some suggestions for you"
            h2Tag.className = "h2"
            const recipesDiv = document.createElement("div")
            recipesDiv.className = "recipes-container"
            section.appendChild(recipesDiv)
            section.className = 'recipes-container'

            recipesJson.results.forEach((recipe) => { //fem un map per filtrar el id de la recepta amb el de les meves arrays personalitzades
                bowlsArr.map(element => {
                    if(element.id === recipe.id){
                        const article = document.createElement('article');
                        article.innerHTML = ` 
                        <img src= "${recipe.image}">
                        <h4>${recipe.title}</h4>
                        <button class="recipe-general-info">See recipe</button>
                        `;
                        article.className = "recipe-general-info"
                        recipesDiv.appendChild(article);
                        console.log(recipesDiv)
                    }
                } )
                
            })

            recipesJson.results.forEach((recipe) => { 
                smoothiesArr.map(element => {
                    if(element.id === recipe.id){
                        const article = document.createElement('article');
                        article.innerHTML = ` 
                        <img src= "${recipe.image}">
                        <h4>${recipe.title}</h4>
                        <button class="recipe-general-info">See recipe</button>
                        `;
                        article.className = "recipe-category"
                        recipesDiv.appendChild(article);
                        console.log(recipesDiv)
                    }
                } )
                
            })

            recipesJson.results.forEach((recipe) => { 
                cookedArr.map(element => {
                    if(element.id === recipe.id){
                        const article = document.createElement('article');
                        article.innerHTML = ` 
                        <img src= "${recipe.image}">
                        <h4>${recipe.title}</h4>
                        <button class="recipe-general-info">See recipe</button>
                        `;
                        article.className = "recipe-category"
                        recipesDiv.appendChild(article);
                        console.log(recipesDiv)
                    }
                } )
                
            })

    
            } else {
                section.innerHTML="";
            }
    }



//botons per cada categoria. 

const bowlsButton = document.getElementById('input-button-bowls')
bowlsButton.addEventListener('click', getRecipes) 

const smoothiesButton = document.getElementById('input-button-smoothies')
smoothiesButton.addEventListener('click', getRecipes) 
 
const cookedButton = document.getElementById('input-button-cooked')
cookedButton.addEventListener('click', getRecipes) 

