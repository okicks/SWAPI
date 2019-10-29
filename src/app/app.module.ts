import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PeopleComponent } from './components/body/people/people.component';
import { ShipsComponent } from './components/body/ships/ships.component';
import { FilmsComponent } from './components/body/films/films.component';
import { SwService } from './services/sw.service';

const routes = [
  {path: '**', component: BodyComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'ships', component: ShipsComponent},
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
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [SwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
