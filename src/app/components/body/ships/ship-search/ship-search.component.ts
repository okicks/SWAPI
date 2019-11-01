import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/models/Ship';
import { SwService } from 'src/app/services/sw.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ship-search',
  templateUrl: './ship-search.component.html',
  styleUrls: ['./ship-search.component.css']
})
export class ShipSearchComponent implements OnInit {

  constructor(private swService: SwService, private form: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  columnNames = ['name','model'];
  dataSource: MatTableDataSource<Ship>;
  ships: Ship[];
  searchForm: FormGroup;

  createForm() {
    this.searchForm = this.form.group({
      search: new FormControl
    });
  }

  onSubmit() {
    this.swService.getShipsSearch(this.searchForm.value['search']).subscribe(data => {
      this.ships = data['results'];
      this.dataSource = new MatTableDataSource<Ship>(this.ships);
    });
  }
}
