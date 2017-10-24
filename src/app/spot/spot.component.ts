import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

  spot: any;
  data: any;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.data
    .subscribe((data: { spot: any }) => {
      this.spot = data.spot;
      this.loadChart();
    });
  }

  loadChart() {
    const hoursArray = this.spot.map(value => value.hour);
    const heightData = this.spot.map(value => value.size);

    this.data = {
      labels: hoursArray,
      datasets: [
          {
              label: 'Wave Height',
              data: heightData,
              fill: false,
              borderColor: '#4bc0c0'
          }
      ]
    };
  }

}
