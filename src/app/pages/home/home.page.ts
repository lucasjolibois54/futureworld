import { Component, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  data={
    name: 'Brorz',
    age: 999,
    city: 'lililand'
  }
  constructor() {}

}
