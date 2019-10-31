import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';
import { Planet } from 'src/app/models/Planet';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  columnNames = ['name', 'population'];
  dataSource: MatTableDataSource<Planet>;
  planets: Planet[];

  constructor(private swService: SwService) { }

  ngOnInit() {
      this.swService.getPlanets().subscribe (data => {
      this.planets = data['results'];
      this.dataSource = new MatTableDataSource<Planet>(this.planets);
    });
  }

}
