import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { HomeComponent } from './components/home/home.component';
import { OrderedCarsComponent } from './components/ordered-cars/ordered-cars.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'ordered-cars', component: OrderedCarsComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    OrderedCarsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
