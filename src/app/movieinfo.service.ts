import { Injectable } from '@angular/core';
import { MovieDetails } from './moviedetails';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {
  protected MovieDetailsList:MovieDetails[]=[
    {
      id: 0,
      Name: 'The Shawshank Redemption',
      Genre: 'Drama',
      Year: '1994',
      photo: `../assets/images/TSR.jpeg`,
      Rating: 4.9,
      Review: "This timeless story of hope, friendship, and redemption in a maximum-security prison is a compelling testament to the human spirit."
    },
    {
      id: 1,
      Name: 'The Godfather',
      Genre: 'Crime, Drama',
      Year: '1972',
      photo: `../assets/images/Godfather.jpeg`,
      Rating: 4.8,
      Review: 'Chronicles the Corleone family under patriarch Vito Corleone, focusing on the transformation of Michael Corleone from reluctant outsider to ruthless mafia boss.'
    },
    {
      id: 2,
      Name: 'Schindler List',
      Genre: 'Biography, Drama, History',
      Year: '1993',
      photo: `../assets/images/SList.jpeg`,
      Rating: 4.9,
      Review: 'Steven Spielberg masterpiece about Oskar Schindler, who saved over a thousand Polish Jews during the Holocaust.'
    },
    {
      id: 3,
      Name: 'The Dark Knight',
      Genre: 'Action, Crime, Drama',
      Year: '2008',
      photo: `../assets/images/TDK.jpeg`,
      Rating: 4.8,
      Review: 'In the second installment of Christopher Nolan Batman trilogy, Batman must accept one of the greatest psychological and physical tests when he faces off against the Joker.'
    },
    {
      id: 4,
      Name: 'Inception',
      Genre: 'Action, Adventure, Sci-Fi',
      Year: '2010',
      photo: `../assets/images/Inception.jpeg`,
      Rating: 4.7,
      Review: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
    },
    {
      id: 5,
      Name: 'Forrest Gump',
      Genre: 'Drama, Romance',
      Year: '1994',
      photo: `../assets/images/TFG.jpeg`,
      Rating: 4.7,
      Review: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.'
    },
    {
      id: 6,
      Name: 'The Lord of the Rings: The Return of the King ',
      Genre: 'Adventure, Fantasy',
      Year: '2003',
      photo: `../assets/images/TLOR.jpeg`,
      Rating: 4.8,
      Review: 'Gandalf and Aragorn lead the World of Men against Sauron army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.'
    },
    {
      id: 7,
      Name: 'Pulp Fiction',
      Genre: 'Crime, Drama',
      Year: '1994',
      photo: `../assets/images/PF.jpeg`,
      Rating: 4.7,
      Review: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    },
    {
      id: 8,
      Name: 'Spirited Away',
      Genre: 'Animation, Adventure, Family',
      Year: '2001',
      photo: `../assets/images/SA.jpeg`,
      Rating: 4.7,
      Review: 'In this animated feature by Hayao Miyazaki, ten-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park.'
    },
    {
      id: 9,
      Name: 'The Matrix',
      Genre: 'Action, Sci-Fi',
      Year: '1999',
      photo: `../assets/images/TM.jpeg`,
      Rating: 4.7,
      Review: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },
    {
      id: 10,
      Name: 'Parasite',
      Genre: 'Comedy, Drama, Thriller',
      Year: '2019',
      photo: `../assets/images/TP.jpeg`,
      Rating: 4.8,
      Review: 'This South Korean black comedy thriller by Bong Joon-ho explores class divide and social inequality through the intertwining lives of two families—the wealthy Parks and the destitute Kims. The film is a masterful commentary on the dynamics of capitalism, filled with unexpected twists and sharp social critique, making it a groundbreaking achievement in cinema.'
    },
    {
      id: 11,
      Name: 'Gladiator',
      Genre: ' Action, Adventure, Drama',
      Year: '2000',
      photo: `../assets/images/TG.jpeg`,
      Rating: 4.7,
      Review: 'Directed by Ridley Scott, this epic historical drama stars Russell Crowe as Maximus Decimus Meridius, a betrayed Roman general who seeks vengeance against the corrupt emperor who murdered his family and sent him into slavery. "Gladiator" is celebrated for its intense performances, grandiose scale, compelling story of revenge and honor, and its revival of the historical epic genre in Hollywood.'
    }
  ];

  constructor() { }
  getAllMovieDetails():MovieDetails[]{
    return this.MovieDetailsList;
  }
  getMovieinformationById(id:Number):MovieDetails | undefined{
    return this.MovieDetailsList.find(movieDetails=>movieDetails.id === id);
  }
}
