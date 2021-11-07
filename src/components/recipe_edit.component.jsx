import { Component } from "react";
import recipeService from "../service/recipe-service";

class RecipeEdit extends Component {
    ViewState = { EDIT: 1, NEW: 2 };

    constructor(props) {
        super(props);

        this.state = {
            recipe: {
                id: -1,
                name: "",
                ingredientsTxt: '',
                process: ''
            }
        }
    }

    setName(name) {
        this.setState({
            recipe: {
                id: this.state.recipe.id,
                name,
                process: this.state.recipe.process,
                ingredientsTxt: this.state.recipe.ingredientsTxt
            }
        });
        //console.log("name changed: " + name);
    }

    setIngredients(ingredientsTxt) {
        this.setState({
            recipe: {
                ingredientsTxt,
                name: this.state.recipe.name,
                process: this.state.recipe.process,
                id: this.state.recipe.id
            }
        });
        //console.log("ingredients changed: " + ingredientsTxt);
    }

    setProcess(process) {
        this.setState({
            recipe: {
                process,
                name: this.state.recipe.name,
                ingredientsTxt: this.state.recipe.ingredientsTxt,
                id: this.state.recipe.id
            }
        });
        //console.log("process changed: " + process);
    }

    componentDidMount() {
        var recipe = recipeService.getRecipe(this.props.recipeId);
        if (recipe) {
            this.setState({ recipe, view_state: this.ViewState.EDIT });
        } else {
            this.setState({ view_state: this.ViewState.NEW })
        }

    }

    saveRecipe = () => {
        recipeService.saveRecipe(this.state.recipe);
        this.props.gotoList();
    }

    getTitle() {
        if(this.state.view_state === this.ViewState.EDIT) {
            return <h2>Rezept editieren</h2>
        } else {
            return <h2>Neues Rezept eingeben</h2>
        }
    }

    render = () => {
        const title = this.getTitle();
        
        return (
            <div className="siimple--display-fluid">
                {title}
                <label className="siimple-label">Rezept Titel: </label><br />
                <input
                    type="text"
                    className="siimple-input siimple-input--fluid"
                    value={this.state.recipe.name}
                    onChange={e => this.setName(e.target.value)}>
                </input>
                <label className="siimple-label">Zutaten: </label><br />
                <textarea
                    className="siimple-textarea"
                    value={this.state.recipe.ingredientsTxt} rows="5"
                    onChange={e => this.setIngredients(e.target.value)}></textarea><br />
                <label className="siimple-label">Zubereitung: </label><br />
                <textarea
                    className="siimple-textarea siimple-textarea--fluid"
                    value={this.state.recipe.process} rows="8" cols="200"
                    onChange={e => this.setProcess(e.target.value)}></textarea>
                <br />
                <div className="siimple-btn siimple-btn--red" onClick={this.props.gotoList}>Abbrechen</div>&nbsp;
                <div className="siimple-btn siimple-btn--primary" onClick={this.saveRecipe}>Speichern</div>
            </div>
        )
    }
}

export default RecipeEdit;