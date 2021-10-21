import { Component } from "react";
import './recepie.component.css';

class Recepie extends Component {
    constructor() {
        super();

        this.state = {
            recepie:{
                name:"Rezeptüberschrift oder Rezeptname",
                ingredients:['100g Zucker','5g Salz','400g Mehl','2  Eier'],
                process:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
            }
        }
    }
    render = () => {
        return (
            <div className="recepie">
                <h2>{this.state.recepie.name}</h2>
                <div className="ingredients">

                    <div className="siimple-list">
                        <div className="siimple-list-item">
                            <div className="siimple-list-title">Zutaten</div>
                        </div>
                        {this.state.recepie.ingredients.map((ingredient) => {
                            return <div className="siimple-list-item">{ingredient}</div>;
                        })}
                    </div>
                </div>
                <div className="process">
                    <h3>Zubereitung</h3>
                    <div>
                        {this.state.recepie.process}
                    </div>
                </div>
            </div>
        )
    }
}

export default Recepie;