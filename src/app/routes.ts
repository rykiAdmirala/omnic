import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Charts, ChartDetails, ChartAddEdit } from './containers/index';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: Charts,
    children: [
      {
        path: '',
        redirectTo: '/women',
        pathMatch: 'full'
      },{
        path: ':gender',
        children: [
          {path: '', component: ChartDetails},
          {path: 'add', component: ChartAddEdit},
          {path: ':type/edit', component: ChartAddEdit}
        ]
      }
    ]
  },{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
])