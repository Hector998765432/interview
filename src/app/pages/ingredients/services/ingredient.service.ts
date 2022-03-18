import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from 'src/app/ïnterfaces/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor(private http: HttpClient) {}

  url: string = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

  getIngredient() {
    return this.http.get<ingredientContainer>(this.url);
  }
}

interface ingredientContainer {
  meals: [Ingredient];
}
