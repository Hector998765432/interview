import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//! Components

import { MainComponent } from './main/main.component';

//! CSS

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzInputModule,
  ],
})
export class WelcomeModule {}
