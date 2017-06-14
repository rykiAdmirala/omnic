import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

import { ChartsService } from '../services/index';
import { TypeChart } from '../models/index';

@Component({
  template: `
    <div class="chart-holder">
      
      <div class="chart-types">
        <div class="chart-type"
          *ngFor="let type of chartTypes"
          (click)="selectType(type)"
          [class.selected]="isSelected(type)"
        >
          {{ type.typeName }}
        </div>
      </div>

      <table class="chart">
        <tr class="chart__row"
          *ngFor="let row of selectedChart"
        >
          <td class="chart__col"
            *ngFor="let col of row"
          >
            {{ col }}
          </td>
        </tr>
      </table>      


      <a class="chart-type chart-type--add"
        [routerLink]="['../add']"
      >
        Add new SizeChart
      </a>

      <a class="chart-type chart-type--add"
        [routerLink]="[selectedTypeName.toLowerCase(), 'edit']"
      >
        Edit this SizeChart
      </a>
    
    </div>
  `
})
export class ChartDetails implements OnInit {

  public chartTypes: any[];
  public selectedTypeStream = new Subject<any>();
  public selectedTypeName: string = '';
  public selectedChart: TypeChart;

  constructor(
    private route: ActivatedRoute,
    private chartsService: ChartsService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.chartsService.getChart(params.gender))
      .subscribe(selectedGender => {
        this.chartTypes = selectedGender.types;

        this.selectedTypeStream
          .startWith(this.chartTypes[0])
          .map(type => {
            this.selectedTypeName = type.typeName;
            this.selectedChart = type.chart;
          })
          .subscribe();
      });
  }

  isSelected(type) {
    return this.selectedTypeName === type.typeName;
  }

  selectType(type) {
    this.selectedTypeStream.next(type);
  }

  

}