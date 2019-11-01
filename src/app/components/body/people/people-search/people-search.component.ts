import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {

  constructor(private swService: SwService, private form: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  columnNames = ['name','gender'];
  dataSource: MatTableDataSource<Person>;
  people: Person[];
  searchForm: FormGroup;

  createForm() {
    this.searchForm = this.form.group({
      search: new FormControl
    });
  }

  onSubmit() {
    this.swService.getPeopleSearch(this.searchForm.value['search']).subscribe(data => {
      this.people = data['results'];
      this.dataSource = new MatTableDataSource<Person>(this.people);
    });
  }
}
