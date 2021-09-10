import { Injectable } from "@angular/core";
import { ILaunch, IRocket } from "../models/launch.model";
import { SpaceApiService } from "./space-api.service";

@Injectable({
    providedIn: 'root',
})
export class LaunchListService {

    private launchList: ILaunch[] = [];

    constructor() {
    }

    getLaunchList(flight_number: number = 0): ILaunch[] {
        return this.launchList
        .filter(launch => flight_number == 0 || flight_number == launch.flight_number);
    }

    setLaunchList(launchList_ : ILaunch[]){
        console.log("setLaunchList");
        this.launchList = launchList_;
    }

    getRocket(rocket_id : string) : IRocket | null{

        let rocket  = null;

        this.launchList.forEach( launch => {
            if (launch.rocket.rocket_id == rocket_id){
                rocket = launch.rocket;
            }
        })

        return rocket;
    }
}