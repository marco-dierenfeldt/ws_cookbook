import { Component } from "react";
import RecipeList from "./recipe_list.component";
import Recipe from "./recipe.component";

class MainComponent extends Component {
     APP_STATE = {LIST:1,SINGLE:2}
    constructor() {
        super();
        
        this.state = {
            view: this.APP_STATE.LIST,
            recipeId: 1
        }
    }

    showListView = () => {
        this.setState({view: this.APP_STATE.LIST})
    }

    showSingle = (recipeId) => {
        this.setState({recipeId:recipeId, view: this.APP_STATE.SINGLE})
    }

    render() {
        var content = this.APP_STATE.LIST;
        if (this.state.view === this.APP_STATE.LIST) {
            content = <RecipeList showRecipe={this.showSingle}/>
        } else if ( this.state.view === this.APP_STATE.SINGLE) {
            content = <Recipe recipeId={this.state.recipeId}/>
        }
        return(<div>
            <button onClick={this.showListView} className="button">ListView</button>&nbsp;
            <button onClick={() => this.showSingle(1)} className="button">SingleView</button>
            
            {content}
            </div>)
    }
}

export default MainComponent;