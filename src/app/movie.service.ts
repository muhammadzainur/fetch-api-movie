// src/app/movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'd04eb72c2f862d7920f53fed5d8378e7'; // Replace with your TMDb API key
  private apiUrl =
    'https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
