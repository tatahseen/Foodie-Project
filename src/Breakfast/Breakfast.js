const Breakfast= () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=breakfast&number=12&apiKey=${process.env.REACT_APP_API_KEY}` 
    fetch(url)
    .then(res => res.json())
    .then(res => {
        const data = res;

        for(let i = 0; i < data.results.length; ++i){
             console.log(data.results[i].id)
        }
        // console.log(data.results[0].id)
        // fetch()
    })
    .then(res => {
    })
    return ( <div>THIS IS BREAKFAST</div>);
}

export default Breakfast;