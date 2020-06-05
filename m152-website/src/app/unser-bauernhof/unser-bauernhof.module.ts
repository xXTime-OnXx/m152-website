import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnserBauernhofPageRoutingModule } from './unser-bauernhof-routing.module';

import { UnserBauernhofPage } from './unser-bauernhof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnserBauernhofPageRoutingModule
  ],
  declarations: [UnserBauernhofPage]
})
export class UnserBauernhofPageModule {}
