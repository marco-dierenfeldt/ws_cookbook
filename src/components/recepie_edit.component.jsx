import { Component } from "react";
import recepieService from "../service/recepie-service";

class RecepieEdit extends Component {
    ViewState = { EDIT: 1, NEW: 2 };

    constructor(props) {
        super(props);

        this.state = {
            recepie: {
                id: -1,
                name: "",
                ingredientsTxt: '',
                process: ''
            }
        }
    }

    setName(name) {
        this.setState({
            recepie: {
                id: this.state.recepie.id,
                name,
                process: this.state.recepie.process,
                ingredientsTxt: this.state.recepie.ingredientsTxt
            }
        });
        //console.log("name changed: " + name);
    }

    setIngredients(ingredientsTxt) {
        this.setState({
            recepie: {
                ingredientsTxt,
                name: this.state.recepie.name,
                process: this.state.recepie.process,
                id: this.state.recepie.id
            }
        });
        //console.log("ingredients changed: " + ingredientsTxt);
    }

    setProcess(process) {
        this.setState({
            recepie: {
                process,
                name: this.state.recepie.name,
                ingredientsTxt: this.state.recepie.ingredientsTxt,
                id: this.state.recepie.id
            }
        });
        //console.log("process changed: " + process);
    }

    componentDidMount() {
        var recepie = recepieService.getRecepie(this.props.recepieId);
        if (recepie) {
            this.setState({ recepie, view_state: this.ViewState.EDIT });
        } else {
            this.setState({ view_state: this.ViewState.NEW })
        }

    }

    saveRecepie = () => {
        recepieService.saveRecepie(this.state.recepie);
        this.props.gotoList();
    }

    getTitle() {
        if(this.state.view_state === this.ViewState.EDIT) {
            return <h2>Rezept editieren</h2>
        } else {
            return <h2>Neues Rezept eingeben</h2>
        }
    }

    render = () => {
        const title = this.getTitle();
        
        return (
            <div className="siimple--display-fluid">
                {title}
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