import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import GetRecipeInfo from "./GetRecipeInfo";

const GetRecipeID= (props) => { 
    const { type } = useParams();
    console.log(window.location.href.indexOf('lunch') > 0);
    const [recipeID, setRecipeID] = useState();
    console.log(props)

    useEffect(() => {
        const url = `https://api.spoonacular.com/recipes/complexSearch?type=breakfast&number=12&apiKey=${process.env.REACT_APP_API_KEY}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res.results)
            const id = res.results.map(recipe => recipe.id)
            setRecipeID(id);
        })
    }, [])

    return ( 
        <div>
            {recipeID ? recipeID.map((recipe) => {
                return <GetRecipeInfo key={recipe} id={recipe}></GetRecipeInfo>
            }):console.log("NO DATA")}
        </div>);
}  

export default GetRecipeID;