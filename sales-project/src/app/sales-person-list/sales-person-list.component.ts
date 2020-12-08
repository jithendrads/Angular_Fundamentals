import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  salesPersonList:SalesPerson[]=[
    new SalesPerson("jithendra1","srinivas1","jithendrads1@gmail.com",1000),
    new SalesPerson("jithendra2","srinivas2","jithendrads2@gmail.com",2000),
    new SalesPerson("jithendra3","srinivas3","jithendrads3@gmail.com",3000),
    new SalesPerson("jithendra4","srinivas4","jithendrads4@gmail.com",4000),
    new SalesPerson("jithendra5","srinivas5","jithendrads5@gmail.com",5000)

  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
