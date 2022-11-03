import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeroComponent } from 'src/app/components/home/hero/hero.component';
import { NavComponent } from 'src/app/components/main/nav/nav.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    NavComponent,
    HeroComponent]
})
export class HomePageModule {}
