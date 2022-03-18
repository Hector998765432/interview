import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Ingredient } from 'src/app/ïnterfaces/ingredient';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private IngredientService: IngredientService) {}

  private unsubscribeAll$: Subject<void> = new Subject<void>();

  loading: boolean = false;
  searchText: string = ''

  ingredients: Ingredient[] = [];
  displayIngredients: Ingredient[] = [];

  //* *************************** LifeCycles

  ngOnInit(): void {
    this.getIngredients();
  }

  ngOnDestroy() {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  //* ***************************
  //* *************************** resolve data

  getIngredients() {
    this.loading = true;
    this.IngredientService.getIngredient()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe({
        next: (data) => {
          this.ingredients = this.displayIngredients = data.meals;
          console.log(this.ingredients);
        },
        error: () => (this.loading = false),
        complete: () => (this.loading = false),
      });
  }
}
