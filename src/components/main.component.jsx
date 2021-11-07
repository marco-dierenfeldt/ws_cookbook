import { Component } from "react";
import RecipeList from "./recipe_list.component";
import Recipe from "./recipe.component";

class MainComponent extends Component {
     APP_STATE = {LIST:1,SINGLE:2}
    constructor() {
        super();
        
        this.state = {
            view: this.APP_STATE.LIST
        }
    }

    showListView = () => {
        this.setState({view: this.APP_STATE.LIST})
    }

    showSingle = () => {
        this.setState({view: this.APP_STATE.SINGLE})
    }

    render() {
        var content = this.APP_STATE.LIST;
        if (this.state.view === this.APP_STATE.LIST) {
            content = <RecipeList/>
        } else if ( this.state.view === this.APP_STATE.SINGLE) {
            content = <Recipe/>
        }
        return(<div>
            <div onClick={this.showListView} className="siimple-btn siimple-btn--primary">ListView</div>&nbsp;
            <div onClick={this.showSingle} className="siimple-btn siimple-btn--teal">SingleView</div>
            
            {content}
            </div>)
    }
}

export default MainComponent;