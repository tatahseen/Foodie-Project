import { useState, useEffect } from "react"
import RecipeCard from "../RecipeCard/RecipeCard";

const Recipes = () => {
    const [recipeData, setRecipeData] = useState();
    const getData = () => {
        let foodType;
        if(window.location.href.indexOf('breakfast') > 0){
            foodType = 'breakfast';
        }
        else if(window.location.href.indexOf('lunch') > 0){
            foodType = 'lunch';
        }
        else if(window.location.href.indexOf('dinner') > 0) {
            foodType = 'dinner';
        }
        
        const url = `https://api.spoonacular.com/recipes/random?number=12&tags=${foodType}&apiKey=${process.env.REACT_APP_API_KEY}` 
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setRecipeData(res)
        })
    }


    useEffect(() => {
        getData();
    }, [])

    return ( 
    <div>
        {recipeData ?   recipeData.recipes.map((recipe) => {
            if(recipe.readyInMinutes >= 0 && recipe.hasOwnProperty('image'))
                return(<RecipeCard key={recipe.id} title={recipe.title} ready={recipe.readyInMinutes} image={recipe.image}/>)
            }):console.log("NO DATA")}
    </div>);
}

export default Recipes;