import { Component } from "react";
import RecipeService from "../service/recepie-service";

class Recipe extends Component {
    constructor() {
        super();

        this.state = {
            recipe: {
                name: '',
                ingredients: [],
                process: ''
            }
        }
    }

    componentDidMount = () => {
        var recipe = RecipeService.getRecipe();
        this.setState({recipe});
    }

    render = () => {
        return (
            <div class="card">
                <div className="card-header">
                    <div className="card-header-title"><h2>{this.state.recipe.name}</h2></div>
                </div>
                <div className="card-content">
                    <div className="columns">
                        <div className="panel column is-one-quarter">
                            <div className="panel-heading">Zutaten</div>
                            {this.state.recipe.ingredients.map((ingredient)=>{
                                return <div className="panel-block">{ingredient}</div>
                            })}
                        </div>
                    </div>

                    <h3>Zubereitung</h3>
                    <p>
                        {this.state.recipe.process}
                    </p>
                </div>
            </div>
        )
    }
}

export default Recipe;