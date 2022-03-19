import { Component, OnInit, OnDestroy } from '@angular/core';
import { DishesService } from '../service/dishes.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Dishes } from 'src/app/ïnterfaces/dishes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private DishesService: DishesService) {}

  private unsubscribeAll$: Subject<void> = new Subject<void>();

  loading: boolean = false;
  dishes: Dishes[] = [];
  displayDishes: Dishes[] = [];

  array: Array<any> = [];
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  selectedValue: string = 'a';

  //* *************************** LifeCycles

  ngOnInit(): void {
    this.getDishes('a');
  }

  ngOnDestroy() {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  //* ***************************
  //* *************************** resolve data
  getDishes(letter: string) {
    this.loading = true;
    this.DishesService.getDishes(letter)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe({
        next: (data) => {
          this.dishes = this.displayDishes = data.meals;
          this.getRandomItem();
          console.log(this.dishes);
        },
        error: () => (this.loading = false),
        complete: () => (this.loading = false),
      });
  }

  getRandomItem() {
    //! Si no encuentra mas de 3 platillos, conserva el carusel anterior
    if (this.dishes.length >= 3) {
      this.array = [];
      for (let index = 0; index < 3; index++) {
        this.array.push(
          this.dishes[Math.floor(Math.random() * this.dishes.length)]
            .strMealThumb
        );
      }
    }
  }

  //!Nota: no encontré alguna url que trajera todos los platillos por lo que los traigo por letra
  //! y dejo que filtren por letra inicial

  //! Por Esto, para el carrusel de fotos, tomaré 3 en vez de 5 platillos ya que en algunas letras vienen pocos items
}
