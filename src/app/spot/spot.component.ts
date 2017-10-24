import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

  spot: any;

  constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
      console.log(this.route.params);
      this.route.data
      .subscribe((data: { spot: any }) => {
        this.spot = data.spot;
      });
    }
  
}
