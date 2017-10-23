import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
      console.log(this.route.params);
    }
  
}
