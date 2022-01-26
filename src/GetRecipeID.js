import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import GetRecipeInfo from "./GetRecipeInfo";

const GetRecipeID= () => { 
    const { type } = useParams();
    console.log(window.location.href.indexOf('breakfast') > 0);
    const [recipeID, setRecipeID] = useState();

    useEffect(() => {
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

        const url = `https://api.spoonacular.com/recipes/complexSearch?type=${foodType}&number=12&apiKey=${process.env.REACT_APP_API_KEY}`
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