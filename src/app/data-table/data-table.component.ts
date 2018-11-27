import { Component, OnInit } from '@angular/core';
import { SolutionsService } from '../services/solutions.service';
import { Solution } from '../models';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'owner', 'duedate', 'actions'];
  dataSource: Solution[] = [];

  constructor(private solutionsService: SolutionsService,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.solutionsService.getSolutions().subscribe(
      data => this.dataSource = data
    );
  }
  onDeleteSolution(solution: Solution) {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(
      res => {
        if (res) {
          this.dataSource = this.dataSource.filter(h => h !== solution);
          this.solutionsService.deleteSolution(solution).subscribe();
          console.log(solution.name + '! Deleted successfully');
        }
    });
  }
}
