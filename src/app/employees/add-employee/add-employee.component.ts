import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared-components/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeName!: FormGroup
  basicsForm!: FormGroup
  salaryDetailsForm!: FormGroup
  personalInfoForm!: FormGroup
  bankTransferDetailsForm!: FormGroup
  isLinear:boolean = true
  monthlyBasic: number = 0
  yearlyBasic: number = 0
  monthlyHouseRentalAllowance: number = 0
  yearlyHouseRentalAllowance: number = 0
  monthlyCTC:number = 0
  monthlyFixedAllowance: number = 0

  basicsFormData:any = [
    [
      {
        type: 'input',
        label: 'First Name',
        formControlName: 'firstName',
        formGroup: 'basicsForm'
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
        type: 'datepicker',
        label: 'Date of Joining',
        formControlName: 'dateOfJoining'
      },
      {
        type: 'autocomplete',
        label: 'Designation',
        options: ['autocomplete'],
        formControlName: 'designation',
      }
    ],
    [
      {
        type: 'checkbox',
        label: 'Employee is a Director/person with substantial interest in the company.',
        icon: 'info',
        formControlName: 'substatialInterest'
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
    ],
    [
      {
        type: 'checkbox',
        label: 'Enable Portal Access',
        text: 'The employee will be able to view payslips, submit their IT declaration and create reimbursement claims through the employee portal.',
        formControlName: 'enablePortalAccess'
      }
    ]
  ]

  personalInfoFormData: any = [
    [
      {
        type: 'input',
        label: 'Personal Email Address',
        formControlName: 'personalEmailAddress'
      },
      {
        type: 'input',
        label: 'Mobile Number',
        formControlName: 'mobileNumber'
      }
    ],
    [
      {
        type: 'datepicker',
        label: 'Date of Birth',
        formControlName: 'dateOfBirth'
      },
      {
        type: 'input',
        label: 'age',
        formControlName: 'age'
      }
    ],
    [
      {
        type: 'input',
        label: "Father's Name",
        formControlName: 'fathersName'
      },
      {
        type: 'input',
        label: 'pan',
        formControlName: 'pan'
      }
    ],
    [
      {
        type: 'input',
        label: 'Address Line 1',
        formControlName: 'addressLine1'
      }
    ],
    [
      {
        type: 'input',
        label: 'Address Line 2',
        formControlName: 'addressLine2'
      }
    ],
    [
      {
        type: 'input',
        label: 'City',
        formControlName: 'city'
      },
      {
        type: 'select',
        label: 'State',
        options: ['Andaman and Nicobar Island'],
        formControlName: 'state'
      },
      {
        type: 'input',
        label: 'PIN Code',
        formControlName: 'pincode'
      }
    ]
  ]

  bankTransferDetails:any =  [
    [
      {
        type: 'input',
        label: 'Account Holder Name',
        formControlName: 'accountHolderName'
      }
    ],
    [
      {
        type: 'input',
        label: 'Bank Name',
        formControlName: 'bankName'
      }
    ],
    [
      {
        type: 'input',
        label: 'Account Number',
        formControlName: 'accountNumber'
      },
      {
        type: 'input',
        label: 'Re-enter Account Number',
      }
    ],
    [
      {
        type: 'input',
        label: 'IFSC',
        formControlName: 'ifsc'
      },
      {
        type: 'radio',
        label: 'Account Type',
        options: ['Current', 'Savings'],
        formControlName: 'accountType'
      }
    ]
  ]

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.basicsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      designation: ['', Validators.required],
      substatialInterest: [false],
      workEmail: ['', Validators.required],
      department: ['', Validators.required],
      workLocation: ['', Validators.required],
      enablePortalAccess: [false],
      professionalTax: ['', ]
    })  
    this.salaryDetailsForm = this.formBuilder.group({
      annualCTC: ['', Validators.required],
      basic: [50.00],
      houseRentAllowance: [50.00],
      conveyanceAllowanceForMonth: [10],
      fixedAmount: ['']
    })
    this.personalInfoForm = this.formBuilder.group({
      personalEmailAddress: [''],
      mobileNumber: [''],
      dateOfBirth: ['', Validators.required],
      age: [''],
      fathersName: ['', Validators.required],
      pan: [''],
      addressLine1: [''],
      addressLine2: [''],
      city: [''],
      state: [''],
      pincode: ['']
    })

    this.bankTransferDetailsForm = this.formBuilder.group({
      accountHolderName: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifsc: ['', Validators.required],
      accountType: ['Savings', Validators.required],
    })
  }

  openModal(type: string): void {
    if (type === "cancel") {
      let data = {
        icon: 'error',
        label: 'You might have some unsaved changes. Are you sure you want to leave this page?',
        primaryButtonValue: 'Stay on this page',
        secondaryButtonValue: 'Leave this page'
      }
      let dialog = this.dialog.open(DialogComponent, { data: data})
      dialog.afterClosed().subscribe(result => {
        if ( result === "back") {
          this.router.navigate(['/employees'])
        }
      })
    }
  }

  annualCTC(): void {
    let annualCTC = this.salaryDetailsForm.value.annualCTC
    this.monthlyCTC = Math.ceil(annualCTC / 12)
    if (annualCTC !== 0) {
      let basic = this.salaryDetailsForm.value.basic
      let houseRentAllowance = this.salaryDetailsForm.value.houseRentAllowance
      this.yearlyBasic = Math.ceil(annualCTC * (basic / 100))
      this.monthlyBasic = Math.ceil(this.yearlyBasic / 12)
      this.yearlyHouseRentalAllowance = Math.ceil(this.yearlyBasic * (houseRentAllowance / 100))
      this.monthlyHouseRentalAllowance = Math.ceil(this.monthlyBasic * (houseRentAllowance / 100))
      this.monthlyFixedAllowance = this.monthlyCTC - (this.monthlyBasic + this.monthlyHouseRentalAllowance + this.salaryDetailsForm.value.conveyanceAllowanceForMonth)
    }
  }

}
