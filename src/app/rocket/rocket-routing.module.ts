import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchListResolver } from '../services/launch-list.resolver';
import { RocketDetailComponent } from './rocket-detail/rocket-detail.component';



const routes: Routes = [
  {
    path: ":id",   component: RocketDetailComponent,
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
export class RocketRoutingModule { }