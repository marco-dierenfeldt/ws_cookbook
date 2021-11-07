import { Component } from "react";
import recipeService from "../service/recipe-service";

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeList: [
                { id: 1, name: 'test1' },
                { id: 2, name: 'test2' },
                { id: 3, name: 'test3' },
                { id: 4, name: 'test4' },
                { id: 5, name: 'test5' },
                { id: 6, name: 'test6' }]
        }
    }

    componentDidMount = () => {
        this.updateList();
    }

    deleteRecipe = (id) => {
        //console.log("RecipeList.deleteRecipe(" + id + ")")
        recipeService.deleteRecipe(id);
        this.updateList();
    }

    updateList() {
        var recipeList = recipeService.getAllRecipes();
        this.setState({ recipeList });
    }

    render() {
        return (
            <div>
                <h2>Meine Rezepte</h2>
                <div className="siimple-table">
                    <div className="siimple-table-header">
                        <div className="siimple-table-row">
                            <div className="siimple-table-cell">Rezept</div>
                            <div className="siimple-table-cell">Aktionen</div>
                        </div>
                    </div>
                    <div className="siimple-table-body">

                        {this.state.recipeList.map((recipe) => {
                            return <div className="siimple-table-row" key={recipe.id}>
                                <div className="siimple-table-cell">{recipe.name}</div>
                                <div className="siimple-table-cell">
                                    <div onClick={() => this.props.showRecipie(recipe.id)} className="siimple-btn siimple-btn--teal">anzeigen</div> &nbsp;
                                    <div className="siimple-btn siimple-btn--green">editieren</div> &nbsp;
                                    <div onClick={() => this.deleteRecipe(recipe.id)} className="siimple-btn siimple-btn--red">löschen</div></div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeList;