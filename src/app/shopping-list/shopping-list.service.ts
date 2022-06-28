
//step1 for adding service to shoppinglist

import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    
  private ingredients: Ingredient[] = [

    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ];

  getIngredients()
  {
    return this.ingredients.slice();
  }

  //for adding ingredient


  addIngredient(ingredient: Ingredient)
  {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[])
  {
    //one option
    // for(let ingredient of ingredients){
    //     this.addIngredient(ingredient);
    // }
    //different option s to directly add all ingredinet in one go 
     //es6 feature, the spread operator which allows us to 
     //basically turn an array of elements into a list of elements .
     //spread operator
     this.ingredients.push(...ingredients)
     this.ingredientChanged.emit(this.ingredients.slice());

  }

}