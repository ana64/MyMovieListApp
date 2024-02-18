import { Component, OnDestroy , OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.component.html',
  styleUrl: 'movies.component.css'
})
export class MoviesComponent implements OnInit, OnDestroy {

  url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc';
  list: any;
constructor(private http: HttpClient){

}


ngOnInit(): void {
  this.http.get(this.url).subscribe( (data:any)=>{
    console.log(data)
    this.list = data.results;
  })
}


ngOnDestroy(): void {
}

}
