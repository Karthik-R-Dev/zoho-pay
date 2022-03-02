import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url)
  }

}
