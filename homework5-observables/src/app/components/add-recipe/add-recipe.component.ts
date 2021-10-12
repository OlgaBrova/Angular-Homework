import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  AbstractControl,
  FormControl,
  Validators,
} from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  constructor(private recipesService: RecipesServiceService) {}

  newRecipeForm: FormGroup;

  ngOnInit(): void {
    let recipeById = this.recipesService.recipeToEdit;

    if (this.recipesService.editFlag && recipeById) {
      this.initFormForEdit(recipeById);
    } else {
      this.initForm();
    }
  }

  initForm() {
    this.newRecipeForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      imageUrl: new FormControl(null),
      ingredients: new FormArray([]),
    });
  }

  initFormForEdit(recipe: Recipe) {
    this.newRecipeForm = new FormGroup({
      name: new FormControl(recipe.name),
      description: new FormControl(recipe.description),
      imageUrl: new FormControl(recipe.imageUrl),
      ingredients: new FormArray([]),
    });
    recipe.ingredients.forEach((ingredient) => {
      const control = new FormControl(ingredient, Validators.required);
      (<FormArray>this.newRecipeForm.get('ingredients'))?.push(control);
    });
  }

  onReactiveFormSubmit() {
    if (this.recipesService.editFlag === false) {
      const { name, description, imageUrl, ingredients } =
        this.newRecipeForm.value;

      const recipe: Recipe = {
        id: UUID.UUID(),
        name,
        description,
        imageUrl,
        ingredients,
      };
      console.log(recipe);

      this.recipesService.addNewRecipe(recipe);
      this.newRecipeForm.reset();
    }

    if (this.recipesService.editFlag === true) {
      const { name, description, imageUrl, ingredients } =
        this.newRecipeForm.value;

      const recipe: Recipe = {
        id: this.recipesService.recipeToEdit.id,
        name,
        description,
        imageUrl,
        ingredients,
      };

      this.recipesService.editedRecipeSave(recipe);
      this.recipesService.editFlag = false;
      this.newRecipeForm.reset();
    }
  }

  getIngredientsControls(): AbstractControl[] {
    return (<FormArray>this.newRecipeForm.get('ingredients')).controls;
  }

  addIngredients() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.newRecipeForm.get('ingredients'))?.push(control);
  }
}
