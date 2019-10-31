import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Api = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})

export class SwService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(`${Api}/people/`);
  }

  getPeopleSearch(pram: string) {
    return this.http.get(`${Api}/people/?search=${pram}`);
  }

  getFilms() {
    return this.http.get(`${Api}/films/`);
  }

  getFilmsSearch(pram: string) {
    return this.http.get(`${Api}/films/?search=${pram}`);
  }

  getShips() {
    return this.http.get(`${Api}/starships/`);
  }

  getShipsSearch(pram: string) {
    return this.http.get(`${Api}/starships/?search=${pram}`);
  }

  getPlanets() {
    return this.http.get(`${Api}/planets/`);
  }

  getPlanetsSearch(pram: string) {
    return this.http.get(`${Api}/planets/?search=${pram}`);
  }
}
