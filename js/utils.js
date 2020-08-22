const createNode = (element) => {
  return document.createElement(element); // Create the type of element you pass in the parameters
};

const append = (parent, el) => {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
};

const load = (data) => {
  const recipeGallery = document.querySelector(".recipe-gallery");
  const recipeCard = document.querySelector(".recipe-card");
  const recipeTitle = document.querySelector(".recipe-title");
  const recipeUrl = document.querySelector(".recipe-image");
  data.forEach((element) => {
    //   console.log(element);
   let card = '';
   card += `
     <div class="col-12 col-sm-12 col-md-6 col-lg-4 my-5">
        <div class="card h-100 recipe-card">
            <img class="card-img-top img-fluid h-50 recipe-image" src="/assets/images/pizza.jpg" alt="Card image">
            <div class="card-body">
                <h4 class="card-title font-weight-bold recipe-title">${element.title}</h4>
                <p class="card-text recipe-description">${element.instructions}</p>
                
                <div class="card-text pb-2 star-icon">
                <a href=""><i class="first-set-icon small fas fa-star"></i></a>
                    <p class="second-set-icon d-inline small recipe-ratings">(${element.rate})</p>
                </div>
                <a href="/pizza.html" class="btn">View Recipe</a>
            </div>
            </div>
         </div>
     `;
     recipeGallery.innerHTML += card;
  });
};
 const formSubmit = () => {
  const recipeTitle = document.getElementById("title").value;
  console.log(recipeTitle);
    
    // return 
 }
 formSubmit();