import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

import { ChartsService } from '../services/index';
import { TypeChart } from '../models/index';

@Component({
  template: `
    <div class="chart-edit">

      <label class="chart-edit__name">Type Chart name: <input [(ngModel)]="typeChart.typeName"></label>
    
      <table class="chart-edit__table">
        <tr
          *ngFor="let row of typeChart.chart; let rowIdx = index; trackBy: trackByIndex;"
        >
          <td
            *ngFor="let col of row; let colIdx = index; trackBy: trackByIndex;"
          >
            <input type="text" [(ngModel)]="typeChart.chart[rowIdx][colIdx]">
          </td>
        </tr>
      </table>



      <button class="manage-chart manage-chart--cancel"
        (click)="navigateToParent()"
      >
        Cancel
      </button>

      <button class="manage-chart manage-chart--save"
        (click)="onSaveChart()"
      >
        Save chart
      </button>
    
    </div>
  `
})
export class ChartAddEdit implements OnInit {

  public genderName: string;
  public typeChart: TypeChart;
  public isTypeChartNew: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chartsService: ChartsService
  ) {
    this.typeChart = new TypeChart();
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.genderName = params['gender'];

        if (params['type']) {
          
          this.chartsService
            .getChart(this.genderName)
            .subscribe(gender => {
              this.typeChart = gender.types.find(type => type.typeName.toLowerCase() === params['type']);
            });

          this.isTypeChartNew = false;
            
        }
      });

  }

  onSaveChart() {
    if (this.isTypeChartNew) {
      this.chartsService
        .addTypeChart(this.genderName, this.typeChart)
        .subscribe(
          data => this.navigateToParent(),
          error => alert('No REST API')
        );
    } else {
      this.chartsService
        .updateTypeChart(this.genderName, this.typeChart)
        .subscribe(
          data => this.navigateToParent(),
          error => alert('No REST API')
        );
    }
  }

  navigateToParent() {
    this.router.navigate(['/' + this.genderName]);
  }

  trackByIndex(index, value) {
    return index;
  }
  
}