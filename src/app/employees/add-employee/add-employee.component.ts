import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeName!: FormGroup
  basicsForm!: FormGroup

  // basicsFormData:any = {
  //   row1: [
  //     {label: 'First Name', formControlName: 'firstName'},
  //     {label: 'Middle Name', formControlName: 'middleName'},
  //     {label: 'Lat Name', formControlName: 'lastName'}
  //   ],
  //   row2: [
  //     {label: 'First Name', formControlName: 'firstName'},
  //     {label: 'Middle Name', formControlName: 'middleName'},
  //     {label: 'Lat Name', formControlName: 'lastName'}
  //   ]
  // }
  basicsFormData:any = [
    [
      {
        type: 'input',
        label: 'First Name',
        formControlName: 'firstName'
      },
      {
        type: 'input',
        label: 'Middle Name', 
        formControlName: 'middleName'
      },
      {
        type: 'input',
        label: 'Last Name', 
        formControlName: 'lastName'
      }
    ],
    [
      {
        type: 'input',
        label: 'Employee ID', 
        formControlName: 'employeeId'
      },
      {
        type: 'select',
        label: 'Gender',
        options: ['Male', 'Female', 'Others'],
        formControlName: 'gender'
      },
    ],
    [
      {
        type: 'date',
        label: 'Date of Joining',
        formControlName: 'dateOfJoining'
      },
      {
        type: 'auto-complete',
        label: 'Designation',
        formControlName: 'designation'
      }
    ],
    [
      {
        type: 'input',
        label: 'Work Email',
        formControlName: 'workEmail'
      },
    ],
    [
      {
        type: 'input',
        label: 'Department',
        formControlName: 'department'
      },
      {
        type: 'select',
        label: 'Work Location',
        options: ['location A', 'location B'],
        formControlName: 'workLocation'
      }
    ]
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.basicsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      designation: ['', Validators.required],
      substatialInterest: ['', Validators.required],
      workEmail: ['', Validators.required],
      department: ['', Validators.required],
      workLocation: ['', Validators.required],
      enablePortalAccess: ['', Validators.required],
      professionalTax: ['', Validators.required]
    })
  }

}
