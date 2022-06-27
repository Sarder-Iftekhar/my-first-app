import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();



  recipes: Recipe[] = [

    new Recipe('Pizza',
     'Very much testy',
      'https://thumbs.dreamstime.com/z/various-spices-recipe-word-vintage-background-copyspace-selective-focus-food-baking-cooking-concept-97076702.jpg')
    ,
      new Recipe('Burger',
      'Very much testy',
       'https://thumbs.dreamstime.com/z/various-spices-recipe-word-vintage-background-copyspace-selective-focus-food-baking-cooking-concept-97076702.jpg'),
       new Recipe('Sandwitch',
     'Very much testy',
      'https://thumbs.dreamstime.com/z/various-spices-recipe-word-vintage-background-copyspace-selective-focus-food-baking-cooking-concept-97076702.jpg'),
      new Recipe('A testy recipe',
     'Very much testy',
      'https://thumbs.dreamstime.com/z/various-spices-recipe-word-vintage-background-copyspace-selective-focus-food-baking-cooking-concept-97076702.jpg')


  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe);

  }

}
