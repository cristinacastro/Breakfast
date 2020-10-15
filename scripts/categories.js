
//RESULTATS PER CATEGORIES



 //funció per rebre receptes filtrades de la categoria de bowls

 
 async function getBowlsRecipes(){

    const section = document.getElementById("bowls")

    const urlFetch = await fetch("https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&number=100&apiKey=326fca0e6fb94575ace156a7e9b4fcb6")

        const recipesJson = await urlFetch.json()     
        
        const bowlsArr = recipesJson.results.filter(x=>x.id===647261 || x.id===1095752 || x.id===639131 || x.id===1095771  || x.id===663853 || x.id===637705)
  

        if( section.innerHTML === ""){
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
        console.log(cookedArr);    
        //return recipesJson
        
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


const divBowlsGen = document.getElementsByTagName("div")[5]
const divBowlsExpand = document.createElement("div")
divBowlsExpand.style.backgroundColor ="red"
divBowlsExpand.style.height= "200px"
divBowlsGen.appendChild(divBowlsExpand)
divBowlsExpand.style.display = "none"

const bowlsButton = document.getElementById('input-button-bowls')
bowlsButton.addEventListener('click', getBowlsRecipes) 
 

const divSmoothiesGen = document.getElementsByTagName("div")[8]
const divSmoothiesExpand = document.createElement("div")
divSmoothiesExpand.style.backgroundColor ="red"
divSmoothiesExpand.style.height= "200px"
divSmoothiesGen.appendChild(divSmoothiesExpand)
divSmoothiesExpand.style.display = "none"

const smoothiesButton = document.getElementById('input-button-smoothies')
smoothiesButton.addEventListener('click', getSmoothiesRecipes) 
 

const divCookedGen = document.getElementsByTagName("div")[11]
const divCookedExpand = document.createElement("div")
divCookedExpand.style.backgroundColor ="red"
divCookedExpand.style.height= "200px"
divCookedGen.appendChild(divCookedExpand)
divCookedExpand.style.display = "none"

const cookedButton = document.getElementById('input-button-cooked')

 cookedButton.addEventListener('click', getCookedRecipes) 
 
/* cookedButton.onclick = function (){
    if(divCookedExpand.style.display=== "none"){
        divCookedExpand.style.display="block"

    } else{
        divCookedExpand.style.display= "none"
    }
};

 
 */


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