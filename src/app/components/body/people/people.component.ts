import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';
import { Person } from 'src/app/models/Person';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  columnNames = ['name'];
  dataSource: MatTableDataSource<Person>;
  people: Person[];

  constructor(private swService: SwService) { }

  ngOnInit() {
    this.swService.getPeople().subscribe(data => {
      this.people = data['results'];
      this.dataSource = new MatTableDataSource<Person>(this.people);
    });
  }

}
