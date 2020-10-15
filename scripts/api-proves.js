
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





    


    //SUBFUNCIONS PER GETRECIPES EN UNA MATEIXA FUNCIO


    function getRecipes() {
        const section = document.getElementById('mostra-content-api')//aqui agafem el lloc on volem desplegar la info
    
        fetch("https://api.spoonacular.com/recipes/complexSearch?intolerances=gluten&type=breakfast&number=200&apiKey=27037c15739e4f6c8111110f219e058b")
    
        .then((response) => {
    
            const recipesJson = response.json()    
            
        
    
            const bowlsArr = recipesJson.results.filter(x=>x.id===647261 || x.id===1095752 || x.id===639131 || x.id===1095771  || x.id===663853 || x.id===637705)
            const smoothiesArr = recipesJson.results.filter(x=>x.id===638825 || x.id===1096176 || x.id===655786 || x.id===1096178  || x.id===641411 || x.id===650485 || x.id===645530 || x.id===660227)
            const cookedArr = recipesJson.results.filter(x=>x.id===643514 || x.id===1096257 || x.id===1096166 || x.id===1096262  || x.id===665734 || x.id===664280 || x.id===1096024)
                
            return recipesJson
    
            })
        
                .then((data) => {
                    console.log(data);
                     //section.innerHTML = "";
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
    
    
    //botons per cada categoria. 
    
    
    const divBowlsGen = document.getElementsByTagName("div")[5]
    const divBowlsExpand = document.createElement("div")
    divBowlsExpand.style.backgroundColor ="red"
    divBowlsExpand.style.height= "200px"
    divBowlsGen.appendChild(divBowlsExpand)
    divBowlsExpand.style.display = "none"
    
    const bowlsButton = document.getElementById('input-button-bowls')
    
    bowlsButton.onclick = function (){
        if(divBowlsExpand.style.display=== "none"){
            divBowlsExpand.style.display="block"
                 
    
        } else{
            divBowlsExpand.style.display= "none"
        }
    };
    
     
    const divSmoothiesGen = document.getElementsByTagName("div")[8]
    const divSmoothiesExpand = document.createElement("div")
    divSmoothiesExpand.style.backgroundColor ="red"
    divSmoothiesExpand.style.height= "200px"
    divSmoothiesGen.appendChild(divSmoothiesExpand)
    divSmoothiesExpand.style.display = "none"
    
    const smoothiesButton = document.getElementById('input-button-smoothies')
    
    smoothiesButton.onclick = function (){
        if(divSmoothiesExpand.style.display=== "none"){
            divSmoothiesExpand.style.display="block"
            
        } else{
            divSmoothiesExpand.style.display= "none"
        }
    };
    
     
    const divCookedGen = document.getElementsByTagName("div")[11]
    const divCookedExpand = document.createElement("div")
    divCookedExpand.style.backgroundColor ="red"
    divCookedExpand.style.height= "200px"
    divCookedGen.appendChild(divCookedExpand)
    divCookedExpand.style.display = "none"
    
    const cookedButton = document.getElementById('input-button-cooked')
    
    cookedButton.onclick = function (){
        if(divCookedExpand.style.display=== "none"){
            divCookedExpand.style.display="block"
            divCookedExpand.innerHTML=cookedDiv.innerHTML
    
        } else{
            divCookedExpand.style.display= "none"
        }
    };
    