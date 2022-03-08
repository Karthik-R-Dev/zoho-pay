import { Component, OnInit, Input } from '@angular/core';

export interface data {
  imgSource: string
  title: string
  description: string
  buttonValue: string
  routeTo: string
}
@Component({
  selector: 'app-show-no-data',
  templateUrl: './show-no-data.component.html',
  styleUrls: ['./show-no-data.component.css']
})
export class ShowNoDataComponent implements OnInit {
  @Input() emptyData!: data

  constructor() { }

  ngOnInit(): void {
  }

}
