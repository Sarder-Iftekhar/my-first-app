import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //@input allows us to bind this component property from outside

  @Input() recipe: Recipe;
 // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService){

  } 

  ngOnInit(): void {
  }
  onSelected()
  {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);

  }

}
