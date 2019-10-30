import { Component } from '@angular/core';
import { Http, Response } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWAPI';
  private apiUrl = 'https://swapi.co/';
  data: any = {};

  constructor(private http: Http) {
    console.log('Here is the information:');
    this.getData()
  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json())
  }

}
