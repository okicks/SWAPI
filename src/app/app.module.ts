import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/* https://angular.io/guide/http */

import {
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PeopleComponent } from './components/body/people/people.component';
import { ShipsComponent } from './components/body/ships/ships.component';
import { FilmsComponent } from './components/body/films/films.component';

const routes = [
  {path: '**', component: AppComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PeopleComponent,
    ShipsComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
