import { Component, OnInit, ViewChild, Input, AfterViewInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit, OnChanges {

  private selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input("title") title: string;
  @Input("columns") columns: string[];
  @Input("sorting") sorting: string;
  @Input("pagination") pagination: string;
  @Input("export") export: string[] = [];
  @Input("print") print: string;
  @Input("approve") approve: string;
  @Input("reject") reject: string;
  @Input("datasource") dataSource: MatTableDataSource<any>;
  @Output("approveClick") approveClick = new EventEmitter();
  @Output("rejectClick") rejectClick = new EventEmitter();
  
  constructor() { 
  }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    if (this.pagination === 'required') {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sorting === 'required') {
      this.dataSource.sort = this.sort;
    }

  }

  ngOnChanges() {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  contains(value: string): boolean {
    let len = this.export.length;

    while (len--) {
      if (this.export[len]===value)
        return true;
    }

    return false;
  }

  isExportRequired(): boolean {
    return (this.export.length > 0);
  }

  onApproveClick() {
    this.approveClick.emit();
  }

  onRejectClick() {
    this.rejectClick.emit();
  }

}