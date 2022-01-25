const RecipeCard = ({title, ready, image}) => {
    console.log("EELLLOOO")
    return(
        <div className="card">
            <h1>{title}.....{ready}</h1>
            <img src={image}/>
        </div>
    )
}

export default RecipeCard