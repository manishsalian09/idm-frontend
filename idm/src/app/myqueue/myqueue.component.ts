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
    'select', 'roleId', 'action', 'roleName', 'roleDescription', 'createdOn', 'createdBy', 'modifiedOn', 'modifiedBy', 'status'
  ];

  assignmentSelect = new SelectionModel<any>(true, []);
  roleSelect = new SelectionModel<any>(true, []);

  constructor(private myqueueService: MyqueueService) {
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<RoleQueue>();
   }

  ngOnInit() {
    let roleQueueArr: RoleQueue[] = [];
    this.myqueueService.loadRoleQueue().subscribe((data: any[]) => {
      data.forEach(element => {
        let roleQueue: RoleQueue = new RoleQueue();
        roleQueue.roleId = element.id;
        roleQueue.action = element.action
        roleQueue.createdBy = element.createdBy
        roleQueue.createdOn = element.createdOn
        roleQueue.roleName = element.roleName
        roleQueue.modifiedBy = element.modifiedBy
        roleQueue.modifiedOn = element.modifiedOn
        roleQueue.roleDescription = element.roleDescription;
        roleQueue.status = element.status;
        roleQueueArr.push(roleQueue);
      });
      this.dataSource2.data = roleQueueArr;
    });
  }
}
