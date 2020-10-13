//busqueda per ingredient , tag query
const recipeByIngredientUrl = "https://api.spoonacular.com/recipes/complexSearch?query=blueberries&type=breakfast&intolerances=gluten&apiKey=27037c15739e4f6c8111110f219e058b";
//busqueda general ja amb els tags ajustats a les receptes de la app
const recipesUrl = "https://api.spoonacular.com/recipes/complexSearch?type=breakfast&intolerances=gluten&apiKey=27037c15739e4f6c8111110f219e058b";
//busqueda per id per formar nous objectes/arrays amb les receptes concretes de cada catgoria
const recipeByIdUrl = "https://api.spoonacular.com/recipes/850397/information?apiKey=27037c15739e4f6c8111110f219e058b&ingredientWidget.json";

/* btn id = "bowls-category-btn"  botón para ir a la pág recetas y si es posible que el usuario aparezca en la altura de categoria pertinente
btn id = "smoothies-category-btn"
btn id = "cooked-category-btn" */

//necesito hacer un nuevo array/objecto con estos id para desplegarlos en la pág recipes
//id bowls:
//850397, 550998, 519397, 763212, 607078, 495299, 550998, 216701, 791717
//id smoothies
//812267, 729431, 626324, 495555, 489762, 625796, 1145916
//id cooked
//688251, 492156, 985144, 650239, 504538, 524108, 822334



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
