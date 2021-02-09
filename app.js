
const searchMeals = () =>{
    const searchText = document.getElementById('searchField').Value;
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php/${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.categories));
}

const displayMeals = meals =>{
    const meal_container  = document.getElementById('mealContainer');
   meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.className ='singleMeal';
    // const mealImg = document.createElement('img');
    // mealImg.src= meal.strCategoryThumb;
    mealDiv.innerHTML =`
    <img src="${meal.strCategoryThumb}"/>
    <h3>${meal.strCategory}</h3>
    <p> population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food</p>
    <button onclick="getIngredientsDisplay('${meal.strCategoryThumb}', '${meal.strCategory}')" class="styleBtn ">Details</button>`
    meal_container.appendChild(mealDiv);
    // meal_container.appendChild(mealImg);

   }) 

}

const getIngredientsDisplay = (image,strCategory)=>{
    // console.log(strCategory,image);
    const url =`https://www.themealdb.com/images/ingredients/Lime.png `
    console.log(url);
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displayMeals(data.categories));
//     const gredients_div = document.getElementById('gredientsdiv');

//     const gradientsInfo =`
//     <img src="${meal.strCategoryThumb}"/>
//     <h3>${meal.strCategory}</h3> 
//     `
//     gredients_div.innerHTML= gradientsInfo;
// }



// // const displayCountryDetails = name =>{
// //     const url = `https://restcountries.eu/rest/v2/name/${name}`
// //     fetch(url)
// //     .then(res => res.json())
// //     .then(data => renderCountryInfo(data[0]));

// }
// const  renderCountryInfo = country =>{
// const countryDiv = document.getElementById('countryDetail');
// countryDiv.innerHTML =`
//     <h1>${country.name}</h1>
//     <P>${country.population}</p>
//     <p>${country.area}</p>
//     <img src="${country.flag}">

// `
// }
