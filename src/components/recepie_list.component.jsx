import { Component } from "react";
import recepieService from "../service/recepie-service";

class RecepieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recepieList: [
                { id: 1, name: 'test1' },
                { id: 2, name: 'test2' },
                { id: 3, name: 'test3' },
                { id: 4, name: 'test4' },
                { id: 5, name: 'test5' },
                { id: 6, name: 'test6' }]
        }
    }

    componentDidMount = () => {
        this.updateList();
    }

    deleteRecepie = (id) => {
        //console.log("RecepieList.deleteRecepie(" + id + ")")
        recepieService.deleteRecepie(id);
        this.updateList();
    }

    updateList() {
        var recepieList = recepieService.getAllRecepies();
        this.setState({ recepieList });
    }

    render() {
        return (
            <div>
                <h2>Meine Rezepte</h2>
                <div className="siimple-table">
                    <div className="siimple-table-header">
                        <div className="siimple-table-row">
                            <div className="siimple-table-cell">Rezept</div>
                            <div className="siimple-table-cell">Aktionen</div>
                        </div>
                    </div>
                    <div className="siimple-table-body">

                        {this.state.recepieList.map((recepie) => {
                            return <div className="siimple-table-row" key={recepie.id}>
                                <div className="siimple-table-cell">{recepie.name}</div>
                                <div className="siimple-table-cell">
                                    <div onClick={() => this.props.showRecipie(recepie.id)} className="siimple-btn siimple-btn--teal">anzeigen</div> &nbsp;
                                    <div onClick={() => this.props.editRecepie(recepie.id)} className="siimple-btn siimple-btn--green">editieren</div> &nbsp;
                                    <div onClick={() => this.deleteRecepie(recepie.id)} className="siimple-btn siimple-btn--red">löschen</div></div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecepieList;