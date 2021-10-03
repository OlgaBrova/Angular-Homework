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

  
  addNewRecipe(recipe: Recipe) {
    console.log(recipe);

    this.recipesArray.push(recipe);
    this._recipes.next(Object.assign([], this.recipesArray));

    //Zoshto next ne funkcionira kaj $recipes?
    //this.$recipes.next(Object.assign([], this.recipesArray));
  }

  deleteRecipe(id: number | string) {
    this.recipesArray.forEach((recipe, i) => {

      if(recipe.id === id) {
        this.recipesArray.splice(i, 1);
      }

      this._recipes.next(Object.assign([], this.recipesArray));
    })
  }



  
  editRecipe(id: string | number) {

    let recipeToBeEdited = this.recipesArray.find((recipe) => recipe.id === id);
    return recipeToBeEdited;
  }

  


  // editRecipe(id: string | number) {

  //   let recipeToBeEdited = this.recipesArray.find((recipe) => recipe.id === id);
  //   let remainingRecipes = this.recipesArray.filter((recipe) => recipe.id !== id);

  //   if (!!recipeToBeEdited) {
  //     recipeToBeEdited = { ...recipeToBeEdited, name, description, imageUrl, ingredients };
  //     this.recipesArray = [ ...remainingRecipes, recipeToBeEdited ];
  //     this._recipes.next(Object.assign([], this.recipesArray));
  //   }

  // }



}
