"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./containers/index");
exports.routes = router_1.RouterModule.forRoot([
    {
        path: 'charts',
        component: index_1.Charts,
        children: [
            {
                path: ':gender',
                children: [
                    { path: '', component: index_1.ChartDetails },
                    { path: 'add', component: index_1.ChartAddEdit },
                    { path: ':type/edit', component: index_1.ChartAddEdit }
                ]
            }
        ]
    }, {
        path: '',
        redirectTo: '/charts',
        pathMatch: 'full'
    }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]);
