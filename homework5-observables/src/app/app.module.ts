import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-recipes', component: AllRecipesComponent },
  { path: 'add-recipe', component: AddRecipeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllRecipesComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
