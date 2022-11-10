import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-bullet-points-on-two-sections-default-two',
  templateUrl: './bullet-points-on-two-sections-default-two.component.html',
  styleUrls: ['./bullet-points-on-two-sections-default-two.component.scss'],
})
export class BulletPointsOnTwoSectionsDefaultTwoComponent implements OnInit {

  @Input() thirdlist

  constructor() { }

  ngOnInit() {}

}
