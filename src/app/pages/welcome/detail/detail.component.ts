import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/ïnterfaces/meal';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() meal!: Meal;

  tags: Array<any> = [];
  ingredients: Array<any> = [];
  instructions: Array<any> = [];
  measures: Array<any> = [];
  safeUrl: any;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    console.log(this.meal);
    this.getMealTag();
    this.getIngredients();
    this.getInstructions();
    this.getMeasures();
    this.prepareVideos();
  }

  getMealTag() {
    if (this.meal.strTags) {
      this.tags = this.meal.strTags.split(',');
    }

    console.log(this.tags);
  }

  getIngredients() {
    let array = [];
    for (let [key, value] of Object.entries(this.meal)) {
      if (key.includes('strIngredient')) {
        array.push(value);
      }
    }
    this.ingredients = array.filter((x) => x != '' && x != null && x != ' ');
  }

  getInstructions() {
    if (this.meal.strInstructions) {
      this.instructions = this.meal.strInstructions.split('.');
    }
  }

  getMeasures() {
    let array = [];
    for (let [key, value] of Object.entries(this.meal)) {
      if (key.includes('strMeasure')) {
        array.push(value);
      }
    }
    this.measures = array.filter((x) => x != '' && x != null && x != ' ');
  }

  prepareVideos() {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.meal.strYoutube
    );
  }
}
