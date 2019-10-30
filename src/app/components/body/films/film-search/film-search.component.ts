import { Component, OnInit } from '@angular/core';
import { SwService } from 'src/app/services/sw.service';
import { Film } from 'src/app/models/Film';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  constructor(private swService: SwService, private form: FormBuilder) { 
    this.createForm();
  }

  columnNames = ['title'];
  dataSource: MatTableDataSource<Film>;
  films: Film[];
  searchForm: FormGroup;

  ngOnInit() {
  }

  createForm() {
    this.searchForm = this.form.group({
      search: new FormControl
    });
  }

  onSubmit() {
    this.swService.getFilmsSearch(this.searchForm.value['search']).subscribe(data => {
      this.films = data['results'];
      this.dataSource = new MatTableDataSource<Film>(this.films);
    });
  }
}
