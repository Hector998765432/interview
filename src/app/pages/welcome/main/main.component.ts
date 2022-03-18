import { Component, OnInit, OnDestroy } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';
import { LoginComponent } from '../../../login/login.component';

//* Library Imports

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Meal } from 'src/app/ïnterfaces/meal';
import { User } from 'src/app/ïnterfaces/user';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private _WelcomeService: WelcomeService,
    private drawerService: NzDrawerService
  ) {}

  private unsubscribeAll$: Subject<void> = new Subject<void>();

  randomMeal!: Meal;
  loading: boolean = false;
  tags: Array<any> = [];

  userInfo!: User;

  //* *************************** LifeCycles

  ngOnInit(): void {
    this.getUserData();
    this.getRandomDish();
  }

  ngOnDestroy() {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  //* *************************** User Control

  getUserData() {
    this.userInfo = LoginComponent.defaultUser;
  }

  //* ***************************
  //* *************************** resolve data

  getRandomDish() {
    this.loading = true;
    this._WelcomeService
      .getDish()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe({
        next: (data) => {
          this.randomMeal = data.meals[0];
          console.log(this.randomMeal);
          console.log(this.randomMeal.strMealThumb);
          this.getMealTag(this.randomMeal);
        },
        error: () => (this.loading = false),
        complete: () => (this.loading = false),
      });
  }

  getMealTag(meal: Meal) {
    if (meal.strTags) {
      this.tags = meal.strTags.split(',');
    }

    console.log(this.tags);
  }

  //* ***************************
  //* *************************** drawer created

  drawerCreated!: NzDrawerRef;
  mealData!: Meal;

  openComponent(content: any, data: Meal, title: string): void {
    this.mealData = data;
    this.drawerCreated = this.drawerService.create({
      nzTitle: title,
      nzContent: content,
      nzWidth: '80vh',
    });

    this.drawerCreated.afterOpen.subscribe(() => {
      console.log('Drawer(Component) open');
    });

    this.drawerCreated.afterClose.subscribe((data) => {
      console.log(data);
    });
  }
}
