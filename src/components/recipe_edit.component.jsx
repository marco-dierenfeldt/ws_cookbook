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
        if (this.state.view_state === this.ViewState.EDIT) {
            return <h2>Rezept editieren</h2>
        } else {
            return <h2>Neues Rezept eingeben</h2>
        }
    }

    render = () => {
        const title = this.getTitle();

        return (
            <div className="columns">
                <div className="content column is-half">
                    <h4 className="h3">{title}</h4>
                    <div className="field">
                        <label className="label">Rezept Titel</label>
                        <div class="control">
                            <input className="input" type="text" placeholder="Titel"
                                value={this.state.recipe.name}
                                onChange={e => this.setName(e.target.value)} />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Zutaten</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"
                                value={this.state.recipe.ingredientsTxt} rows="5"
                                onChange={e => this.setIngredients(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Zubereitung</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"
                                value={this.state.recipe.process} rows="8" cols="200"
                                onChange={e => this.setProcess(e.target.value)}></textarea>
                        </div>
                    </div>

                    <button className="button is-danger" onClick={this.props.gotoList}>Abbrechen</button>&nbsp;
                    <button className="button is-primary" onClick={this.saveRecipe}>Speichern</button>
                </div>
            </div>
        )
    }
}

export default RecipeEdit;