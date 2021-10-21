import { Component } from "react";
import recepieService from "../service/recepie-service";

class RecepieList extends Component {
    constructor() {
        super();

        this.state = {
            recepieList: [
                { name: 'test1' },
                { name: 'test2' },
                { name: 'test3' },
                { name: 'test4' },
                { name: 'test5' },
                { name: 'test6' }]
        }
    }

    componentDidMount = () => {
        var recepieList = recepieService.getAllRecepies();
        this.setState({recepieList});
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
                            return <div className="siimple-table-row">
                                <div className="siimple-table-cell">{recepie.name}</div>
                                <div className="siimple-table-cell">anzeigen | editieren | löschen</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecepieList;