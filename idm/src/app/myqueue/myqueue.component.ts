import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MyqueueService } from './myqueue.service';
import { RoleQueue } from './myqueue';

@Component({
  selector: 'app-myqueue',
  templateUrl: './myqueue.component.html',
  styleUrls: ['./myqueue.component.css']
})
export class MyqueueComponent implements OnInit {

  dataSource1: MatTableDataSource<any>;
  dataSource2: MatTableDataSource<RoleQueue>;

  assignmentColumn: string[] = [
    'select', 'assignmentId', 'action', 'userName', 'roleName', 'enabled', 'createdOn', 'createdBy', 'modifiedOn', 'modifiedBy', 'status'
  ];
  roleColumn: string[] = [
    'select', 'action', 'name', 'description', 'approvalType', 'createdOn', 'createdBy', 'modifiedOn', 'modifiedBy', 'status'
  ];

  assignmentSelect = new SelectionModel<any>(true, []);
  roleSelect = new SelectionModel<any>(true, []);

  constructor(private myqueueService: MyqueueService) {
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<RoleQueue>();
   }

  ngOnInit() {
    this.loadRoleQueue();
  }

  loadRoleQueue(): void {
    this.myqueueService.loadRoleQueue().subscribe((data: RoleQueue[]) => {
      this.dataSource2.data = data;
    });
  }

  count(): number {
    return this.dataSource2.data.length;
  }
}
