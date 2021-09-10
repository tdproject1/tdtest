import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { ILaunch } from "../models/launch.model";
import { LaunchListService } from "./launch-list.service";
import { SpaceApiService } from "./space-api.service";



@Injectable()
export class LaunchListResolver {
    constructor(
        private launchListService : LaunchListService,
        private spaceApiService : SpaceApiService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILaunch[]>{

        if (this.launchListService.getLaunchList().length == 0) {
            console.log("load launch list...");
            return this.spaceApiService.loadLaunchList();
        }

        return of([]);
    }
}