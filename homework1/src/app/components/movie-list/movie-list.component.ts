import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/helpers';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  //Mislam deka tuka mi e greshkata
  movieRecieved: Movie = {
    name: "",
    releaseDate: "",
    producerName: "",
    genre: "",
    imageUrl: "",
    musicBy: ""
  };

  @Input() movieListTitleFromApp: string = "";

  @Input() movieTitleFromApp: string = "";
  
  ngOnInit(): void {
  }

  onSentMovie(value: Movie) {
    console.log(value);
    this.movieRecieved = value;
    
    //Tuka go dobivam objektot vo konzola
    console.log(this.movieRecieved);

    //A konkretno property koa ke stavam ne go dobivam (probuvav i interfejsot Movie  da go stavam kako tip na movieRecieved ama ne sakase i taka i taka )
    console.log(this.movieRecieved.name);
  }

}
