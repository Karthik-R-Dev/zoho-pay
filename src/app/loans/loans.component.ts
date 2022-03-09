import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoansComponent implements OnInit {

  loansButton!: string
  loansButtonMenu = [
    {value: 'All loans', routeTo: ''},
    {value: 'Open loans', routeTo: ''},
    {value: 'Paused loans', routeTo: ''},
    {value: 'Closed loans', routeTo: ''},
  ]
  step: number = 1
  employeeList:string[]=[
    'Karthi',
    'Gowtham',
    'Akilesh'
  ]
  searchText!:any

  constructor() { }

  ngOnInit(): void {
    this.loansButton = 'Pending loans'
  }

  toggleFilter(): void {
    if (this.step === 0) {
      this.step += 1
    } else {
      this.step = 0
    }
  }

}
