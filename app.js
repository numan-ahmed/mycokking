fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayCatagories(data));


const displayCatagories = catagories =>{

    for (let i = 0; i < catagories.length; i++) {
        const catagory = catagories[i];
        console.log(catagory.strCategory);
        
    }


}


