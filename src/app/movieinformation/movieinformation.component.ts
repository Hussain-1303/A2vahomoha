import { Component, Input } from '@angular/core';
import { MovieDetails } from '../moviedetails';
import { DetailsComponent } from '../details/details.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-movieinformation',
  standalone: true,
  imports: [DetailsComponent, RouterModule],
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="MovieInfo.photo" alt = "Exterior photo of movie" >
    <h2 class="listing-heading"> {{MovieInfo.Name}}</h2>
    <p class="listing-location">{{MovieInfo.Genre}} "{{MovieInfo.Year}}"</p>
    <div class="link-container">
      <a [routerLink]="['/details', MovieInfo.id]" class="router-link">Click Here To Read The Movie Review</a>
    </div>
  </section>
  `,
  styleUrl: './movieinformation.component.css'
})
export class MovieinformationComponent {
  @Input() MovieInfo!: MovieDetails;
}
