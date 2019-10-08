import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { CompanyData } from '../company-data';
import { DatatableComponent, ColumnMode, TableColumn, SelectionType, SortType, SortDirection, SortPropDir } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  limit = 20;

  isLoading = false;

  rows: Observable<CompanyData[]>;
  private cachedData: CompanyData[];
  selected: CompanyData[] = [];

  columns: TableColumn[] = [
    { name: 'Name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  allColumns: TableColumn[] = [
    { name: 'Name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  sorts: SortPropDir[] = [{ prop: 'Name', dir: SortDirection.asc }];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  columnMode = ColumnMode.force;
  selectionType = SelectionType.checkbox;
  sortType = SortType.multi;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.rows = Observable.create(subscriber => {
      this.dataService.getCompanyData(data => {
        this.cachedData = [...data];
        subscriber.next(data);
        subscriber.complete();
        this.isLoading = false;
      });
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.cachedData.filter(function (d) {
      return !val || d.name.toLowerCase().indexOf(val) !== -1 || d.company.toLowerCase().indexOf(val) !== -1;
    });

    // update the rows
    this.rows = Observable.create(subscriber => { subscriber.next(temp); subscriber.complete(); });

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  editUser(user: CompanyData) {
    alert(`Editing ${user.name}...`);
  }

  toggle(col) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col) {
    return (
      this.columns.find(c => {
        return c.name === col.name;
      }) !== undefined
    );
  }

  removeSpaces(input: string): string {
    if (!input || input === undefined) {
      return input;
    }

    return input.replace(" ", "");
  }
}
