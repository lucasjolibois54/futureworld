import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkAndEconomicGrowthPageRoutingModule } from './work-and-economic-growth-routing.module';

import { WorkAndEconomicGrowthPage } from './work-and-economic-growth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkAndEconomicGrowthPageRoutingModule
  ],
  declarations: [WorkAndEconomicGrowthPage]
})
export class WorkAndEconomicGrowthPageModule {}
