import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', component: TableComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
