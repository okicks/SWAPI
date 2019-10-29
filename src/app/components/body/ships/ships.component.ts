import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';
import { Ship } from 'src/app/models/Ship';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  columnNames = ['Name'];
  dataSource: MatTableDataSource<Ship>;

  constructor(private swService: SwService) { }

  ngOnInit() {
    this.swService.getFilms().subscribe((ships: Ship[]) => {
      this.dataSource = new MatTableDataSource<Ship>(ships);
    });
  }

}
