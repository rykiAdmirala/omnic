import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Charts, ChartDetails, ChartAddEdit } from './containers/index';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'charts',
    component: Charts,
    children: [
      {
        path: ':gender',
        children: [
          {path: '', component: ChartDetails},
          {path: 'add', component: ChartAddEdit},
          {path: ':type/edit', component: ChartAddEdit}
        ]
      }
    ]
  },{
    path: '',
    redirectTo: '/charts',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
])