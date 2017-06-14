import { Injectable } from '@angular/core';
import { ApiService } from './index';

@Injectable()
export class ChartsService {

  public url = '/assets/data.json';
  public chartsPath: string = 'charts';
  
  constructor (
    private api: ApiService
  ) {}

  

  getCharts() {
    return this.api.get(this.url)
      .map(resp => resp[this.chartsPath]);
  }

  getChart(genderName) {
    return this.api.get(this.url)
      .map(resp => {
        let charts = resp[this.chartsPath];
        return charts.find(gender => gender.name.toLowerCase() === genderName);
      });
  }

  updateTypeChart(gender, typeChart) {
    return this.api.post(`${this.url}/update`, {gender, typeChart});
  }

  addTypeChart(gender, typeChart) {
    return this.api.post(`${this.url}/add`, {gender, typeChart});
  }


}