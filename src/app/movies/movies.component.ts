import { Component, OnInit,Injectable } from '@angular/core';
import { Movie } from '../../../public/models/movie';
import { MovieRepository } from '../../../public/models/movieRepository';
import {AlertifyService} from '../services/alertify.service' 
 

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

  constructor(private alertify:AlertifyService) {
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
  this.alertify.success(movie.title + 'listeye eklendi');
  }
  else{
    $event.target.classList.remove('btn-danger');
  $event.target.classList.add('btn-primary');
  $event.target.innerText="Liste Ekle";
  this.alertify.error(movie.title + 'listeden çıkarıldı');

  }

}

}

 