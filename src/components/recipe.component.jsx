import { Component } from "react";
import './recipe.component.css';
import RecipeService from "../service/recipe-service";

class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: {
                name: '',
                ingredients: [],
                process: ''
            }
        }
    }

    componentDidMount = () => {
        var recipe = RecipeService.getRecipe(this.props.recipeId);
        this.setState({ recipe });
    }

    render = () => {
        return (
            <div className="recipe">
                <h2>{this.state.recipe.name}</h2>
                <div className="ingredients">

                    <div className="siimple-list">
                        <div className="siimple-list-item">
                            <div className="siimple-list-title">Zutaten</div>
                        </div>
                        {this.state.recipe.ingredients.map((ingredient) => {
                            return <div className="siimple-list-item">{ingredient}</div>;
                        })}
                    </div>
                </div>
                <div className="process">
                    <h3>Zubereitung</h3>
                    <div>
                        {this.state.recipe.process}
                    </div>
                </div><br/>
                <div className="siimple-btn siimple-btn--primary" onClick={this.props.gotoList}>Zurück zurÜbersicht</div>
            </div>
        )
    }
}

export default Recipe;