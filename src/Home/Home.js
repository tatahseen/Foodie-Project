import { useState, useEffect } from "react"
import RecipeCard from '../RecipeCard/RecipeCard'

const Home = () => {
    const [recipeData, setRecipeData] = useState();
    const getData = () => {
        const url = `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.REACT_APP_API_KEY}` 
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

export default Home;