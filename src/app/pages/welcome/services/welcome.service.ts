import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from 'src/app/ïnterfaces/meal';
@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  url: string = 'https://www.themealdb.com/api/json/v1/1/random.php';

  getDish() {
    return this.http.get<MealContainer>(this.url);
  }
}

interface MealContainer {
  meals: [Meal];
}
