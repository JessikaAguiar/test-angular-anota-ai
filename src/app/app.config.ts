import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import { routes } from './app.route';
import {BrowserModule} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, RouterModule, HttpClientModule),
    provideAnimations()
  ]
};
