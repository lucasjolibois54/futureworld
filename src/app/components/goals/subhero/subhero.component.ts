import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subhero',
  templateUrl: './subhero.component.html',
  styleUrls: ['./subhero.component.scss'],
})
export class SubheroComponent implements OnInit {

  @Input() subhero

  constructor() { }

  ngOnInit() {}

}
