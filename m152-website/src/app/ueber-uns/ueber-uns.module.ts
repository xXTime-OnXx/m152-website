import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UeberUnsPageRoutingModule } from './ueber-uns-routing.module';

import { UeberUnsPage } from './ueber-uns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UeberUnsPageRoutingModule
  ],
  declarations: [UeberUnsPage]
})
export class UeberUnsPageModule {}
