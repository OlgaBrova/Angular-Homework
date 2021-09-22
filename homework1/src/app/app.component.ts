import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  movieTitleFromApp: string = 'App sends this title to Movie component!';
  movieListTitleFromApp: string = 'App sends this title to Movie List component!';

  title: string = 'Angular App';
  
}
