import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirectives } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //step2 for add service to shopping list
  //shpping-list service provider here?why
  //but we saw recipe service provider was recipe.component.ts
  //because later i want to access it from my recipe section 
  //that is why I will actually provide it in app module ,

  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
