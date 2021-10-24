import { Component } from "react";
import recepieService from "../service/recepie-service";

class RecepieEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recepie: {
                name: "test",
                ingredientsTxt: 'test',
                process: ''
            }
        }
    }

    setName(name) {
        this.setState({ recepie: { name } });
        console.log("name changed: " + name);
    }

    setIngredients(ingredientsTxt) {
        this.setState({ recepie: { ingredientsTxt } });
        console.log("ingredients changed: " + ingredientsTxt);
    }

    setProcess(process) {
        this.setState({ recepie: { process } });
        console.log("process changed: " + process);
    }

    componentDidMount() {
        var recepie = recepieService.getRecepie(this.props.recepieId);
        this.setState({ recepie });
    }

    saveRecepie = () => {
        recepieService.saveRecepie(this.state.recepie);
    }

    render = () => {
        return (
            <div className="siimple--display-fluid">
                <h2>Rezept editieren</h2>
                <label className="siimple-label">Rezept Titel: </label><br />
                <input
                    type="text"
                    className="siimple-input siimple-input--fluid"
                    value={this.state.recepie.name}
                    onChange={e => this.setName(e.target.value)}>
                </input>
                <label className="siimple-label">Zutaten: </label><br />
                <textarea
                    className="siimple-textarea"
                    value={this.state.recepie.ingredientsTxt} rows="5"
                    onChange={e => this.setIngredients(e.target.value)}></textarea><br />
                <label className="siimple-label">Zubereitung: </label><br />
                <textarea 
                className="siimple-textarea siimple-textarea--fluid" 
                value={this.state.recepie.process} rows="8" cols="200"
                onChange={e => this.setProcess(e.target.value)}></textarea>
                <br />
                <div className="siimple-btn siimple-btn--red" onClick={this.props.gotoList}>Abbrechen</div>&nbsp;
                <div className="siimple-btn siimple-btn--primary" onClick={this.saveRecepie}>Speichern</div>
            </div>
        )
    }
}

export default RecepieEdit;