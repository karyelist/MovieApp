import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../public/models/movie';
import { MovieRepository } from '../../../public/models/movieRepository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList:Movie[];
  movieRepository:MovieRepository;
  title="Film Listesi";

  constructor() {
    this.movieRepository=new MovieRepository();
    this.moviesList = this.movieRepository.getMovies();
  }
  

  
  ngOnInit(): void {

}

}

 