import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { EmployeesComponent } from './employees/employees.component';
import { Form16Component } from './form16/form16.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { PayrunsComponent } from './payruns/payruns.component';
import { PoiComponent } from './poi/poi.component';
import { ReimburseComponent } from './reimburse/reimburse.component';
import { ReportsComponent } from './reports/reports.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'payruns',component:PayrunsComponent},
  {path:'reimburse',component:ReimburseComponent},
  {path:'poi',component:PoiComponent},
  {path:'salaryRevise',component:SalaryComponent},
  {path:'form16',component:Form16Component},
  {path:'loans',component:LoansComponent},
  {path:'reports',component:ReportsComponent},
  {path:'contacts',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
