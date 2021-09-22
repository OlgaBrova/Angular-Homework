import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Movie } from '../../helpers';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  constructor() { }

  movieName: Movie = {
    name: "King Arthur: Legend of the Sword",
    releaseDate: "8 May 2017",
    producerName: "Guy Ritchie",
    genre: "Drama, Fantasy, Epic",
    imageUrl: "https://www.game-ost.com/static/covers_soundtracks/1/2/121458_673679.jpg",
    musicBy: "Daniel Pemberton",
  }

  @Input() movieTitleFromApp: string = "";

  @Output() movieToMovieList: EventEmitter<Movie> = new EventEmitter<Movie>()

  ngOnInit(): void {
  }

  sendMovieToMovieList() {
    this.movieToMovieList.emit(this.movieName);
  }



}
