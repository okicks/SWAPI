import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';
import { Film } from 'src/app/models/Film';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  columnNames = ['title','director'];
  dataSource: MatTableDataSource<Film>;
  films: Film[];

  constructor(private swService: SwService) { }

  ngOnInit() {
      this.swService.getFilms().subscribe(data => {
      this.films = data['results'];
      this.dataSource = new MatTableDataSource<Film>(this.films);
    });

  }
}
