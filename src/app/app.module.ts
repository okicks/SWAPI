import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PeopleComponent } from './components/body/people/people.component';
import { ShipsComponent } from './components/body/ships/ships.component';
import { FilmsComponent } from './components/body/films/films.component';
import { SwService } from './services/sw.service';
import { ShipSearchComponent } from './components/body/ships/ship-search/ship-search.component';
import { PeopleSearchComponent } from './components/body/people/people-search/people-search.component';
import { FilmSearchComponent } from './components/body/films/film-search/film-search.component';

const routes = [
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'ships', component: ShipsComponent},
  {path: 'films/search', component: FilmSearchComponent},
  {path: 'people/search', component: PeopleSearchComponent},
  {path: 'ships/search', component: ShipSearchComponent},
  {path: '**', component: BodyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PeopleComponent,
    ShipsComponent,
    FilmsComponent,
    ShipSearchComponent,
    PeopleSearchComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
