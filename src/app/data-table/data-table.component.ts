import { Component, OnInit } from '@angular/core';
import { SolutionsService } from '../services/solutions.service';
import { Solution } from '../models';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'owner', 'duedate'];
  dataSource: Solution[] = [];

  constructor(private solutionsService: SolutionsService) { }

  ngOnInit() {
    this.solutionsService.getSolutions().subscribe(
      data => this.dataSource = data
    )
  }

}