import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TableComponent } from './table/table.component';
import { BasicTableComponent } from './basic-table/basic-table.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'basic', component: BasicTableComponent },
  { path: '', component: TableComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
