import { ForecastServiceService } from './../../services/forecast-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {
  spots: any | null;

  constructor(private route: ActivatedRoute, private service: ForecastServiceService) { }

    ngOnInit() {
      const countyName = this.route.params['_value'].name;
      console.log(countyName);
      if (countyName) {
        this.service.getSpots(countyName)
        .subscribe(data => {
          console.log(data);
          this.spots = data;
        });
      }
    }

}
