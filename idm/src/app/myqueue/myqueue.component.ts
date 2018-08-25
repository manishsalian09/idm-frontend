import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-myqueue',
  templateUrl: './myqueue.component.html',
  styleUrls: ['./myqueue.component.css']
})
export class MyqueueComponent implements OnInit {

  dataSource1: MatTableDataSource<any>;
  dataSource2: MatTableDataSource<any>;

  assignmentColumn: string[] = [
    'select', 'assignmentId', 'action', 'userName', 'roleName', 'enabled', 'createdOn', 'createdBy', 'modifiedOn', 'modifiedBy', 'status'
  ];
  roleColumn: string[] = [
    'select', 'roleId', 'action', 'roleName', 'roleDescription', 'createdOn', 'createdBy', 'modifiedOn', 'modifiedBy', 'status'
  ];
  
  assignmentSelect = new SelectionModel<any>(true, []);
  roleSelect = new SelectionModel<any>(true, []);

  constructor() {
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
   }

  ngOnInit() {
  }

}
