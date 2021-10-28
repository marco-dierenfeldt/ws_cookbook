import { Component } from "react";
import RecepieList from "./recepie_list.component";
import Recepie from "./recepie.component";
import RecepieEdit from "./recepie_edit.component";

class MainComponent extends Component {
    APP_STATE = { LIST: 1, SINGLE: 2, EDIT: 3, NEW: 4 }
    constructor() {
        super();

        this.state = {
            view: this.APP_STATE.LIST,
            recepieId: 1
        }
    }

    showListView = () => {
        this.setState({ view: this.APP_STATE.LIST });
    }

    showSingle = (recepieId) => {
        this.setState({ recepieId: recepieId, view: this.APP_STATE.SINGLE });
    }

    editRecepie = (recepieId) => {
        this.setState({ recepieId, view: this.APP_STATE.EDIT });
    }
    
    newRecepie = (recepieId) => {
        this.setState({ recepieId, view: this.APP_STATE.NEW });
    }

    render() {
        var content = this.APP_STATE.LIST;
        if (this.state.view === this.APP_STATE.LIST) {
            content = <RecepieList showRecipie={this.showSingle} editRecepie={this.editRecepie} />
        } else if (this.state.view === this.APP_STATE.SINGLE) {
            content = <Recepie gotoList={this.showListView} recepieId={this.state.recepieId} />
        } else if (this.state.view === this.APP_STATE.EDIT) {
            content = <RecepieEdit gotoList={this.showListView} recepieId={this.state.recepieId} />
        } else if (this.state.view === this.APP_STATE.NEW) {
            content = <RecepieEdit gotoList={this.showListView} />
        }

        return (<div>
            <div onClick={this.showListView} className="siimple-btn siimple-btn--primary">ListView</div>&nbsp;
            <div onClick={this.newRecepie} className="siimple-btn siimple-btn--teal">NEW Recipie</div>
            {content}

        </div>)
    }
}

export default MainComponent;