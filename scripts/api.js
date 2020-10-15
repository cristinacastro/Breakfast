

const urlParams = new URLSearchParams(window.location.search); 
const buscadorInput = urlParams.get('search');

//RESULTATS PER BUSCADOR

//funció per agafar el valor introduit al buscador
const buscador = document.querySelector('#buscador-form') //aqui posem el id del form id
//console.log(buscador);
const btnId = document.getElementById('ingredient-search');

function loadDate (){
    let url="recipes.html?search="+encodeURIComponent(btnId.value)
    console.log(url, "holaa")
    window.location.href=url
  }

    if(buscador){

        buscador.addEventListener('submit', (event) => {
            event.preventDefault();
            loadDate();
            //getInputsByValue(buscadorInput);
        }); 
        

}

//funció per desplegar receptes en funció del valor introduit previament per l'usuari
function getInputsByValue(buscador) {

    fetch(`https://api.spoonacular.com/recipes/complexSearch?intolerances=gluten&type=breakfast&number=1000&apiKey=bea021b631584c58ab2ec7ead556f6f8&query=${buscador.toLowerCase()}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            const section = document.getElementById("recipes-list"); //"recipes-list" page recipes o "mostra-content-api" a linici
            section.className = "categories-displayed";
            section.innerHTML = "";
          
            var h3Tag = document.createElement("H3")                // Create a <h1> element
            var text = document.createTextNode(`These are some recipes with ${buscador}`);     // Create a text node
            h3Tag.appendChild(text);  
            section.appendChild(h3Tag);
            var hrTag= document.createElement("hr")
            section.appendChild(hrTag)

            const articleContainer = document.createElement('article');
            section.appendChild(articleContainer)
            articleContainer.className = "recipes-container"

            data.results.forEach((recipe) => {
                const div = document.createElement('div');
                div.className = "recipe-general-info";
                div.innerHTML = `
                    <div class = "recipe-general-info-list"><img src= "${recipe.image}"></div>
                    <h4>${recipe.title}</h4>
                    <button class="recipe-general-info">See recipe</button>
                `;
                articleContainer.appendChild(div);

            })
        })
       
     .catch((err) => {console.log(err)})
}

if (buscadorInput){
    getInputsByValue(buscadorInput);

}