import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChartsService } from '../services/index';

@Component({
  template: `
    
    <div class="nav-title">Select your category</div>

    <nav class="nav">
      <ul>
        <li
          *ngFor="let chart of charts"
        >
          <a
            [routerLink]="['/' + chart.name.toLowerCase()]"
            routerLinkActive="active"
          >
            {{ chart.name }}
          </a>
        </li>
        
      </ul>
    </nav>
    
    <router-outlet></router-outlet>


  `
})
export class Charts implements OnInit {
  
  public charts;

  constructor(
    private router: Router,
    private chartsService: ChartsService
  ) {}

  ngOnInit() {

    this.chartsService.getCharts()
    .subscribe(resp => this.charts = resp);

  }

  getRouterLink(chart) {
    let a = `./${chart.name.toLowerCase()}`;
    console.log(a);
    return a;
  }


}
