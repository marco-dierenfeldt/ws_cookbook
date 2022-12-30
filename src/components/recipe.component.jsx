import { Component } from "react";

class Recipe extends Component {
    constructor() {
        super();

        this.state = {
            recipe:{
                name:"Rezeptüberschrift oder Rezeptname",
                ingredients:['100g Zucker','5g Salz','400g Mehl','2  Eier'],
                process:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
            }
        }
    }
    render = () => {
        return (
            <div class="card">
                <div className="card-header">
                    <div className="card-header-title"><h2>{this.state.recipe.name}</h2></div>
                </div>
                <div className="card-content">
                    <div className="columns">
                        <div className="panel column is-one-quarter">
                            <div className="panel-heading">Zutaten</div>
                            {this.state.recipe.ingredients.map((ingredient)=>{
                                return <div className="panel-block">{ingredient}</div>
                            })}
                        </div>
                    </div>

                    <h3>Zubereitung</h3>
                    <p>
                        {this.state.recipe.process}
                    </p>
                </div>
            </div>
        )
    }
}

export default Recipe;