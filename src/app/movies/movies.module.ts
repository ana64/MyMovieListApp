import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from '../services/movies.service';
import {TruncatePipe} from '../truncate.pipe'



@NgModule({
  declarations: [
    MoviesComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ],
  providers:[
    MoviesService,
    TruncatePipe
  ]
})
export class MoviesModule { }
