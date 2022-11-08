import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-reduced-inequalities',
  templateUrl: './reduced-inequalities.page.html',
  styleUrls: ['./reduced-inequalities.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReducedInequalitiesPage implements OnInit {
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
        slidesPerView:'2.8'
    },
  
      2560: {
        spaceBetween: 20,
        slidesPerView:'2.8'
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
    textthree: '“Goal number 1 commits every nation of the world to initiate a targeted effort to increase the poor nations access to basic resources, like food, medicine, and service provisions like education.',
  }

  imageonedata={
    imagelink: './assets/img/poverty-img-1.png',
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

  primarylistdata={
    titlepartone: 'All of',
    titleparttwo: 'our',
    titlepartthree: 'Sustainable',

    textone: "Facts",
    listone: "50% of all people living in poverty are below 18 years of age.",
    listtwo:"1 person in every 10 is extremely poor- living below 1.90$ per day.",
    listthree:"1 out 5 children live in extreme poverty Poorest Country in the World: Liberia (GNI per capita: $710)",
    listfour:"Richest country in the world: Qatar (GNI per capita of $116,799)",
    listfive:"Best Performing countries",
    listsix:"Denmark, Sweden, Finland, France, Austria, Germany",
    textthreetitle: "Idea:",
    textthree: "Install a Donation box in the common spaces in your office. Call it the 'Box of Happiness' and start an office ritual of donating 1 kr whenever someone feels happy or grateful. At the end of the year, donate the money collected to NGOs working for poverty eradication. Make sure to let your employees know that their happiness is contagious, as their contributions will make many other poor people happy!",
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
    textquote: "Eradicating poverty is not a task of charity, it's an act of justice and the key to unlocking an enormous human potential. Still, nearly half of the worl's population lives in poverty, and lack of food and clean water is killing thousands every single day of the year. Together, we can feed the hungry, wipe out disease and give everyone in the world a chance to prosper and live a productive and rich life."
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