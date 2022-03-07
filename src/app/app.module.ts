import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrunsComponent } from './payruns/payruns.component';
import { ReimburseComponent } from './reimburse/reimburse.component';
import { PoiComponent } from './poi/poi.component';
import { SalaryComponent } from './salary/salary.component';
import { Form16Component } from './form16/form16.component';
import { LoansComponent } from './loans/loans.component';
import { ReportsComponent } from './reports/reports.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DialogComponent } from './shared-components/dialog/dialog.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { MatStepperModule } from '@angular/material/stepper'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatDialogModule } from '@angular/material/dialog';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatRadioModule } from '@angular/material/radio'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    PayrunsComponent,
    ReimburseComponent,
    PoiComponent,
    SalaryComponent,
    Form16Component,
    LoansComponent,
    ReportsComponent,
    ContactsComponent,
    DialogComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
