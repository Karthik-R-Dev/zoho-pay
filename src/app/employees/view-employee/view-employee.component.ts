import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/shared-components/show-no-data/show-no-data.component';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id!: string
  loansEmptyData: data = {
    imgSource: 'https://css.zohostatic.in/zfpayroll/zpayroll//assets/images/empty-states/ind/loan.svg',
    description: "This employee hasn't taken any loans yet.",
    buttonValue: 'RECORD BUTTON',
    title: '',
    routeTo: ''
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.id = this.activatedRoute.snapshot.params['id']
  }

}
