import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { ExtraOptions, RouterModule } from '@angular/router';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//! Components

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

//! CSS

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzMessageModule } from 'ng-zorro-antd/message';

registerLocaleData(en);

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: QuicklinkStrategy,
  relativeLinkResolution: 'legacy',
  useHash: true,
};

@NgModule({
  declarations: [AppComponent, LayoutComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    ReactiveFormsModule,
    QuicklinkModule,
    NzGridModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
