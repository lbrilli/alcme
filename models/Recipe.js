const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const RecipeSchema = new Schema ({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    readyInMinutes: Number,
    servings: Number,

    image: {
        type: String
    },
    usedIngredientCount: {
        type: Number
    },
    usedIngredients: {
        type: Array
    },
    instructions: {
        type: String
    },
    cuisines: Array,
    
});
  
module.exports = Recipe = mongoose.model('recipe', RecipeSchema);