import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AddDetailsComponent } from '../app/add-details/add-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-details', component: AddDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
