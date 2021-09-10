import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "launch", loadChildren: () => import('./launch/launch.module').then(m => m.LaunchModule)},

  { path: "rocket", loadChildren: () => import('./rocket/rocket.module').then(m => m.RocketModule)},

  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
