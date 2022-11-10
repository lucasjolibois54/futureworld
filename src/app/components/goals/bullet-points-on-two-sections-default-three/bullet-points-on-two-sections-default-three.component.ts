import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-points-on-two-sections-default-three',
  templateUrl: './bullet-points-on-two-sections-default-three.component.html',
  styleUrls: ['./bullet-points-on-two-sections-default-three.component.scss'],
})
export class BulletPointsOnTwoSectionsDefaultThreeComponent implements OnInit {

  @Input() fourthlist

  constructor() { }

  ngOnInit() {}

}
