import { Component } from "react";
import RecipeService from "../service/recepie-service";

class RecipeList extends Component {
    constructor() {
        super();

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
        var recipeList = RecipeService.getAllRecipes();
        this.setState({recipeList});
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
                            return <tr>
                                <td>{recipe.name}</td>
                                <td>anzeigen | editieren | löschen</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RecipeList;