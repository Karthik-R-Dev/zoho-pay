import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../shared-components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog) {

   }

  ngOnInit(): void {
  }

  openModal(): void {
    let data ={
      URL:"https://www.youtube.com/watch?v=XxO40CoIaPA&t=1s"
    }
    this.dialog.open(DialogComponent,{data:data});
    }
  

}
