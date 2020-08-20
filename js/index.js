console.log('Hello There: this is working');
document.querySelector('.add').addEventListener('click',  function (event) {
    event.preventDefault();
      createRecipe();  
    console.log('Create new recipes');
});
document.querySelector('.get').addEventListener('click',  function (event) {
    event.preventDefault();
     getAllRecipes(); 
    console.log('Retrieve all recipes');
});

const createRecipe = async () => {
    const url = 'http://localhost:3600/api/recipes'
    let body = {
        title: "Pizza manga",
        ingredients: `
        1 1/2 cups (355 ml) warm water (105°F-115°F)
        1 package (2 1/4 teaspoons) of active dry yeast
        3 3/4 cups (490 g) bread flour`,
        instructions: `
        Proof the yeast:
        After 5 minutes stir if the yeast hasn't dissolved completely. The yeast should begin to foam or bloom, indicating that the yeast is still active and alive. After 5 minutes stir if the yeast hasn't dissolved completely. The yeast should begin to foam or bloom, indicating that the yeast is still active and alive.
        `,
        time: 30,
        rate: 5
    }
    body = JSON.stringify(body)
    const params = {
        headers: { 
            "content-type": "application/json; charset=UTF-8"
        },
        body,
        method: "POST"
    }
    return await fetch(url, params).then( data => data.json());
};

const getAllRecipes = async () => {
    const url = 'http://localhost:3600/api/recipes'
    
    const params = {
        headers: { 
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }
    const recipes = await fetch(url, params).then( data => data.json())
    // console.log(recipes.data);
    load(recipes.data);
    return recipes.data;
}


const getOneRecipes = async (recipeId) => {
    const url = `http://localhost:3600/api/recipes/${recipeId}`;
    
    const params = {
        headers: { 
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }

    const recipes = await fetch(url, params).then( data => data.json())
    console.log(recipes.data);
    return recipes.data;
}
