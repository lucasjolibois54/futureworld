import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-poverty',
  templateUrl: './poverty.page.html',
  styleUrls: ['./poverty.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PovertyPage implements OnInit {

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 60,
    breakpoints: {
        315: {
            spaceBetween: 20,
            slidesPerView:'1.3'
        },

        768: {
          spaceBetween: 20,
          slidesPerView:'2.5'
      },

        1024: {
          spaceBetween: 10,
          slidesPerView:'2.7'
      },

      1498: {
        spaceBetween: 60,
        slidesPerView:'3.5'
    },

      2560: {
        spaceBetween: 20,
        slidesPerView:'3.5'
    }
    }
}

  herodata={
    title: 'We are experts in inspiring companies, to change the world with 4 Sustainable Development goals.',
  }

  subherodata={
    introtext: '“We are experts in inspiring companies, to change the world with 4 Sustainable Development goals. We are experts in inspiring companies, to change the world with 4 Sustainable Development goals. We are experts in inspiring companies, to change the world with 4 Sustainable Development goals. ',
    pagelink: "https://futureworld.vercel.app/poverty"
  }

  primarytextdata={
    titlepartone: 'All of',
    titleparttwo: 'our',
    titlepartthree: 'Sustainable',

    textone: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    texttwo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
    cta: "Our goals and values",
    ctalink: 'https://www.pexels.com/da-dk/video/huse-stov-fattig-faellesskab-3695933/',
    textthree: '“Our goal is to help you as a student become less economical worried by giving you access to cheap & modern student apartments. We want to improve your consumption in the household and show you how to save money.',
  }

  videodata={
    videolink: 'https://res.cloudinary.com/dckwf6med/video/upload/v1661542030/Web%20Dev%20Projects/About_Us-_LB_Fitness_1_yqqh70.mp4?controls=0',
  }

  secondarytextdata={
    titlepartone: 'All of',
    titleparttwo: 'our',
    titlepartthree: 'Sustainable',

    textone: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    texttwo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
    cta: "Our goals and values",
    ctalink: 'https://www.pexels.com/da-dk/video/huse-stov-fattig-faellesskab-3695933/',
    textthree: '“Our goal is to help you as a student become less economical worried by giving you access to cheap & modern student apartments. We want to improve your consumption in the household and show you how to save money.',
  }

  factboxdata={
    titlepartone: 'Did you',
    titlepartto: 'know',
    titlepartthree: 'these',
    titlepartfour: 'numbers?',

    subtitleone: "More than",
    subtitletwo: "More than",
    subtitlethree: "More than",
    subtitlefour: 'More than',

    textone: "750mil in poverty",
    texttwo: "600mil homeless",
    textthree: "750mil in poverty",
  }

  imagedata={
    imagelink: './assets/img/poor-family.webp',
  }

  quotedata={
    textquote: '“Our goal is to help you as a student become less economical worried by giving you access to cheap & modern student apartments. We want to improve your consumption in the household and show you how to save money.',
  }

  nextprojectdata={
    textonelineone: 'Economic',
    textonelinetwo: 'Growth',
    nextporjectpathone: '/consumption-and-production',

    texttwolineone: 'Less',
    texttwolinetwo: 'Inequality',
    nextporjectpathtwo: '/reduced-inequalities',

  }



  constructor() { }

  ngOnInit() {
  }

}