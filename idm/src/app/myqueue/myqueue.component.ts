import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MyqueueService } from './myqueue.service';
import { RoleApprover } from './myqueue';

@Component({
  selector: 'app-myqueue',
  templateUrl: './myqueue.component.html',
  styleUrls: ['./myqueue.component.css']
})
export class MyqueueComponent implements OnInit {

  dataSource1: MatTableDataSource<any>;
  dataSource2: MatTableDataSource<RoleApprover>;

  assignmentColumn: string[] = [
    'select', 'assignmentId', 'action', 'userName', 'roleName', 'enabled', 'createdOn', 'createdBy', 'modifiedOn', 'modifiedBy', 'status'
  ];
  roleColumn: string[] = [
    'select', 'action', 'name', 'description', 'createdOn', 'createdBy', 'modifiedOn', 'modifiedBy', 'status'
  ];

  assignmentSelect = new SelectionModel<any>(true, []);
  roleSelect = new SelectionModel<any>(true, []);

  constructor(private myqueueService: MyqueueService) {
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<RoleApprover>();
   }

  ngOnInit() {
    this.loadRoleQueue();
  }

  loadRoleQueue() {
    this.myqueueService.loadRoleQueue().subscribe((data: RoleApprover[]) => {
      this.dataSource2.data = data;
    });
  }
}
