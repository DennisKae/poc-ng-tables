import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { CompanyData } from '../company-data';
import { DatatableComponent, ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
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

  columns: TableColumn[] = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;

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
}
