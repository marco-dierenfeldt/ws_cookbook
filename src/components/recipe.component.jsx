import { Component } from "react";
import "./recipe.component.css";

class Recipe extends Component {
    render = () => {
        return (
            <div className="recipe">
                <h2>Rezeptüberschrift oder Rezeptname</h2>
                <div className="ingredients">

                    <div className="siimple-list">
                        <div className="siimple-list-item">
                            <div className="siimple-list-title">Zutaten</div>
                        </div>
                        <div className="siimple-list-item">100g Zucker</div>
                        <div className="siimple-list-item">5g Salz</div>
                        <div className="siimple-list-item">400g Mehl</div>
                        <div className="siimple-list-item">2  Eier</div>

                    </div>
                </div>
                <div className="process">
                    <h3>Zubereitung</h3>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                            eu, pretium quis, sem. Nulla consequat massa quis enim.
                            Donec pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                            vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        </p>
                        <p>
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper
                            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                            lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                            Phasellus viverra nulla ut metus varius laoreet. Quisque
                            rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                            rhoncus.
                        </p>
                        <p>
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                            semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                            ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                            orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                            mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                            leo eget bibendum sodales, augue velit cursus nunc.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;