import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Planet } from 'src/app/models/Planet';

@Component({
  selector: 'app-planet-search',
  templateUrl: './planet-search.component.html',
  styleUrls: ['./planet-search.component.css']
})
export class PlanetSearchComponent implements OnInit {

  constructor(private swService: SwService, private form: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  columnNames = ['name','population'];
  dataSource: MatTableDataSource<Planet>;
  planets: Planet[];
  searchForm: FormGroup;

  createForm(){
    this.searchForm = this.form.group({
      search: new FormControl
    });
  }

  onSubmit() {
    this.swService.getPlanetsSearch(this.searchForm.value['search']).subscribe(data => {
      this.planets = data['results'];
      this.dataSource = new MatTableDataSource<Planet>(this.planets);
    });
  }

}
