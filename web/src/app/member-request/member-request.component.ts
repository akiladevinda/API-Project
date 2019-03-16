import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', action: 'add', },
  { name: 'Hydrogen', action: 'add', },
  { name: 'Hydrogen', action: 'add', },
  { name: 'Hydrogen', action: 'add', },
  { name: 'Hydrogen', action: 'add', },
  { name: 'Hydrogen', action: 'add', },
  { name: 'Hydrogen', action: 'add', },
  { name: 'Hydrogen', action: 'add', },

];

@Component({
  selector: 'app-member-request',
  templateUrl: './member-request.component.html',
  styleUrls: ['./member-request.component.scss']
})



export class MemberRequestComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
