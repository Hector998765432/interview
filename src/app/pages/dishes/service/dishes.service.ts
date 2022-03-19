import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dishes } from 'src/app/ïnterfaces/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  constructor(private http: HttpClient) {}

  url: string = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

  getDishes(letter: string) {
    return this.http.get<dishContainer>(`${this.url}${letter}`);
  }
}

interface dishContainer {
  meals: [Dishes];
}
