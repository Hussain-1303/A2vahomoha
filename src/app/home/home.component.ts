import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieinformationComponent } from '../movieinformation/movieinformation.component';
import { MovieDetails } from '../moviedetails';
import { MovieInfoService } from '../movieinfo.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieinformationComponent],
  template: `
    <section>
    <form action="" class="search-bar">
	    <input type="search" name="search" pattern=".*\S.*" required>
	    <button class="search-btn" type="submit">
		    <span>Search</span>
	    </button>
    </form>
    </section>
    <section class="results">
      <app-movieinformation
        *ngFor="let movie of MovieInfoList"
        [MovieInfo]="movie">
      </app-movieinformation>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  MovieInfoList: MovieDetails[] = [];
  MovieInfoin: MovieInfoService = inject
    (MovieInfoService);
  constructor() {
    this.MovieInfoList = this.MovieInfoin.getAllMovieDetails();
  }
}
