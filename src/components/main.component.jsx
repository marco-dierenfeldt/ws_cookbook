import { Component } from "react";
import RecipeList from "./recipe_list.component";
import Recipe from "./recipe.component";
import RecipeEdit from "./recipe_edit.component";

class MainComponent extends Component {
    APP_STATE = { LIST: 1, SINGLE: 2, EDIT: 3, NEW: 4 }
    constructor() {
        super();

        this.state = {
            view: this.APP_STATE.LIST,
            recipeId: 1
        }
    }

    showListView = () => {
        this.setState({ view: this.APP_STATE.LIST });
    }

    showSingle = (recipeId) => {
        this.setState({ recipeId: recipeId, view: this.APP_STATE.SINGLE });
    }

    editRecipe = (recipeId) => {
        this.setState({ recipeId, view: this.APP_STATE.EDIT });
    }
    
    newRecipe = (recipeId) => {
        this.setState({ recipeId, view: this.APP_STATE.NEW });
    }

    render() {
        var content = this.APP_STATE.LIST;
        if (this.state.view === this.APP_STATE.LIST) {
            content = <RecipeList showRecipie={this.showSingle} editRecipe={this.editRecipe} />
        } else if (this.state.view === this.APP_STATE.SINGLE) {
            content = <Recipe gotoList={this.showListView} recipeId={this.state.recipeId} />
        } else if (this.state.view === this.APP_STATE.EDIT) {
            content = <RecipeEdit gotoList={this.showListView} recipeId={this.state.recipeId} />
        } else if (this.state.view === this.APP_STATE.NEW) {
            content = <RecipeEdit gotoList={this.showListView} />
        }

        return (<div>
            <div onClick={this.showListView} className="siimple-btn siimple-btn--primary">ListView</div>&nbsp;
            <div onClick={this.newRecipe} className="siimple-btn siimple-btn--teal">NEW Recipie</div>
            {content}

        </div>)
    }
}

export default MainComponent;