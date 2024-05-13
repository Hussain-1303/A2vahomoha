import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInfoService } from '../movieinfo.service';
import { MovieDetails } from '../moviedetails';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article>
    <img class="listing-photo" [src]="routerid?.photo">
   <section class="listing-features">
    <h2 class="section-heading">Movie Rating and Brief Review</h2>
    <ul>
      <li>Rating for the following Movie : {{routerid?.Rating}}/5 </li>
      <br>
      <li>Public Review : {{routerid?.Review}} </li>
    </ul>
   </section>
  </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute =inject(ActivatedRoute);
  movieInfo =inject(MovieInfoService);
  routerid:MovieDetails | undefined;
  constructor(){
    const routerid
    =Number(this.route.snapshot.params['id']);
    this.routerid=this.movieInfo.getMovieinformationById(routerid);
  }

}
