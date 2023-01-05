import { Component } from "react";
import recipeService from "../service/recipe-service";

class RecipeEdit extends Component {
    ViewState = { EDIT: 1, NEW: 2 };

    constructor(props) {
        super(props);

        this.state = {
            newIngredient: '',
            recipe: {
                id: -1,
                name: "",
                ingredients: [],
                process: ''
            }
        }
        this.addNewIngredient = this.addNewIngredient.bind(this);
    }

    setName(name) {
        this.setState({
            recipe: {
                id: this.state.recipe.id,
                name,
                ingredients: this.state.recipe.ingredients,
                process: this.state.recipe.process,
                ingredientsTxt: this.state.recipe.ingredientsTxt
            }
        });
        //console.log("name changed: " + name);
    }

    deleteIngredient(ingredient) {
        let idx = this.state.recipe.ingredients.findIndex(tmp => tmp === ingredient);
        this.setState({
            resipe: {
                ingredients: this.state.recipe.ingredients.splice(idx, 1),
                name: this.state.recipe.name,
                process: this.state.recipe.process,
                id: this.state.recipe.id
            }
        });
    }

    addNewIngredient() {
        let ingredients = JSON.parse(JSON.stringify(this.state.recipe.ingredients));
        ingredients.push(this.state.newIngredient);

        this.setState({
            recipe: {
                ingredients: ingredients,
                name: this.state.recipe.name,
                process: this.state.recipe.process,
                id: this.state.recipe.id
            },
            newIngredient: ''
            
        });
    }

    setNewIngredient(ingredient) {
        this.setState({
            newIngredient: ingredient
        });
    }

    setProcess(process) {
        this.setState({
            recipe: {
                process,
                name: this.state.recipe.name,
                ingredients: this.state.recipe.ingredients,
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
        //console.log(recipe);
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
                <div className="content column is-three-quarter">
                    <h4 className="h3">{title}</h4>
                    <div className="field">
                        <label className="label">Rezept Titel</label>
                        <div class="control">
                            <input className="input" type="text" placeholder="Titel"
                                value={this.state.recipe.name}
                                onChange={e => this.setName(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Zutaten</label>
                        <div className="control">
                            <div className="tags">
                                {this.state.recipe.ingredients.map((ingredient) => {
                                    return <span class="tag has-background-info-light" key={ingredient}>
                                        {ingredient}
                                        <button onClick={() => this.deleteIngredient(ingredient)} class="delete is-small"></button>
                                    </span>
                                })}
                            </div>
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <input type="text" className="input" placeholder="Neue Zutat"
                                        value={this.state.newIngredient}
                                        onChange={e => this.setNewIngredient(e.target.value)}></input>
                                </div>
                                <div className="control">
                                    <button className="button is-primary"
                                    onClick={this.addNewIngredient}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Zubereitung</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Textarea"
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