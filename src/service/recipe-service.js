class RecipeService {
    recipeList = [
        {
            id: 1,
            name: "Schweinekrustenbraten mit Knödeln und Sauerkraut",
            ingredients: ['100g Zucker', '5g Salz', '400g Mehl', '2  Eier'],
            process: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
        },
        {
            id: 2,
            name: "Spaghetti Bolognese",
            ingredients: ['500g gemischtes Hackfleisch', '200g pasierte Tomaten', 'Basilikum', 'Oregano', 'Thymian', 'Salz', 'Pfeffer', 'Tomatenmark'],
            process: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
        },
        {
            id: 3,
            name: "Obazda Marco Style",
            ingredients: ['400g Camembert', '1-2 Schmelzkäseecken', '50g Butter', 'eine Zwiebel', 'Pfeffer', 'Salz'],
            process: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
        },
        {
            id: 4,
            name: "Entre Coté mit Kräuterkartoffelspalten",
            ingredients: ['2 Entrecotè Rindersteaks', '8 mittelgroße Kartoffeln', 'Frische oder eingefrorene Kräuter nach Geschmack', 'Salz', 'Pfeffer'],
            process: 'Zu Erst Kartoffeln waschen und in Wedges schneiden, dann mit Salz, pfeffer und den gehackten Kräutern in eine schüssel geben und gut durchschwenken. Danach bei ca. 150°C in den Backofen bis si gebräunt sind. Steaks af beiden Seiten scharf anbraten (Grillpfanne oder Grill). Danach bei indirekter Hitze auf ca. 60 °C Kerntemperatur durchziehen lassen. '
        },
        {
            id: 5,
            name: "Blaue Zipfel",
            ingredients: ['4 große Zwiebeln', '1 TL Salz', '0,7 Liter Frankenwein', '1 Prise(n) Zucker', '2 Lorbeerblätter', '2 Nelken', '5 Körner Pfeffer', '5 Wacholderbeere(n)', '1 Karotten', '20 Nürnberger Bratwürste', 'etwas Senf', '¼ Liter Gemüsebrühe'],
            process: 'Die Zwiebeln schälen und in Scheiben schneiden. Die Karotte schälen und in Streifen hobeln. In einem Topf 1/2 l Salzwasser aufkochen, Gemüsebrühe-Instant dazugeben, dann die Zwiebeln, Karotte, den Wein, Zucker, Lorbeerblätter, Nelken, Pfefferkörner und Wacholderbeeren hineingeben. Den Sud 20 Minuten kochen lassen. Nach Geschmack mit etwas Senf abschmecken. Dann die Hitze herunterschalten. Die Würste im Sud etwa 15 Min. ziehen, aber nicht kochen, lassen. Sie sind gar, wenn sie fest werden. Die Würste aus dem Sud heben, auf tiefe Teller verteilen, etwas Sud darüber gießen. Die Zwiebeln und Karotten darauf verteilen. Dazu Schwarzbrot, Bier oder herben Wein reichen. Üblicherweise werden die "sauren Zipfel" mit Essigsud gekocht. Das ist uns aber immer zu sauer. Daher machen wir unsere s.Z. im Frankenweinsud!'
        }
    ];

    getAllRecipes() {
        return this.recipeList;
    }

    getRecipe(id) {
        var result = this.recipeList.find(recipe => {
            return recipe.id === id
        })
        if (result) {
            var ingredientsTxt = '';
            result.ingredients.forEach((ingredient) => { ingredientsTxt += ingredient + "\n" });
            //console.log("ingredientsTxt: " + ingredientsTxt);
            result.ingredientsTxt = ingredientsTxt;
        }
        return result;
    }

    saveRecipe(recipe) {
        console.log("saveRecipe");
        if (recipe.id < 0) {
            recipe.id = this.recipeList.length + 1;
            recipe.ingredients = recipe.ingredientsTxt.split("\n");
            this.recipeList.push(recipe);
        } else {
            var objIndex = this.recipeList.findIndex((rec => rec.id === recipe.id));
            this.recipeList[objIndex] = recipe;
        }
    }

    deleteRecipe = (id) => {
        var objIndex = this.recipeList.findIndex((recipe => recipe.id === id));
        this.recipeList.splice(objIndex, 1);
    }
}

export default new RecipeService();