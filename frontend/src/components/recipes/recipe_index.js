import React from 'react';
import { Link } from 'react-router-dom';
class RecipeIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchRecipes();
    }
    render() {
        
        if(this.props.recipes === undefined) return null;
        console.log(this.props)
        return (
            <div>
                <h1 className="recipe-index-title">All Recipes</h1>
                
                <div className="recipe-column-div">
                    {this.props.recipes.map((recipe,index) => (
                        <div key={index} className="recipe-box">
                            {(recipe.user_id) ? 
                                <Link to={`recipe/${recipe['_id']}`} className="recipe-box-title">
                                    <div className="recipe-title">
                                        {recipe.title}
                                    </div>
                                    <div>
                                        <img src={recipe.image}/>
                                    </div>
                                    
                                </Link>
                                :
                                <Link to={`recipe/${recipe.id}`} className="recipe-box-title">
                                    <div className="recipe-title">
                                        {recipe.title}
                                    </div>
                                    <div>
                                        <img src={recipe.image}/>
                                    </div>
                                </Link>
                            }
                            
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default RecipeIndex;