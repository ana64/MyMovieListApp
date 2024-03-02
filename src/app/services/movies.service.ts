import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

 private url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc';

  constructor(private httpClient: HttpClient) { }

 getMovies(){
    return this.httpClient.get(this.url);
  }
}
