import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [

    new Recipe('Pizza',
     'Very much testy',
      'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__340.jpg'
      ,[
        new Ingredient('Meat', 2),
        new Ingredient('Flour',10)
      ])
    ,
      new Recipe('Burger',
      'Very much testy',
       'https://us.123rf.com/450wm/alexskp/alexskp2003/alexskp200300082/143499095-fresh-tasty-burger-isolated-on-white.jpg',
       [
        new Ingredient('Buns',20),
        new Ingredient('Meat',1)
       ]),
       new Recipe('Sandwitch',
     'Very much testy',
      'https://st.depositphotos.com/1003272/4352/i/600/depositphotos_43524353-stock-photo-sandwich.jpg',[
        new Ingredient('Egg',2),
        new Ingredient('Cheese',1)
      ])

  ];
  constructor (private slService: ShoppingListService){}
  getRecipes()
  {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[])
  {

    this.slService.addIngredients(ingredients);

  }

}