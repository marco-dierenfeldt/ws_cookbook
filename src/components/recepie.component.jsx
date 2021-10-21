import { Component } from "react";
import './recepie.component.css';
import RecepieService from "../service/recepie-service";

class Recepie extends Component {
    constructor() {
        super();

        this.state = {
            recepie: {
                name: '',
                ingredients: [],
                process: ''
            }
        }
    }

    componentDidMount = () => {
        var recepie = RecepieService.getRecepie();
        this.setState({recepie});
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