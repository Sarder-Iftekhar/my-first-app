import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  //step3 for adding service to shoppinglist
  ingredients: Ingredient[] = []
  // ingredients: Ingredient[] = [

  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ];


  //step3 for adding service to shopping list
  //inject the service

  constructor(private slService: ShoppingListService) { } 
//step4 fro adding service to shopping list
  ngOnInit(): void {
     //.getIngredients() from ShoppingListService
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;

      }
    )
  }
  // onIngredientAdded(ingredient: Ingredient)
  // {
  //   this.ingredients.push(ingredient);

  // }

}
