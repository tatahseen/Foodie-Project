import { useState, useEffect } from "react"
import RecipeCard from '../RecipeCard/RecipeCard'

const Breakfast= () => { 
    const [recipeID, setRecipeID] = useState();
    const [recipeData, setRecipeData] = useState();
    let data;
    const getData = () => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?type=breakfast&number=12&apiKey=${process.env.REACT_APP_API_KEY}`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res.results)
            const id = res.results.map(recipe => recipe.id)
            setRecipeID(id);

            const food = id.map((recipeID) => {
                let url = `https://api.spoonacular.com/recipes/${recipeID}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
                fetch(url)
                    .then(res1 => res1.json())
                    .then(res1 => {
                        console.log(res1)
                    return data;
                 })
                 setRecipeData(food);
            })
           
            

            //setRecipeID
            // Get individual recipe ID by looping through recipe array
            // For each recipe, fetch the data for that recipe
            // Make card
        })
    }


    useEffect(() => {
        getData();
    }, [])

    return ( 
        <div>
            {recipeData ?   console.log(recipeData):console.log("NO DATA")}
        </div>);
}

export default Breakfast;