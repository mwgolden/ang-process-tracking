import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationsDetailsComponent } from './applications-details/applications-details.component';

const routes: Routes = [
  { path: 'applications', component: ApplicationsComponent },
  { path: 'application/:id', component: ApplicationsDetailsComponent },
  { path: 'application', component: ApplicationsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
