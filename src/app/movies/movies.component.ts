import { Component, OnInit,Injectable } from '@angular/core';
import { Movie } from '../../../public/models/movie';
import { MovieRepository } from '../../../public/models/movieRepository';
 
 
declare let alertify:any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList:Movie[];
  movieRepository:MovieRepository;
  title="Film Listesi";
  filterText:string="";

  constructor() {
    this.movieRepository=new MovieRepository();
    this.moviesList = this.movieRepository.getMovies();
  }
  
  
  ngOnInit(): void {

}

AddList($event:any,movie: Movie){
  if($event.target.classList.contains('btn-primary'))
  {
  $event.target.classList.remove('btn-primary');
  $event.target.classList.add('btn-danger');
  $event.target.innerText="Listeden Çıkar";
  alertify.success(movie.title + 'listeye eklendi');
  }
  else{
    $event.target.classList.remove('btn-danger');
  $event.target.classList.add('btn-primary');
  $event.target.innerText="Liste Ekle";
  alertify.success(movie.title + 'listeden çıkarıldı');

  }

}

}

 