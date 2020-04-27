import { Routes } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { ViewComponent } from "./view/view.component";
import { SingleViewComponent } from "./single-view/single-view.component";

export const AppRoutes: Routes = [
  { path: "", component: ViewComponent },
  { path: "single-view/:slug", component: SingleViewComponent },
  // {
  //   path: '',
  //   component: FullComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '/dashboard',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: '',
  //       loadChildren:
  //         () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  //     }
  //   ]
  // }
];
