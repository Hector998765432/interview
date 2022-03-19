import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//! Components
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';

//! CSS

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzInputModule,
    NzCardModule,
    NzAvatarModule,
    NzDescriptionsModule,
    NzTagModule,
    NzDrawerModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    NzResultModule,
    NzCarouselModule,
    NzSelectModule,
    NzDividerModule
  ],
})
export class DishesModule {}
