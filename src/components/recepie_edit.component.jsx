import { Component } from "react";
import recepieService from "../service/recepie-service";

class RecepieEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recepie: {
                name: "test",
                ingredientsTxt: 'test',
                process:''
            }
        }
    }

    componentDidMount() {
        var recepie = recepieService.getRecepie(this.props.recepieId);
        this.setState({ recepie });
    }

    render = () => {
        return (
            <div className="siimple--display-fluid">
                <h2>Rezept editieren</h2>
                <label className="siimple-label">Rezept Titel: </label><br />
                <input type="text" className="siimple-input siimple-input--fluid" value={this.state.recepie.name}></input>
                <label className="siimple-label">Zutaten: </label><br />
                <textarea className="siimple-textarea" value={this.state.recepie.ingredientsTxt} rows="5"></textarea><br/>
                <label className="siimple-label">Zubereitung: </label><br/>
                <textarea className="siimple-textarea siimple-textarea--fluid" value={this.state.recepie.process} rows="8" cols="200"></textarea>
                <br/>
                <div className="siimple-btn siimple-btn--red">Abbrechen</div>&nbsp;<div className="siimple-btn siimple-btn--primary">Speichern</div>
            </div>
        )
    }
}

export default RecepieEdit;