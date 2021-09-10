import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LaunchListResolver } from "../services/launch-list.resolver";
import { LaunchListService } from "../services/launch-list.service";
import { RocketDetailComponent } from "./rocket-detail/rocket-detail.component";
import { RocketRoutingModule } from "./rocket-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RocketRoutingModule
    ],
    declarations: [
        RocketDetailComponent
    ],
    exports: [

    ],
    providers: [
        LaunchListResolver
    ]
  })
export class RocketModule {
    constructor(){
        console.log("RocketModule loaded");
    }
}