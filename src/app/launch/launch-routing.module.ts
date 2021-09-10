import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchListResolver } from '../services/launch-list.resolver';
import { LaunchListComponent } from './launch-list/launch-list.component';


const routes: Routes = [
  {
    path: '',
    component: LaunchListComponent,
    resolve : {
        launch : LaunchListResolver
      }
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchRoutingModule { }