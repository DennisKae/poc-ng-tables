import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  selectedPage = 1;

  source: LocalDataSource;

  settings = {
    noDataMessage: 'Keine Daten gefunden...',
    mode: 'internal',
    attr: {
      id: 'smart-table-test',
      class: 'table table-sm table-bordered'
    },
    add: {
      addButtonContent: '<span class="fas fa-fw fa-plus"></span>',
      createButtonContent: '<span class="fas fa-fw fa-check-circle"></span>',
      cancelButtonContent: '<span class="nb-times-circle"></span>',
    },
    edit: {
      editButtonContent: '<span class="fas fa-fw fa-pen" title="bearbeiten"></span>',
      saveButtonContent: '<span class="fas fa-fw fa-check-circle"></span>',
      cancelButtonContent: '<span class="nb-times-circle"></span>',
    },
    delete: {
      deleteButtonContent: '<span class="fas fa-fw fa-trash"></span>',
      confirmDelete: true,
    },
    pager: {
      perPage: 2
    },
    actions: {
      columnTitle: 'Aktionen',
      // add: false,  
      position: 'right'
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        filter: false
      },
      name: {
        title: 'Full Name',
        type: 'string',
        filter: false
      },
      username: {
        title: 'User Name',
        type: 'string',
        filter: false
      },
      email: {
        title: 'Email',
        type: 'string',
        filter: false
      }
    }
  };



  constructor(
    private dataService: DataService
  ) {
    this.source = new LocalDataSource(this.dataService.getData());
  }

  ngOnInit() {
  }

  selectPage(page: number) {
    this.source.setPage(page);
  }

  onSearch(query: string = '') {

    if (query.length === 0) {
      this.source.reset();
      console.log("table filter resetted.");
      return;
    }

    if (query.length < 2) {
      return;
    }
    console.log("searching for: " + query);
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

}
