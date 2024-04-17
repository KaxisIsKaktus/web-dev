import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

const routes: Routes = [
  {path: "", redirectTo: 'app-nav-bar', pathMatch: 'full'},
  {path: 'app-companies', component:CompaniesComponent},
  {path: 'app-vacancies', component:VacanciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
