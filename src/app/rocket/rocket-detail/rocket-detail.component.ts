import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRocket } from 'src/app/models/launch.model';
import { LaunchListService } from 'src/app/services/launch-list.service';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.scss']
})
export class RocketDetailComponent implements OnInit {

  rocket: IRocket | null = null;

  constructor(private route: ActivatedRoute,
    private launchListService: LaunchListService) {

      
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        if (data.launch.length > 0){
          this.launchListService.setLaunchList(data.launch);
        }

        let rocket_id = this.route.snapshot.params["id"];
        console.log("id=" + rocket_id);
        this.rocket = this.launchListService.getRocket(rocket_id);
        
      });
  }

  getReused() : string{
    if (this.rocket == null){
      return "NA";
    }
    let reUsed = "No";
    
    this.rocket.first_stage.cores.forEach( c => {
      if (c.reused){
        reUsed = "Yes";
      }
    });

    this.rocket.second_stage.payloads.forEach (p =>{
      if (p.reused){
        reUsed = "Yes";
      }
    })

    if (this.rocket.fairings.reused){
      reUsed = "Yes";
    }

    return reUsed;
  }
}
