import axios from 'axios';

const keys = {
    appId: '5eeeeesdfsfdf',
    appKey: 'asdf9d79a8ds7fadsf7ad'
};

const getRecipes = async (from, to, query) => {
    const {data} = await axios.get(`http://api.edamam.com/search?app_id=${appId}&app_key=${appKey}&from=${from}&to=${to}&q=${query}`);
    return data.hits.map(({recipe: {recipe, url, image, ingredientLines, calories, totalTime}}) => ({ 
        label, 
        url, 
        image, 
        ingredientLines,
        calories,
        totalTime
    }));
}

export {
    getRecipes,
    getRecipe
};