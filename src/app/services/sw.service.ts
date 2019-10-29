import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Api = 'https://swapi.co/api';

@Injectable({
  providedIn: 'root'
})

export class SwService {

  constructor(private http: HttpClient) { }

  getPeople(){
    return this.http.get(`${Api}/people/`);
  }

  getFilms(){
    return this.http.get(`${Api}/films/`);
  }

  getShips(){
    return this.http.get(`${Api}/starships/`);
  }
}
