class RecipeService {
    recipeList = [
        {
            name:"Rezeptüberschrift oder Rezeptname",
            ingredients:['100g Zucker','5g Salz','400g Mehl','2  Eier'],
            process:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
        }
    ];

    getAllRecipes() {
        return this.recipeList;
    }

    getRecipe() {
        return this.recipeList[0];
    }
}

export default new RecipeService();