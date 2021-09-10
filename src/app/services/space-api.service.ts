import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ILaunch} from "../models/launch.model";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SpaceApiService {
    private launchListUrl = environment.spaceApiUrl;

    constructor(private http: HttpClient){
    }

    loadLaunchList(): Observable<ILaunch[]> {
        console.log("SpaceApiService::loadLaunchList");
        return this.http.get<ILaunch[]>(this.launchListUrl).pipe(
            
            catchError(error => {
                // custom error log 
                console.log('Error loadLaunchList from: ' + this.launchListUrl);
                return [];
            })
        );
    }

}