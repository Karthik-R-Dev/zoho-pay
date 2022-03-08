import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reimburse',
  templateUrl: './reimburse.component.html',
  styleUrls: ['./reimburse.component.css']
})
export class ReimburseComponent implements OnInit {

  claimsButton!: string
  claimsButtonMenu = [
    {value: 'All Claims', routeTo: ''},
    {value: 'Pending Claims', routeTo: ''},
    {value: 'Approved Claims', routeTo: ''},
    {value: 'Rejected Claims', routeTo: ''},
  ]

  constructor() { }

  ngOnInit(): void {
    this.claimsButton = 'Pending Claims'
  }

}
