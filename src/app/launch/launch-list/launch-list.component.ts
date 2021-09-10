import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILaunch } from 'src/app/models/launch.model';
import { LaunchListService } from 'src/app/services/launch-list.service';
import { SpaceApiService } from 'src/app/services/space-api.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private launchListService : LaunchListService) {

  }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        if (data.launch.length > 0){
          this.launchListService.setLaunchList(data.launch);
        }
      });
  }

  get launchList(): ILaunch[] {
    return this.launchListService.getLaunchList();
  }

  clickLaunch(rocket_id : string) : void{
    console.log("clicked " + rocket_id);
    this.router.navigate(['/rocket/' + rocket_id]);
  }
}
