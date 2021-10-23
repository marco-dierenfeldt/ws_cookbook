import { Component } from "react";
import RecepieList from "./recepie_list.component";
import Recepie from "./recepie.component";

class MainComponent extends Component {
    APP_STATE = { LIST: 1, SINGLE: 2 }
    constructor() {
        super();

        this.state = {
            view: this.APP_STATE.LIST,
            recepieId: 1
        }
    }

    showListView = () => {
        this.setState({ view: this.APP_STATE.LIST })
    }

    showSingle = (recepieId) => {
        this.setState({ recepieId: recepieId, view: this.APP_STATE.SINGLE})
    }

    render() {
        var content = this.APP_STATE.LIST;
        if (this.state.view === this.APP_STATE.LIST) {
            content = <RecepieList showRecipie={this.showSingle} />
        } else if (this.state.view === this.APP_STATE.SINGLE) {
            content = <Recepie gotoList={this.showListView} recepieId={this.state.recepieId} />
        }
        return (<div>
            <div onClick={this.showListView} className="siimple-btn siimple-btn--primary">ListView</div>&nbsp;
            <div onClick={this.showSingle} className="siimple-btn siimple-btn--teal">SingleView</div>
            {content}
        </div>)
    }
}

export default MainComponent;