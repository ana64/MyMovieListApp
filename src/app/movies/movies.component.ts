import { Component, OnDestroy , OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrl: 'movies.component.css'
})
export class MoviesComponent implements OnInit, OnDestroy {

  movies: any ;

constructor(private movieService: MoviesService){
}


ngOnInit(): void {

  this.movieService.getMovies().subscribe((data:any)=>this.movies = data.results);

}

ngOnDestroy(): void {}

}
