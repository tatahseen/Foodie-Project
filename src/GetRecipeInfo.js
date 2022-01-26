import { useState, useEffect } from "react"
import RecipeCard from "./RecipeCard/RecipeCard";

const GetRecipeInfo = (props) => {
    const [recipeData, setRecipeData] = useState();
    console.log(props)



    useEffect(() => {
       
            let url = `https://api.spoonacular.com/recipes/${props.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
                fetch(url)
                    .then(res1 => res1.json())
                    .then(res1 => {
                    setRecipeData(res1)

                 })

     
    }, [])
  



    return ( 
        <div>
        
            {recipeData && recipeData.readyInMinutes>=0 && recipeData.hasOwnProperty('image') ?  
                <RecipeCard key={recipeData.id} title={recipeData.title} ready={recipeData.readyInMinutes} image={recipeData.image}/> 
                :console.log("NO DATA")}
        </div>);
}

export default GetRecipeInfo