import { NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  constructor() { }

  _recipes = new BehaviorSubject<Recipe[]>([]);
  $recipes = this._recipes.asObservable();

  recipesArray: Recipe[] = [];
  editFlag: boolean = false;
  recipeToEdit: Recipe;

  addNewRecipe(recipe: Recipe) {
    console.log(recipe);

    const alreadyExistingRecipes: Recipe[] = this._recipes.getValue();
    this._recipes.next([...alreadyExistingRecipes, recipe]);
  }

  deleteRecipe(id: number | string) {

    const alreadyExistingRecipes: Recipe[] = this._recipes.getValue();
    const filteredArray = alreadyExistingRecipes.filter((recipe) => recipe.id !== id);
    
    this._recipes.next(filteredArray);
  }

  editRecipe(id: string | number) {

    let recipeToBeEdited = this.recipesArray.find((recipe) => recipe.id === id);
    
    if(recipeToBeEdited) {
      this.recipeToEdit = recipeToBeEdited;
    }
  }

  editedRecipeSave(editedRecipe: Recipe) {

    const alreadyExistingRecipes: Recipe[] = this._recipes.getValue();
    let remainingRecipes = alreadyExistingRecipes.filter((recipe) => recipe.id !== editedRecipe.id);

    if (!!editedRecipe && this.editFlag === true) {
    
      this._recipes.next([ ...remainingRecipes, editedRecipe ]);
    }
  }
}
