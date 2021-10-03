import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor( private recipesService: RecipesServiceService, private router: Router) { }

  recipes: Recipe[];

  ngOnInit(): void {
    this.recipesService.$recipes.subscribe((data) => {
      this.recipes = data;
      console.log(data);
    });
  }

  deleteRecipeById(id: number | string) {
    this.recipesService.deleteRecipe(id);
  }

  editRecipeById(id: number | string) {
    
    this.recipesService.editRecipe(id);
    this.recipesService.editFlag = true;
    this.router.navigate(['/add-recipe']);
  
  }

}
