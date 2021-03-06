import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TableComponent } from './table/table.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TableComponent,
    BasicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'Keine Daten gefunden.',
        totalMessage: 'Datensätze ausgewählt',
        selectedMessage: ' '        
      }
    }),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
