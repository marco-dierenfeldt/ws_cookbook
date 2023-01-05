import { Component } from "react";
import RecipeService from "../service/recipe-service";

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeList: [
                { name: 'test1' },
                { name: 'test2' },
                { name: 'test3' },
                { name: 'test4' },
                { name: 'test5' },
                { name: 'test6' }]
        }
    }

    componentDidMount = () => {
        this.updateList();
    }

    deleteRecipe = (id) => {
        //console.log("RecipeList.deleteRecipe(" + id + ")")
        RecipeService.deleteRecipe(id);
        this.updateList();
    }

    updateList() {
        var recipeList = RecipeService.getAllRecipes();
        this.setState({ recipeList });
    }

    render() {
        return (
            <div>
                <h2>Meine Rezepte</h2>
                <table className="table is-striped">
                    <thead>
                        <tr>
                            <th>Rezept</th>
                            <th>Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.recipeList.map((recipe) => {
                            return <tr key={recipe.id}>
                                <td>{recipe.name}</td>
                                <td>
                                    <div className="buttons">
                                        <button onClick={() => this.props.showRecipe(recipe.id)} className="button is-info is-light">anzeigen</button>
                                        <button onClick={() => this.props.editRecipe(recipe.id)} className="button is-success is-light">editieren</button>
                                        <button onClick={()=> this.deleteRecipe(recipe.id)} className="button is-danger is-light">löschen</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RecipeList;