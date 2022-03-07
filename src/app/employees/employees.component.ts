import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared-components/dialog/dialog.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeButtonMenu = [
    {value: 'All Employees'},
    {value: 'Active Employees'},
    {value: 'Incomplete Employees'},
    {value: 'Portal Enabled Employees'},
    {value: 'Portal Disabled Employees'},
    {value: 'Terminated Employees'},
  ]
  employeeButtonValue: string = 'Active Employees'

  constructor(private router: Router,
              private dialog: MatDialog ) { }

  ngOnInit(): void {
    console.log(this.router.url)
  }

  openModal(): void {
    this.dialog.open(DialogComponent, { data: {title: 'hey i am material dialog'} })
  }

}
