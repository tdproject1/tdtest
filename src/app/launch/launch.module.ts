import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LaunchListResolver } from "../services/launch-list.resolver";
import { LaunchDateFormat } from "../shared/LaunchDate.pipe";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchRoutingModule } from "./launch-routing.module";

@NgModule({
    imports: [
        CommonModule,
        LaunchRoutingModule
    ],
    declarations: [
        LaunchListComponent,
        LaunchDateFormat,
      
    ],
    exports: [

    ],
    providers: [
        LaunchListResolver
    ]
  })
export class LaunchModule {
    constructor(){
        console.log("LaunchModule loaded");
    }
}