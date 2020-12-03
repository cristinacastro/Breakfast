'use strict'


 async function getBowlsRecipes(){

    const section = document.getElementById("bowls")

    const urlFetch = await fetch("https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6")

        const recipesJson = await urlFetch.json()     
        const bowlsArr = recipesJson.results.filter(x=>x.id===647261 || x.id===1095752 || x.id===639131 || x.id===1095771  || x.id===663853 || x.id===637705)
  

            const bowlsDiv = document.createElement("div")
            section.appendChild(bowlsDiv)
            section.className = "recipe-container";

            bowlsArr.forEach((recipe) => { 
                        
                            const article = document.createElement('article');
                            article.className = "recipe-general-info";
                            article.innerHTML = ` 
                            <img src= "${recipe.image}">
                            <h4>${recipe.title}</h4>
                            <button class="recipe-general-info">SEE RECIPE</button>
                            `;
                            bowlsDiv.appendChild(article)
                        }
            )      
        }
        getBowlsRecipes()

     /*    if( section.innerHTML === ""){
            const h2Tag = document.createElement("h2")
            section.appendChild(h2Tag)
            h2Tag.innerHTML="Some bowls suggestions for you"
            h2Tag.style.fontSize="16px"
            const bowlsDiv = document.createElement("div")
            section.appendChild(bowlsDiv)

                recipesJson.results.forEach((recipe) => { //fem un map per filtrar el id de la recepta amb el de les meves arrays personalitzades
                    bowlsArr.map(element => {
                        if(element.id === recipe.id){
                            const article = document.createElement('article');
                            article.innerHTML = ` 
                            <img src= "${recipe.image}">
                            <h4>${recipe.title}</h4>
                            <button class="recipe-general-info">See recipe</button>
                            `;
                            bowlsDiv.appendChild(article);
                        }
                    } )
                    
                })
        
                } else {
                    section.innerHTML="";
                }
        }
 */

        
//funció per rebre receptes filtrades de la categoria de smoothies


async function getSmoothiesRecipes(){

    const section = document.getElementById("smoothies")

    const urlFetch = await fetch("https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6")

        const recipesJson = await urlFetch.json()    
        const smoothiesArr = recipesJson.results.filter(x=>x.id===1096176 || x.id===655786 || x.id===1096178  ||  x.id===650485 || x.id===645530 || x.id===660227)

        if( section.innerHTML === ""){
            const h2Tag = document.createElement("h2")
            section.appendChild(h2Tag)
            h2Tag.innerHTML="Some smoothies suggestions for you"
            h2Tag.style.fontSize="16px"
            const smoothiesDiv = document.createElement("div")
            section.appendChild(smoothiesDiv)
       
            recipesJson.results.forEach((recipe) => {
            smoothiesArr.map(element => {
                if(element.id === recipe.id){
                    const article = document.createElement('article');
                    article.innerHTML = `
                    <img src= "${recipe.image}">
                    <h4>${recipe.title}</h4>
                    <button class="recipe-general-info">See recipe</button>
                    `;
                    smoothiesDiv.appendChild(article);
                }
            } )
            
        })

        } else {
            section.innerHTML="";
        }
}

//funció per rebre receptes filtrades de la categoria de cooked


async function getCookedRecipes(){

    const section = document.getElementById("cooked")
   
   
    const urlFetch = await fetch("https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6")

        const recipesJson = await urlFetch.json()    
        const cookedArr = recipesJson.results.filter(x=>x.id===1096257 || x.id===1096166 || x.id===1096262  || x.id===665734 || x.id===664280 || x.id===1096024)
        
        if( section.innerHTML === ""){

            const h2Tag = document.createElement("h2")
            section.appendChild(h2Tag)
            h2Tag.innerHTML="Some cooked breakfast suggestions for you"
            h2Tag.style.fontSize="16px"
            const cookedDiv = document.createElement("div")
            section.appendChild(cookedDiv)   
         
            
            recipesJson.results.forEach((recipe) => {
                cookedArr.map(element => {
                    if(element.id === recipe.id){
                        const article = document.createElement('article');
                        article.innerHTML = ` 
                        <img src= "${recipe.image}">
                        <h4>${recipe.title}</h4>
                        <button class="recipe-general-info">See recipe</button>
                        `;
                        cookedDiv.appendChild(article);
                    }
                } )
                
            })
        } else {
            section.innerHTML="";
        }
    }

//console.log(getCookedRecipes()) 

//botons per cada categoria. 
/* 
const bowlsButton = document.getElementById('input-button-bowls')
bowlsButton.addEventListener('click', getBowlsRecipes)  */
/* 
const smoothiesButton = document.getElementById('input-button-smoothies')
smoothiesButton.addEventListener('click', getSmoothiesRecipes) 
 
const cookedButton = document.getElementById('input-button-cooked')
cookedButton.addEventListener('click', getCookedRecipes)  */
