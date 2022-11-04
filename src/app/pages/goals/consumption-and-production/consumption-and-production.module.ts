import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumptionAndProductionPageRoutingModule } from './consumption-and-production-routing.module';

import { ConsumptionAndProductionPage } from './consumption-and-production.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumptionAndProductionPageRoutingModule
  ],
  declarations: [ConsumptionAndProductionPage]
})
export class ConsumptionAndProductionPageModule {}
